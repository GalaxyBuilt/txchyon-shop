"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with wallet adapter
const WalletMultiButton = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-9 w-9 overflow-hidden rounded-xl transition-transform group-hover:scale-105">
                        <img
                            src="/logo.png"
                            alt="Txchyon Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black tracking-widest text-white uppercase leading-tight">
                            Txchyon
                        </span>
                        <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] leading-tight">
                            Vault
                        </span>
                    </div>
                </Link>

                {/* Navigation (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="#playbooks" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        Playbooks
                    </Link>
                    <Link href="#bundles" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        Bundles
                    </Link>
                    <Link href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        Protocol
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <WalletMultiButton className="solana-wallet-button" />
                    </div>
                    <Button variant="outline" size="sm" className="hidden lg:flex border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10" asChild>
                        <a href="https://txchyon.com">Hub</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}

