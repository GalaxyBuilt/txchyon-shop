"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product, solWallet, shopEmail } from "@/lib/products";
import { ArrowLeft, CheckCircle, Zap, Lock, CreditCard, ChevronRight, Loader2, AlertCircle } from "lucide-react";
import { useSolanaPay } from "@/hooks/useSolanaPay";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export function ProductContent({ product }: { product: Product }) {
    const { initiatePayment, loading, error } = useSolanaPay();
    const { connected } = useWallet();

    const handleCryptoPayment = async () => {
        await initiatePayment(product.priceSol);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Navigation Breadcrumb */}
            <div className="mb-12 flex items-center gap-4">
                <Link href="/#playbooks" className="group flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft className="mr-2 h-3 w-3 transition-transform group-hover:-translate-x-1" /> Repository
                </Link>
                <ChevronRight className="h-3 w-3 text-gray-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 italic">
                    {product.tag}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Left Column: Product Info */}
                <div className="space-y-12">
                    <div>
                        <div className="mb-8 flex items-center gap-6">
                            <div className="text-6xl bg-white/5 w-24 h-24 rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                                {product.icon}
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                        </div>

                        <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight md:text-6xl text-white italic uppercase">
                            {product.title}
                        </h1>

                        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                            {product.description}
                        </p>
                    </div>

                    {/* System Snapshot */}
                    <div className="glass-card rounded-[2.5rem] p-10">
                        <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 flex items-center gap-3 italic">
                            <Zap className="h-4 w-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]" /> System Diagnostics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest italic">Signal Inputs</div>
                                <div className="text-sm font-bold text-gray-300 leading-tight">{product.systemSnapshot.inputs}</div>
                            </div>
                            <div className="space-y-2 text-center md:border-x border-white/5">
                                <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest italic">Logic Rules</div>
                                <div className="text-sm font-bold text-gray-300 leading-tight">{product.systemSnapshot.rules}</div>
                            </div>
                            <div className="space-y-2 text-right">
                                <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest italic">Core Behavior</div>
                                <div className="text-sm font-bold text-gray-300 leading-tight">{product.systemSnapshot.behavior}</div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 italic">Protocol Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500 transition-transform group-hover:scale-150"></div>
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Action Card */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
                        {/* Gradient Accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px]"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[60px]"></div>

                        <div className="relative z-10">
                            <div className="mb-12">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 italic">Access Fee</div>
                                <div className="flex items-baseline gap-4">
                                    <div className="text-6xl font-black text-white italic tracking-tighter">${product.price}</div>
                                    <div className="text-xl text-gray-600 font-black uppercase tracking-widest italic">{product.priceSol} SOL</div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                {connected ? (
                                    <button
                                        onClick={handleCryptoPayment}
                                        disabled={loading}
                                        className="w-full relative group overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] animate-gradient transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <div className="flex h-16 items-center justify-between px-8 rounded-[15px] bg-black group-hover:bg-transparent transition-colors">
                                            <span className="flex items-center gap-3">
                                                {loading ? <Loader2 className="h-5 w-5 text-cyan-400 animate-spin" /> : <Zap className="h-5 w-5 text-cyan-400" />}
                                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                                                    {loading ? "Confirming Protocol..." : "Initialize Solana Pay"}
                                                </span>
                                            </span>
                                            {!loading && <ChevronRight className="h-4 w-4 text-white/50 group-hover:text-white" />}
                                        </div>
                                    </button>
                                ) : (
                                    <div className="flex flex-col gap-4">
                                        <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-center">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-cyan-500 mb-2">Wallet Disconnected</p>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                                                Connect your wallet to access high-speed crypto settlement.
                                            </p>
                                        </div>
                                        <WalletMultiButton className="solana-wallet-button w-full" />
                                    </div>
                                )}

                                {error && (
                                    <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest italic">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                {/* Divider */}
                                <div className="flex items-center gap-4 py-2">
                                    <div className="h-px flex-1 bg-white/5"></div>
                                    <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] italic">Traditional Gateway</span>
                                    <div className="h-px flex-1 bg-white/5"></div>
                                </div>

                                {/* Stripe Button */}
                                <Button variant="outline" size="lg" className="w-full justify-between h-16 rounded-2xl border-white/5 bg-white/[0.02] hover:bg-white/5 group px-8">
                                    <span className="flex items-center gap-3">
                                        <CreditCard className="h-5 w-5 text-gray-400 group-hover:text-white" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">Stripe Secure</span>
                                    </span>
                                    <span className="text-xs font-black italic tracking-widest">${product.price}</span>
                                </Button>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                    <Lock className="h-5 w-5 text-purple-400" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-purple-200">Protocol Fulfilled</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                                        Instant verification. Automated delivery to your vault.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Manual Fallback */}
                    <div className="mt-8 text-center">
                        <p className="text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] italic">
                            Issues with gateway? <Link href="/#how-it-works" className="text-gray-500 hover:text-cyan-400 transition-colors">Manual transfer protocol</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
