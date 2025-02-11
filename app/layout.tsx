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

export const metadata = {
  title: "BUSCANIME - Your anime search engine.",
  description: "Find a new anime to watch now!",
  keywords: "animes, otaku",
  authors: [{ name: "Michel S.", url: "https://michellstefanii.github.io/" }],
  openGraph: {
    title: "BUSCANIME - Your anime search engine.",
    description: "Veja este site incrível com os melhores conteúdos!",
    url: "https://buscanime-amber.vercel.app/",
    siteName: "BUSCANIME",
    images: [
      {
        url: "https://buscanime-amber.vercel.app/img/SEO.jpg",
        width: 1200,
        height: 630,
        alt: "buscanime",
      },
    ],
    type: "website",
  },
};

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
