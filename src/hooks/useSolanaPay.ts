"use client";

import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { solWallet } from "@/lib/products";
import { useRouter } from "next/navigation";

export const useSolanaPay = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const initiatePayment = async (amountSol: number) => {
        if (!publicKey) {
            setError("Please connect your wallet first.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const destination = new PublicKey(solWallet);
            const lamports = Math.floor(amountSol * LAMPORTS_PER_SOL);

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: destination,
                    lamports,
                })
            );

            // Add recent blockhash and set fee payer
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            // Sign and send transaction
            const signature = await sendTransaction(transaction, connection);

            // Wait for confirmation
            const confirmation = await connection.confirmTransaction(signature, "confirmed");

            if (confirmation.value.err) {
                throw new Error("Transaction failed on-chain.");
            }

            // Success - redirect to granted page
            router.push("/access/granted");
        } catch (err: any) {
            console.error("Payment failed:", err);
            setError(err.message || "An unexpected error occurred during payment.");
        } finally {
            setLoading(false);
        }
    };

    return { initiatePayment, loading, error };
};
