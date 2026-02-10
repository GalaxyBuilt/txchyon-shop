import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1px]">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-sm font-bold text-white">TX</span>
                        </div>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                        Txchyon <span className="text-cyan-500">Shop</span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#playbooks" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Playbooks
                    </Link>
                    <Link href="#bundles" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Bundles
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        How It Works
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <a href="https://txchyon.com" className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Back to Hub
                    </a>
                    <Button variant="gradient" size="sm" asChild>
                        <Link href="#playbooks">
                            Unlock Access
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
