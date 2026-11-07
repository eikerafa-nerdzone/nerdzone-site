import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import {
  buscarDocumento,
  documentos,
  edicao2025,
  emissor,
  formatarData,
  formatarPeriodo,
  iniciativa,
  nomeEvento,
  periodoRealizacao,
  rotaIniciativa,
  validadorGovBr,
} from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return documentos.map((documento) => ({ codigo: documento.codigo }))
}

const descricao = "Conferência de documento emitido no âmbito da iniciativa Compartilhando Recursos, da NerdZone."

export const metadata: Metadata = {
  title: "Validação de documento",
  description: descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Nerdzone Solutions",
    title: `Validação de documento | ${iniciativa.nome}`,
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
    title: `Validação de documento | ${iniciativa.nome}`,
    description: descricao,
    images: [iniciativa.og.src],
  },
}

const linkTexto = "text-cr-nevoa underline underline-offset-4 hover:text-cr-bruma"

function CampoDestaque({
  rotulo,
  apoio,
  tamanho,
  children,
}: {
  rotulo: string
  apoio?: string
  tamanho: string
  children: ReactNode
}) {
  return (
    <div className="p-5 sm:p-8">
      <dt className="font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">{rotulo}</dt>
      <dd className="mt-3">
        <span className={cn("block font-semibold leading-snug text-cr-nevoa", tamanho)}>{children}</span>
        {apoio && <span className="mt-2 block text-lg text-cr-bruma">{apoio}</span>}
      </dd>
    </div>
  )
}

function Detalhe({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-[14rem_1fr] sm:gap-6">
      <dt className="text-sm text-cr-bruma">{rotulo}</dt>
      <dd className="mt-1 text-cr-nevoa sm:mt-0">{children}</dd>
    </div>
  )
}

export default async function ValidacaoDocumentoPage({ params }: { params: Promise<{ codigo: string }> }) {
  const { codigo } = await params
  const documento = buscarDocumento(codigo)
  if (!documento) notFound()

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-brand">
        <div className="mx-auto max-w-3xl">
          <Link href={rotaIniciativa} className="inline-flex items-center gap-2 text-sm text-cr-bruma hover:text-cr-nevoa">
            <ArrowLeft size={16} aria-hidden="true" />
            Página da iniciativa
          </Link>

          <article aria-labelledby="validacao-titulo" className={cn(classeCartao, "mt-6 overflow-hidden")}>
            <header className="flex items-center gap-4 border-b border-cr-linha p-5 sm:gap-5 sm:p-8">
              <span
                className="flex size-14 flex-none items-center justify-center rounded-full bg-cr-neon text-cr-noite sm:size-16"
                aria-hidden="true"
              >
                <Check size={32} strokeWidth={3} />
              </span>
              <div>
                <h1 id="validacao-titulo" className="text-3xl font-semibold leading-tight text-cr-nevoa sm:text-4xl">
                  Documento válido
                </h1>
                <p className="mt-1 text-cr-bruma">{documento.tipo}</p>
              </div>
            </header>

            <dl className="divide-y divide-cr-linha">
              <CampoDestaque rotulo="Nome" apoio={documento.funcao} tamanho="text-3xl sm:text-4xl">
                {documento.titular}
              </CampoDestaque>
              <CampoDestaque rotulo="Evento" tamanho="text-[1.375rem] sm:text-3xl">
                {nomeEvento}
              </CampoDestaque>
              <CampoDestaque
                rotulo="Data"
                apoio={`Emitido em ${formatarData(documento.emissao)}`}
                tamanho="text-3xl sm:text-4xl"
              >
                {formatarPeriodo(periodoRealizacao)}
              </CampoDestaque>
            </dl>
          </article>

          <section aria-labelledby="como-conferir-titulo" className="mt-12">
            <h2 id="como-conferir-titulo" className="text-2xl font-semibold text-cr-nevoa">
              Como conferir
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-cr-bruma marker:font-semibold marker:text-cr-nevoa">
              <li>Compare o nome, o evento e a data acima com os que constam no documento em mãos.</li>
              <li>O código é único e identifica somente este documento.</li>
              <li>
                O PDF original é assinado digitalmente e pode ser conferido gratuitamente em{" "}
                <a href={validadorGovBr} target="_blank" rel="noopener noreferrer" className={cn(linkTexto, "inline-flex items-center gap-1")}>
                  {validadorGovBr}
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                .
              </li>
              <li>
                Se algum dado for diferente,{" "}
                <Link href={`${rotaIniciativa}#contato`} className={linkTexto}>
                  fale com a NerdZone
                </Link>
                .
              </li>
            </ol>
          </section>

          <section aria-labelledby="detalhes-titulo" className="mt-12">
            <h2 id="detalhes-titulo" className="text-2xl font-semibold text-cr-nevoa">
              Detalhes do documento
            </h2>
            <dl className="mt-5 divide-y divide-cr-linha border-y border-cr-linha">
              <Detalhe rotulo="Código">
                <span className="font-mono text-lg tracking-wider">{documento.codigo}</span>
              </Detalhe>
              <Detalhe rotulo="Carga horária do programa">{documento.cargaHorariaPrograma} h</Detalhe>
              {documento.cargaMinistrada !== undefined && (
                <Detalhe rotulo="Carga horária ministrada">
                  {documento.cargaMinistrada} h (encontros dos Blocos 1 e 2)
                </Detalhe>
              )}
              <Detalhe rotulo="Períodos">
                <ul className="space-y-1">
                  {edicao2025.blocos.map((bloco) => (
                    <li key={bloco.nome}>
                      {bloco.nome}: {formatarPeriodo(bloco.periodo)}, {bloco.horasEncontros} h de encontros
                    </li>
                  ))}
                  <li>
                    Práticas dos participantes: {edicao2025.praticas.horas} h entre{" "}
                    {formatarPeriodo(edicao2025.praticas.periodo)}
                  </li>
                </ul>
              </Detalhe>
              <Detalhe rotulo="Local">{edicao2025.local}</Detalhe>
              <Detalhe rotulo="Emissor">
                {emissor.razaoSocial}
                <span className="block text-cr-bruma">CNPJ {emissor.cnpj}</span>
              </Detalhe>
            </dl>
          </section>

          <aside
            aria-labelledby="resumo-iniciativa-titulo"
            className={cn(classeCartao, "mt-12 grid items-center gap-6 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8")}
          >
            <Image
              src={iniciativa.logotipo.src}
              alt={`${iniciativa.nome}, ${iniciativa.descritor}`}
              width={iniciativa.logotipo.largura}
              height={iniciativa.logotipo.altura}
              sizes="(max-width: 640px) 80vw, 260px"
              className="h-auto w-4/5 max-w-[16.25rem] sm:w-[16.25rem]"
            />
            <div>
              <h2 id="resumo-iniciativa-titulo" className="text-xl font-semibold text-cr-nevoa">
                A iniciativa
              </h2>
              <p className="mt-2 text-cr-bruma">{iniciativa.resumo}</p>
              <Link href={rotaIniciativa} className={classeBotao("secundario", "mt-5")}>
                Conhecer a iniciativa
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
