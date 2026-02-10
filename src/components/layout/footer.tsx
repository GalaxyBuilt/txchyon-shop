import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold tracking-tight text-white">
                                Txchyon <span className="text-cyan-500">Shop</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Institutional-grade crypto playbooks for traders who want systems, not noise.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Social placeholders */}
                            <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
                            <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
                            <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li><Link href="#playbooks" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Playbooks</Link></li>
                            <li><Link href="#bundles" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Access Packs</Link></li>
                            <li><Link href="#systems" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Systems (Coming Soon)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:shop@txchyon.com" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Email Support</a></li>
                            <li><Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Txchyon Labs. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        All Systems Operational
                    </p>
                </div>
            </div>
        </footer>
    );
}
