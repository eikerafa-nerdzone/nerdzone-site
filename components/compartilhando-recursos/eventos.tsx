import type { ReactNode } from "react"
import {
  BrainCircuit,
  CalendarDays,
  CodeXml,
  Download,
  FileText,
  Handshake,
  Kanban,
  Laptop,
  MapPin,
  MonitorSmartphone,
  Presentation,
  UserRound,
  type LucideIcon,
} from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import {
  cargaHorariaPrograma,
  eventos,
  formatarEntre,
  formatarLista,
  formatarLocal,
  formatarPeriodoCompacto,
  formatarPlataforma,
  type Eixo,
  type Evento,
} from "@/lib/compartilhando-recursos"
import { listarMateriaisDisponiveis, type MaterialDisponivel } from "@/lib/compartilhando-recursos-materiais"
import { cn } from "@/lib/utils"

const iconesTema: Record<NonNullable<Eixo["tema"]>, LucideIcon> = {
  gestao: Kanban,
  desenvolvimento: CodeXml,
  ia: BrainCircuit,
}

const tonsEncontros = ["bg-cr-nevoa", "bg-cr-nevoa/65", "bg-cr-nevoa/50"]
const tomPraticas = "bg-cr-nevoa/35"

function faixasDeCarga(evento: Evento) {
  return [
    ...evento.blocos.map((bloco, indice) => ({
      descricao: `${bloco.nome}: ${bloco.horasEncontros} h de encontros`,
      horas: bloco.horasEncontros,
      tom: tonsEncontros[indice % tonsEncontros.length],
    })),
    {
      descricao: `Práticas dos participantes: ${evento.praticas.horas} h`,
      horas: evento.praticas.horas,
      tom: tomPraticas,
    },
  ]
}

/** "68 h = 35 h + 23 h de encontros + 10 h de práticas dos participantes" */
function somaDaCarga(evento: Evento): string {
  const encontros = evento.blocos.map((bloco) => `${bloco.horasEncontros} h`).join(" + ")
  return `${cargaHorariaPrograma(evento)} h = ${encontros} de encontros + ${evento.praticas.horas} h de práticas dos participantes`
}

const classeSubtitulo = "text-xl font-semibold text-cr-nevoa"

/** Item do <dl>: dt e dd filhos diretos do div; o ícone fica dentro do dt, posicionado à esquerda. */
function Dado({ icone: Icone, rotulo, children }: { icone: LucideIcon; rotulo: string; children: ReactNode }) {
  return (
    <div className={cn(classeCartao, "relative p-5 pl-[4.75rem]")}>
      <dt className="text-sm text-cr-bruma">
        <span
          className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-lg bg-cr-noite text-cr-bruma"
          aria-hidden="true"
        >
          <Icone size={20} />
        </span>
        {rotulo}
      </dt>
      <dd className="mt-1 font-medium leading-snug text-cr-nevoa">{children}</dd>
    </div>
  )
}

function CartaoMaterial({ material }: { material: MaterialDisponivel }) {
  return (
    <li className={cn(classeCartao, "flex flex-col p-6 sm:p-8")}>
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-xl bg-cr-noite text-cr-nevoa" aria-hidden="true">
          {material.formato === "PDF" ? <FileText size={24} /> : <Presentation size={24} />}
        </span>
        <span className="rounded-full border border-cr-bruma/70 px-3 py-1 font-mono text-xs font-semibold text-cr-nevoa">
          {material.formato} · {material.tamanho}
        </span>
      </div>
      <h5 className="mt-5 text-xl font-semibold text-cr-nevoa">{material.titulo}</h5>
      <p className="mt-2 flex-1 text-cr-bruma">{material.descricao}</p>
      <a href={material.href} download className={classeBotao("secundario", "mt-6 w-full sm:w-fit")}>
        <Download size={18} aria-hidden="true" />
        Baixar {material.formato}
        <span className="sr-only">
          : {material.titulo}, {material.tamanho}
        </span>
      </a>
    </li>
  )
}

async function DetalhesDoEvento({ evento }: { evento: Evento }) {
  const materiais = await listarMateriaisDisponiveis(evento)
  const id = `evento-${evento.id}`
  const faixas = faixasDeCarga(evento)

  return (
    <article id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-24 py-14 first:pt-0 last:pb-0">
      <p className="inline-flex items-center gap-2.5 rounded-full border border-cr-linha px-4 py-1.5 font-mono text-sm font-semibold text-cr-bruma">
        <span className="size-2 rounded-full bg-cr-neon" aria-hidden="true" />
        Edição {evento.edicao}
      </p>
      <h3 id={`${id}-titulo`} className="mt-5 text-2xl font-semibold leading-tight text-cr-nevoa sm:text-3xl">
        {evento.programa}
      </h3>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-cr-bruma">
        {formatarLista(evento.formatos)}, conduzidos pelo mentor {evento.mentor}.
      </p>

      <h4 className={cn(classeSubtitulo, "mt-12")}>Eixos</h4>
      <ol className="mt-5 grid gap-5 md:grid-cols-3">
        {evento.eixos.map((eixo) => {
          const Icone = eixo.tema ? iconesTema[eixo.tema] : null
          return (
            <li key={eixo.numero} className={cn(classeCartao, "p-6")}>
              <div className="flex items-center justify-between text-cr-bruma">
                <span className="font-mono text-sm font-semibold">
                  <span className="sr-only">Eixo </span>
                  {eixo.numero}
                </span>
                {Icone && <Icone size={22} aria-hidden="true" />}
              </div>
              <p className="mt-5 text-xl font-semibold leading-snug text-cr-nevoa">{eixo.titulo}</p>
              {eixo.detalhe && <p className="mt-1 text-cr-bruma">{eixo.detalhe}</p>}
            </li>
          )
        })}
      </ol>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className={cn(classeCartao, "p-6 sm:p-8")}>
          <h4 className="text-sm font-normal text-cr-bruma">Carga horária do programa</h4>
          <p className="mt-1 text-6xl font-semibold text-cr-nevoa">
            {cargaHorariaPrograma(evento)}
            <span className="ml-1 text-3xl text-cr-bruma">h</span>
          </p>
          <div className="mt-5 flex h-3 gap-1 overflow-hidden rounded-full" aria-hidden="true">
            {faixas.map((faixa) => (
              <div key={faixa.descricao} className={cn("rounded-full", faixa.tom)} style={{ flexGrow: faixa.horas }} />
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-cr-bruma">
            {faixas.map((faixa) => (
              <li key={faixa.descricao} className="flex items-center gap-2">
                <span className={cn("size-2.5 flex-none rounded-full", faixa.tom)} aria-hidden="true" />
                {faixa.descricao}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-cr-nevoa">{somaDaCarga(evento)}</p>
        </div>

        <div className={cn(classeCartao, "p-6 sm:p-8")}>
          <h4 className={cn(classeSubtitulo, "flex items-center gap-2")}>
            <CalendarDays size={20} className="text-cr-bruma" aria-hidden="true" />
            Períodos
          </h4>
          <ul className="mt-5 divide-y divide-cr-linha">
            {evento.blocos.map((bloco) => (
              <li key={bloco.nome} className="py-4 first:pt-0">
                <p className="font-semibold text-cr-nevoa">{bloco.nome}</p>
                <p className="text-cr-bruma">
                  {formatarPeriodoCompacto(bloco.periodo)}, {bloco.horasEncontros} h de encontros
                </p>
              </li>
            ))}
            <li className="py-4 last:pb-0">
              <p className="font-semibold text-cr-nevoa">Práticas dos participantes</p>
              <p className="text-cr-bruma">
                {evento.praticas.horas} h {formatarEntre(evento.praticas.periodo)}, com revisão e aprovação pelo
                mentor
              </p>
            </li>
          </ul>
        </div>
      </div>

      <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Dado icone={MapPin} rotulo="Local">
          {formatarLocal(evento.local)}
        </Dado>
        <Dado icone={MonitorSmartphone} rotulo="Modalidade">
          {evento.modalidade}
        </Dado>
        <Dado icone={Laptop} rotulo="Plataforma">
          {formatarPlataforma(evento.plataforma)}
        </Dado>
        <Dado icone={UserRound} rotulo="Mentor">
          {evento.mentor}
        </Dado>
        <Dado icone={Handshake} rotulo="Parceria e orientação">
          {evento.parceria}
        </Dado>
      </dl>

      {materiais.length > 0 && (
        <>
          <h4 className={cn(classeSubtitulo, "mt-12")}>Materiais deste evento</h4>
          <p className="mt-2 text-cr-bruma">Para consultar e compartilhar.</p>
          <ul className="mt-5 grid gap-6 md:grid-cols-2">
            {materiais.map((material) => (
              <CartaoMaterial key={material.id} material={material} />
            ))}
          </ul>
        </>
      )}
    </article>
  )
}

export function Eventos() {
  return (
    <section
      id="eventos"
      aria-labelledby="eventos-titulo"
      className="scroll-mt-24 border-t border-cr-linha bg-cr-noite-2/50 py-20 sm:py-24"
    >
      <div className="container-brand">
        <CabecalhoSecao id="eventos" rotulo="Eventos" titulo="Eventos da iniciativa">
          <p>Cada evento reúne um grupo em torno de um programa, com datas, local e materiais próprios.</p>
        </CabecalhoSecao>

        <div className="mt-12 divide-y divide-cr-linha">
          {eventos.map((evento) => (
            <DetalhesDoEvento key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
    </section>
  )
}
