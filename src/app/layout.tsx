import { Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { SolanaProvider } from "@/components/providers/SolanaProvider";

export const metadata: Metadata = {
  title: "Txchyon Shop | Institutional Knowledge Vault",
  description: "Access institutional-grade crypto playbooks and operational systems.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
    ]
  },
  openGraph: {
    title: "Txchyon Shop | Institutional Knowledge Vault",
    description: "Access institutional-grade crypto playbooks and operational systems.",
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Txchyon Shop | Institutional Knowledge Vault",
    description: "Access institutional-grade crypto playbooks and operational systems.",
    images: ['/logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        mulish.variable
      )}>
        <SolanaProvider>
          {children}
        </SolanaProvider>
      </body>
    </html>
  );
}
