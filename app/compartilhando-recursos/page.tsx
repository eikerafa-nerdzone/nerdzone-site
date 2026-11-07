import type { Metadata } from "next"
import { ComoFunciona } from "@/components/compartilhando-recursos/como-funciona"
import { Contato } from "@/components/compartilhando-recursos/contato"
import { Eventos } from "@/components/compartilhando-recursos/eventos"
import { Hero } from "@/components/compartilhando-recursos/hero"
import { NossaOrigem } from "@/components/compartilhando-recursos/nossa-origem"
import { OQueE } from "@/components/compartilhando-recursos/o-que-e"
import { Validar } from "@/components/compartilhando-recursos/validar"
import { iniciativa, rotaIniciativa } from "@/lib/compartilhando-recursos"

const tituloOg = `${iniciativa.nome} | ${iniciativa.descritor}`
const descricao = `${iniciativa.descritor}. Conheça a iniciativa e os eventos, baixe os materiais e valide os documentos emitidos.`

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
      <Hero />
      <OQueE />
      <ComoFunciona />
      <NossaOrigem />
      <Eventos />
      <Validar />
      <Contato />
    </>
  )
}
