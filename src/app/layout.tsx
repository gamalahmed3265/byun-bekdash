import type { Metadata } from "next";
import { Geist, Geist_Mono, Gabriela } from "next/font/google";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ice Karem - أفضل بوظة سورية",
  description:
    "Ice Karem - استمتع بأفضل وألذ أنواع البوظة السورية الأصيلة مع نكهات متنوعة وطعم لا يُنسى",
};
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={` ${gabriela.className} ${geistSans.variable} ${geistMono.variable}`}
      dir="rtl"
    >
      <body
        className={` ${gabriela.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
