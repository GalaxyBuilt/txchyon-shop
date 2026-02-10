import { Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Txchyon Shop | Institutional-Grade Crypto Playbooks",
  description: "Systematic trading frameworks and execution playbooks for serious crypto traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        mulish.variable
      )}>
        {children}
      </body>
    </html>
  );
}
