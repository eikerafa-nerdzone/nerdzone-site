import type { Metadata } from "next"
import { Hero } from "@/components/compartilhando-recursos/hero"
import { NossaOrigem } from "@/components/compartilhando-recursos/nossa-origem"
import { OQueE } from "@/components/compartilhando-recursos/o-que-e"
import { iniciativa, rotaIniciativa } from "@/lib/compartilhando-recursos"

const tituloOg = `${iniciativa.nome} | ${iniciativa.descritor}`
const descricao = `${iniciativa.descritor}. Conheça a edição 2025 do Programa de Formação em Tecnologia e valide os documentos emitidos.`

export const metadata: Metadata = {
  title: iniciativa.nome,
  description: descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: rotaIniciativa,
    siteName: "Nerdzone Solutions",
    title: tituloOg,
    description: descricao,
    images: [
      {
        url: iniciativa.og.src,
        width: iniciativa.og.largura,
        height: iniciativa.og.altura,
        alt: `${iniciativa.nome}, ${iniciativa.descritor}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: tituloOg,
    description: descricao,
    images: [iniciativa.og.src],
  },
}

export default function IniciativaPage() {
  return (
    <>
      <Hero temMateriais={false} />
      <OQueE />
      <NossaOrigem />
    </>
  )
}
