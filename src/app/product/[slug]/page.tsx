import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { products, solWallet, shopEmail } from "@/lib/products";
import { ArrowLeft, CheckCircle, Shield, Zap, Lock, CreditCard } from "lucide-react";

export function generateStaticParams() {
    return products.playbooks.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.playbooks.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                <div className="container mx-auto px-4">

                    {/* Back Button */}
                    <Link href="/#playbooks" className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left Column: Product Info */}
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="text-6xl">{product.icon}</span>
                                <span className="rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-bold text-purple-300 border border-purple-500/20">
                                    {product.tag}
                                </span>
                            </div>

                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                                {product.title}
                            </h1>

                            <p className="mb-8 text-xl text-gray-300 leading-relaxed">
                                {product.description}
                            </p>

                            {/* System Snapshot */}
                            <div className="mb-10 rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                                <h3 className="mb-6 text-lg font-bold text-white flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-cyan-400" /> System Snapshot
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Inputs</div>
                                        <div className="text-gray-300">{product.systemSnapshot.inputs}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Rules</div>
                                        <div className="text-gray-300">{product.systemSnapshot.rules}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Behavior</div>
                                        <div className="text-gray-300">{product.systemSnapshot.behavior}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-white">What You Get</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Sticky Action Card */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8 backdrop-blur-xl shadow-2xl">
                                <div className="mb-8 flex items-end gap-3">
                                    <div className="text-5xl font-bold text-white">${product.price}</div>
                                    <div className="mb-2 text-xl text-gray-500 font-mono">{product.priceSol} SOL</div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {/* Crypto Payment Option */}
                                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-5 transition-all hover:bg-cyan-950/30">
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                            <span className="font-bold text-cyan-100">Pay with Crypto (Manual)</span>
                                        </div>
                                        <div className="mb-3 text-sm text-gray-300">
                                            Send <span className="font-mono font-bold text-white">{product.priceSol} SOL</span> to:
                                        </div>
                                        <div className="mb-4 rounded bg-black/50 p-3 font-mono text-xs text-cyan-400 break-all border border-cyan-500/20">
                                            {solWallet}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            Then email hash to <a href={`mailto:${shopEmail}`} className="text-white hover:underline">{shopEmail}</a>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="relative text-center">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-800"></div>
                                        </div>
                                        <span className="relative bg-gray-900/80 px-2 text-xs text-gray-500 font-bold uppercase">Or pay with card</span>
                                    </div>

                                    {/* Stripe Button */}
                                    <Button variant="outline" size="lg" className="w-full justify-between h-14 border-gray-700 bg-transparent hover:bg-white hover:text-black group">
                                        <span className="flex items-center gap-2"><CreditCard className="h-5 w-5" /> Pay with Card</span>
                                        <span className="font-bold">${product.price}</span>
                                    </Button>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <Lock className="h-5 w-5 text-purple-400 mt-0.5" />
                                    <div className="text-sm">
                                        <div className="font-bold text-purple-200 mb-1">Instant Access</div>
                                        <div className="text-purple-300/80">
                                            Download link sent immediately to your email after verification.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
