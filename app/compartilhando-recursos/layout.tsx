import type { Metadata } from "next"
import { Rodape } from "@/components/compartilhando-recursos/rodape"
import { faviconIniciativa } from "@/lib/compartilhando-recursos-identidade"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: faviconIniciativa.ico, type: "image/x-icon", sizes: "16x16 32x32 48x48" },
      { url: faviconIniciativa.svg, type: "image/svg+xml" },
      { url: faviconIniciativa.png32, type: "image/png", sizes: "32x32" },
      { url: faviconIniciativa.png512, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: faviconIniciativa.png180, type: "image/png", sizes: "180x180" }],
  },
}

export default function CompartilhandoRecursosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="cr-page min-h-screen bg-cr-noite text-cr-nevoa">
      {children}
      <Rodape />
    </div>
  )
}
