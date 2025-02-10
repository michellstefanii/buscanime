import type { ReactNode } from "react";
import "./globals.css";
import { Mulish } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mulish",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={mulish.variable}>
      <body className="font-mulish">
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="container mx-auto px-4 py-6 w-full md:max-w-[800] max-w-[1318px] flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
