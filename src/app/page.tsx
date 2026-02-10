import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { products, solWallet, shopEmail } from "@/lib/products";
import { cn } from "@/lib/utils";
import { BadgeCheck, Lock, Zap, Shield, BookOpen, Layers, MonitorPlay } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 pt-20">
          {/* Space Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Stars (CSS animated in globals.css) */}
            <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-30 animate-pulse-slow"></div>

            {/* Nebula Effects */}
            <div className="absolute top-1/4 left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slower"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 pt-28 pb-16 text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/40 px-5 py-2.5 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                INSTITUTIONAL PLAYBOOKS • CRYPTO-NATIVE PAYMENTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-8 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Access Institutional-Grade
              </span>
              <br />
              <span className="text-white">Crypto Playbooks</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300 md:text-2xl">
              Built for traders who already survived one cycle and don{"'"}t plan on losing the next.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Button size="xl" variant="gradient" asChild className="group">
                <Link href="#playbooks">
                  <Lock className="mr-2 h-5 w-5 group-hover:unlock" />
                  Unlock Access
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-cyan-500/30 bg-black/50 text-white hover:bg-cyan-500/10 hover:border-cyan-500" asChild>
                <Link href="#how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">5</div>
                  <div className="text-xs text-gray-400">PLAYBOOKS</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">$10-20</div>
                  <div className="text-xs text-gray-400">ENTRY PRICE</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">SOL/Card</div>
                  <div className="text-xs text-cyan-400">PAYMENT OPTIONS</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">Instant</div>
                  <div className="text-xs text-green-400">DELIVERY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAYBOOKS SECTION */}
        <section id="playbooks" className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Operational Playbooks
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-400">
                Systematic frameworks for execution. Not theory—actionable systems you can implement today.
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.playbooks.map((product) => (
                <div key={product.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  {/* Card Header */}
                  <div className="border-b border-gray-800 p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="text-4xl transition-transform group-hover:scale-110">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <span className="mb-3 inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-300">
                          {product.tag}
                        </span>
                        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 p-6">
                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-0.5 text-cyan-400">✓</span>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="border-t border-gray-800 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">${product.price}</div>
                        <div className="text-sm text-gray-500">{product.priceSol} SOL</div>
                      </div>
                      <Button variant="gradient" size="sm" asChild>
                        <Link href={`/product/${product.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUNDLES SECTION */}
        <section id="bundles" className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Access Packs
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-400">
                Unlock multiple playbooks and save. Immediate access to the Txchyon research stack.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {products.bundles.map((bundle) => (
                <div key={bundle.id} className={cn(
                  "relative rounded-2xl border bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:-translate-y-1 hover:shadow-2xl",
                  bundle.recommended
                    ? "border-purple-500/50 shadow-purple-500/10 scale-105"
                    : "border-gray-800 hover:border-gray-700"
                )}>
                  {bundle.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-sm font-bold text-white shadow-lg">
                        ⭐ RECOMMENDED
                      </span>
                    </div>
                  )}

                  <div className="mb-6 text-center md:text-left">
                    <h3 className="mb-2 text-2xl font-bold text-white">{bundle.title}</h3>
                    <p className="text-gray-400">{bundle.description}</p>
                  </div>

                  <div className="mb-6 text-center md:text-left">
                    <div className="mb-1 flex items-baseline justify-center md:justify-start gap-2">
                      <span className="text-4xl font-bold text-white">${bundle.price}</span>
                      <span className="text-2xl text-gray-600 line-through">${bundle.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">{bundle.priceSol} SOL</div>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={bundle.recommended ? "gradient-secondary" : "default"} size="lg" className="w-full">
                    Unlock {bundle.title}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    How It Works
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Crypto Payment */}
                <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-gray-900 to-black p-8">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Pay with SOL</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-sm"><span className="font-bold text-cyan-400">1.</span> Choose your playbook</p>
                    <p className="text-sm"><span className="font-bold text-cyan-400">2.</span> Send SOL to provided wallet</p>
                    <p className="text-sm"><span className="font-bold text-cyan-400">3.</span> Email transaction hash to {shopEmail}</p>
                    <p className="text-sm"><span className="font-bold text-cyan-400">4.</span> Receive download link (within 24h)</p>
                  </div>
                  <div className="mt-6 rounded-lg bg-black/40 p-4">
                    <div className="mb-1 text-xs text-gray-500">Wallet Address:</div>
                    <div className="break-all font-mono text-xs text-cyan-400">{solWallet}</div>
                  </div>
                </div>

                {/* Card Payment */}
                <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-gray-900 to-black p-8">
                  <div className="mb-4 text-4xl">💳</div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Pay with Card</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-sm"><span className="font-bold text-purple-400">1.</span> Choose your playbook</p>
                    <p className="text-sm"><span className="font-bold text-purple-400">2.</span> Click "Pay with Card"</p>
                    <p className="text-sm"><span className="font-bold text-purple-400">3.</span> Complete Stripe checkout</p>
                    <p className="text-sm"><span className="font-bold text-purple-400">4.</span> Instant automated delivery</p>
                  </div>
                  <div className="mt-6 rounded-lg bg-black/40 p-4">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-green-400" /> Secure Stripe payment</div>
                      <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-yellow-400" /> Instant delivery</div>
                      <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-400" /> Email receipt included</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-gray-900 via-purple-900/20 to-cyan-900/20 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="rounded-3xl border border-cyan-500/30 bg-white/5 p-10 backdrop-blur-sm">
                <div className="mb-6 text-5xl">🚀</div>

                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Ready to Level Up?
                </h2>

                <p className="mb-8 text-lg text-gray-300">
                  Stop learning from YouTube gurus. Start executing with institutional-grade playbooks.
                </p>

                <Link
                  href="#playbooks"
                  className="inline-block transform rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/40">
                  Browse Playbooks
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
