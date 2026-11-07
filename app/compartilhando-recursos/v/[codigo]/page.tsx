import type { Metadata } from "next"
import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import {
  emissor,
  formatarData,
  formatarLista,
  formatarPeriodo,
  formatarPeriodoCompacto,
  iniciativa,
  periodoRealizacao,
  rotaIniciativa,
  validadorGovBr,
} from "@/lib/compartilhando-recursos"
import {
  buscarDocumento,
  documentos,
  formatarCargaHoraria,
  type DocumentoEmitido,
} from "@/lib/compartilhando-recursos-documentos"
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

type SubItem = { rotulo: string; valores: string[] }

type Secao = {
  id: string
  titulo: string
  /** Valor em destaque logo abaixo do título da seção (o nome do titular). */
  destaque?: string
  itens: SubItem[]
}

/** As quatro seções do cartão, na ordem em que os dados aparecem no documento. */
function secoesDoDocumento(documento: DocumentoEmitido): Secao[] {
  const { evento } = documento
  return [
    {
      id: "nome",
      titulo: "Nome",
      destaque: documento.titular,
      itens: [
        { rotulo: "Função", valores: [documento.funcao] },
        { rotulo: "Documento", valores: [documento.tipo] },
        { rotulo: "Carga horária", valores: documento.cargaHoraria.map(formatarCargaHoraria) },
      ],
    },
    {
      id: "evento",
      titulo: "Evento",
      itens: [
        { rotulo: "Programa", valores: [evento.programa] },
        { rotulo: "Edição", valores: [String(evento.edicao)] },
        { rotulo: "Iniciativa", valores: [`${iniciativa.nome} (${iniciativa.organizacao})`] },
        { rotulo: "Formatos", valores: [formatarLista(evento.formatos)] },
      ],
    },
    {
      id: "data",
      titulo: "Data",
      itens: [
        { rotulo: "Realização", valores: [formatarPeriodo(periodoRealizacao(evento))] },
        ...evento.blocos.map((bloco) => ({ rotulo: bloco.nome, valores: [formatarPeriodoCompacto(bloco.periodo)] })),
        { rotulo: "Emitido em", valores: [formatarData(documento.emissao)] },
      ],
    },
    {
      id: "local",
      titulo: "Local",
      itens: [
        { rotulo: "Espaço", valores: [evento.local.espaco] },
        { rotulo: "Endereço", valores: [evento.local.endereco] },
        { rotulo: "Cidade", valores: [evento.local.cidade] },
        { rotulo: "Modalidade", valores: [evento.modalidade] },
      ],
    },
  ]
}

const classeRotulo = "font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cr-bruma"

function SecaoDoCartao({ secao }: { secao: Secao }) {
  const idTitulo = `secao-${secao.id}`
  return (
    <section aria-labelledby={idTitulo} className="px-6 py-8 sm:px-10 sm:py-9">
      <h2
        id={idTitulo}
        className="flex items-center gap-2.5 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-cr-nevoa"
      >
        <span className="size-1.5 flex-none rounded-full bg-cr-neon" aria-hidden="true" />
        {secao.titulo}
      </h2>
      {secao.destaque && (
        <p className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-cr-nevoa sm:text-4xl">
          {secao.destaque}
        </p>
      )}
      <dl className={cn("space-y-4 sm:space-y-3", secao.destaque ? "mt-6" : "mt-5")}>
        {secao.itens.map((item) => (
          <div key={item.rotulo} className="sm:grid sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-x-6">
            <dt className={classeRotulo}>{item.rotulo}</dt>
            {item.valores.map((valor) => (
              <dd key={valor} className="mt-1 text-base leading-snug text-cr-nevoa sm:col-start-2 sm:mt-0 sm:text-lg">
                {valor}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </section>
  )
}

export default async function ValidacaoDocumentoPage({ params }: { params: Promise<{ codigo: string }> }) {
  const { codigo } = await params
  const documento = buscarDocumento(codigo)
  if (!documento) notFound()
  const secoes = secoesDoDocumento(documento)

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-brand">
        <div className="mx-auto max-w-3xl">
          <Link href={rotaIniciativa} className="inline-flex items-center gap-2 text-sm text-cr-bruma hover:text-cr-nevoa">
            <ArrowLeft size={16} aria-hidden="true" />
            Página da iniciativa
          </Link>

          <article aria-labelledby="validacao-titulo" className={cn(classeCartao, "mt-6 overflow-hidden")}>
            <header className="flex items-center gap-4 border-b border-cr-linha px-6 py-7 sm:gap-6 sm:px-10 sm:py-9">
              <span
                className="flex size-14 flex-none items-center justify-center rounded-full bg-cr-neon text-cr-noite ring-8 ring-cr-neon/10 sm:size-16"
                aria-hidden="true"
              >
                <Check size={30} strokeWidth={3} />
              </span>
              <div>
                <h1 id="validacao-titulo" className="text-2xl font-semibold leading-tight text-cr-nevoa sm:text-4xl">
                  Documento válido
                </h1>
                <p className="mt-1.5 font-mono text-sm text-cr-bruma">
                  Código <span className="tracking-wider text-cr-nevoa">{documento.codigo}</span>
                </p>
              </div>
            </header>

            {secoes.map((secao, indice) => (
              <Fragment key={secao.id}>
                {indice > 0 && <div className="mx-6 h-px bg-cr-neon/80 sm:mx-10" aria-hidden="true" />}
                <SecaoDoCartao secao={secao} />
              </Fragment>
            ))}
          </article>

          <section aria-labelledby="como-conferir-titulo" className="mt-12">
            <h2 id="como-conferir-titulo" className="text-2xl font-semibold text-cr-nevoa">
              Como conferir
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-cr-bruma marker:font-semibold marker:text-cr-nevoa">
              <li>Compare o nome, o evento, a data e o local acima com os que constam no documento em mãos.</li>
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

          <section aria-labelledby="emissor-titulo" className="mt-12">
            <h2 id="emissor-titulo" className="text-2xl font-semibold text-cr-nevoa">
              Emissor
            </h2>
            <dl className="mt-5 space-y-4 border-y border-cr-linha py-5 sm:space-y-3">
              <div className="sm:grid sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-x-6">
                <dt className={classeRotulo}>Razão social</dt>
                <dd className="mt-1 text-cr-nevoa sm:mt-0">{emissor.razaoSocial}</dd>
              </div>
              <div className="sm:grid sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-x-6">
                <dt className={classeRotulo}>CNPJ</dt>
                <dd className="mt-1 text-cr-nevoa sm:mt-0">{emissor.cnpj}</dd>
              </div>
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
