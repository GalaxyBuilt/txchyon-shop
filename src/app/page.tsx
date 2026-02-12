"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { products, solWallet, shopEmail } from "@/lib/products";
import { cn } from "@/lib/utils";
import { BadgeCheck, Lock, Zap, Shield, BookOpen, Layers, MonitorPlay, ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-cyan-500/30">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] overflow-hidden pt-20 flex items-center">
          {/* Space Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-20 animate-pulse-slow"></div>

            {/* Advanced Nebula Effects */}
            <div className="absolute top-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slower"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[100px]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            {/* Institutional Badge */}
            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-6 py-2 backdrop-blur-md">
              <div className="flex -space-x-2">
                <div className="h-5 w-5 rounded-full border border-black bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="h-5 w-5 rounded-full border border-black bg-purple-500"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                Institutional Knowledge Vault v2.0
              </span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl lg:text-8xl">
              <span className="text-white">Professional </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Execution
                </span>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-400/50 to-transparent blur-sm"></div>
              </span>
              <br />
              <span className="text-white/90">For the Modern Era</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-gray-400 md:text-xl">
              Precision-engineered playbooks and systematic frameworks built for the top 1% of market participants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-6 sm:flex-row items-center">
              <Button size="xl" variant="gradient" asChild className="group px-10 h-16 text-sm uppercase tracking-widest font-black rounded-xl">
                <Link href="#playbooks">
                  Initialize Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors"
              >
                View Protocol <ChevronRight className="inline-block ml-1 h-3 w-3" />
              </button>
            </div>

            {/* Trust Matrix */}
            <div className="mx-auto mt-24 max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {[
                { label: "Assets", value: "05", sub: "Operational" },
                { label: "Level", value: "Tier-1", sub: "Institutional" },
                { label: "Gateway", value: "SOL", sub: "Instant" },
                { label: "Security", value: "Vault", sub: "AES-256" }
              ].map((stat, i) => (
                <div key={i} className="glass-panel rounded-2xl p-6 text-left group hover:border-white/10 transition-colors">
                  <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-cyan-500/70">{stat.label}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAYBOOKS SECTION */}
        <section id="playbooks" className="relative py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-4 italic">
                    Repository 01
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                    Operational Playbooks
                  </h3>
                  <p className="max-w-xl text-lg text-gray-500">
                    Systematic frameworks designed for immediate implementation. No fluff. Just execution.
                  </p>
                </div>
                <div className="hidden md:block h-px flex-1 bg-white/5 mx-12 mb-6"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.playbooks.map((product) => (
                <div key={product.id} className="glass-card group flex flex-col overflow-hidden rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex flex-col h-full rounded-[calc(1.5rem-1px)] p-7">
                    {/* Card Header */}
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex flex-col gap-4">
                        <div className="text-4xl bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                          {product.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-1 block italic">
                            {product.tag}
                          </span>
                          <h4 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                            {product.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400 mb-8 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="flex-1 space-y-4 mb-8">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-1 w-1 rounded-full bg-cyan-500/50"></div>
                          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Access Fee</div>
                        <div className="text-2xl font-black text-white">${product.price}</div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10 font-black uppercase text-[10px] tracking-widest px-6" asChild>
                        <Link href={`/product/${product.slug}`}>
                          Vault View
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
        <section id="bundles" className="relative py-32 bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="mb-20 text-center">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-4 italic">
                Repository 02
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                Institutional Packs
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-gray-500">
                Unlock full stack research capabilities. Maximized alpha, optimized access fees.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
              {products.bundles.map((bundle) => (
                <div key={bundle.id} className={cn(
                  "glass-card relative flex flex-col rounded-[2.5rem] p-1 transition-all duration-500",
                  bundle.recommended ? "scale-105 z-10 lg:-translate-y-4" : "opacity-80 grayscale hover:grayscale-0 hover:opacity-100"
                )}>
                  {bundle.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <span className="glass-panel rounded-full px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 border-cyan-500/30">
                        Top Protocol Choice
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col h-full rounded-[calc(2.5rem-1px)] p-10">
                    <div className="mb-10">
                      <h4 className="text-3xl font-black text-white mb-3">{bundle.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{bundle.description}</p>
                    </div>

                    <div className="mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-5xl font-black text-white">${bundle.price}</span>
                        <span className="text-xl text-gray-600 line-through font-bold">${bundle.originalPrice}</span>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-cyan-500">
                        Equivalent to {bundle.priceSol} SOL
                      </div>
                    </div>

                    <ul className="mb-12 space-y-4 flex-1">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                            <BadgeCheck className="h-3 w-3 text-cyan-400" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 leading-tight pt-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button variant={bundle.recommended ? "gradient-secondary" : "outline"} size="lg" className="h-16 rounded-2xl font-black uppercase text-xs tracking-[0.2em] group">
                      Initialize Protocol
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROTOCOL SECTION */}
        <section id="how-it-works" className="relative py-32 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-20 text-center">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-4 italic">
                  Operational Guidelines
                </h2>
                <h3 className="text-4xl font-black text-white">Access Protocol</h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Solana Protocol */}
                <div className="glass-card rounded-[2rem] p-10 flex flex-col h-full border-cyan-500/10">
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Zap className="h-8 w-8 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-wider italic">Solana Gateway</h4>
                  <div className="space-y-6 flex-1 text-gray-400">
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-cyan-500">01</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Connect Wallet (Phantom/Solflare)</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-cyan-500">02</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Select Playbook or Access Pack</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-cyan-500">03</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Execute On-Chain Transaction</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-cyan-500">04</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Vault content delivered via Protocol</p>
                    </div>
                  </div>
                  <div className="mt-10 p-5 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-2 italic">Gateway Address</div>
                    <div className="font-mono text-[10px] text-cyan-400 break-all">{solWallet}</div>
                  </div>
                </div>

                {/* Card Protocol */}
                <div className="glass-card rounded-[2rem] p-10 flex flex-col h-full border-purple-500/10">
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-wider italic">Traditional Gateway</h4>
                  <div className="space-y-6 flex-1 text-gray-400">
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-purple-500">01</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Standard Stripe Secure Checkout</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-purple-500">02</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Instant Validation & Fulfillment</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-black text-purple-500">03</span>
                      <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Automated Delivery to Inbox</p>
                    </div>
                  </div>
                  <div className="mt-10 p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-purple-400/80 leading-relaxed text-center italic">
                      "Professional systems, delivered instantly."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-40 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="glass-panel rounded-[3rem] p-16 md:p-24 border border-white/10">
                <div className="mb-8 flex justify-center text-5xl">
                  <div className="relative">
                    <MonitorPlay className="h-20 w-20 text-white" />
                    <div className="absolute inset-0 blur-2xl bg-cyan-500/30 -z-10 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="mb-8 text-4xl md:text-6xl font-black text-white tracking-widest uppercase italic">
                  Level Up
                </h2>

                <p className="mb-12 mx-auto max-w-lg text-lg text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                  Start executing with institutional intelligence.
                </p>

                <Button
                  size="xl"
                  variant="gradient"
                  className="px-16 h-20 rounded-2xl font-black uppercase text-sm tracking-[0.4em] shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_60px_rgba(6,182,212,0.4)]"
                  asChild
                >
                  <Link href="#playbooks">Browse Vault</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
