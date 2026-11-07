import type { Metadata } from "next"
import { Contato } from "@/components/compartilhando-recursos/contato"
import { Edicao2025 } from "@/components/compartilhando-recursos/edicao-2025"
import { Hero } from "@/components/compartilhando-recursos/hero"
import { Materiais } from "@/components/compartilhando-recursos/materiais"
import { NossaOrigem } from "@/components/compartilhando-recursos/nossa-origem"
import { OQueE } from "@/components/compartilhando-recursos/o-que-e"
import { Validar } from "@/components/compartilhando-recursos/validar"
import { iniciativa, rotaIniciativa } from "@/lib/compartilhando-recursos"
import { listarMateriaisDisponiveis } from "@/lib/compartilhando-recursos-materiais"

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

export default async function IniciativaPage() {
  const materiais = await listarMateriaisDisponiveis()

  return (
    <>
      <Hero temMateriais={materiais.length > 0} />
      <OQueE />
      <NossaOrigem />
      <Edicao2025 />
      <Materiais materiais={materiais} />
      <Validar />
      <Contato />
    </>
  )
}
