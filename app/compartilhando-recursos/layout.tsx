import type { Metadata } from "next"
import { Rodape } from "@/components/compartilhando-recursos/rodape"
import { iniciativa } from "@/lib/compartilhando-recursos"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: iniciativa.favicon.svg, type: "image/svg+xml" },
      { url: iniciativa.favicon.png, type: "image/png", sizes: "512x512" },
    ],
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
