import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Header />

            <main className="flex-1 flex items-center justify-center py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-lg rounded-3xl border border-green-500/30 bg-green-950/10 p-12 backdrop-blur-sm">

                        <div className="mb-8 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-500/50">
                            <CheckCircle className="h-10 w-10 text-green-400" />
                        </div>

                        <h1 className="mb-4 text-3xl font-bold text-white">Access Granted</h1>

                        <p className="mb-8 text-lg text-gray-300">
                            Your payment has been verified. Welcome to the system.
                        </p>

                        <div className="mb-8 rounded-xl bg-black/40 p-6 border border-white/10">
                            <p className="mb-4 text-sm text-gray-400">
                                Playbook download links have been sent to your email.
                            </p>
                            <Button variant="outline" className="w-full gap-2 border-green-500/30 hover:bg-green-500/10 hover:text-green-400 hover:border-green-500">
                                <Download className="h-4 w-4" /> Resend Download Link
                            </Button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button variant="gradient" size="lg" className="w-full" asChild>
                                <Link href="/#playbooks">
                                    Browse More Playbooks <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <p className="text-xs text-gray-500">
                                Transaction ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                            </p>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
