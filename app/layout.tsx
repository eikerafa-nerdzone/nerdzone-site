import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { siteConfig } from "@/lib/constants"

/*
 * Arquivos das fontes em ./fonts (recorte latino do Google Fonts; licenças OFL na mesma pasta),
 * para o build não depender do Google Fonts: até o Next 16.4.2 algumas respostas dele quebram o
 * next/font/google (vercel/next.js#99114, corrigido na 16.4.3).
 */
const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  weight: "600 700",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "desenvolvimento de software",
    "software house",
    "outsourcing de TI",
    "inteligência artificial",
    "automação",
    "arquitetura de software",
    "ERP",
    "sistema de gestão",
    siteConfig.name,
    "ZoneManager",
    "ZoneGo",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  )
}
