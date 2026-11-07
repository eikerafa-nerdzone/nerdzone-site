import type { ReactNode } from "react"
import {
  BrainCircuit,
  CalendarDays,
  CodeXml,
  Handshake,
  Kanban,
  Laptop,
  MapPin,
  MonitorSmartphone,
  UserRound,
  type LucideIcon,
} from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { edicao2025, formatarPeriodo } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

const iconesEixo: Record<string, LucideIcon> = {
  "01": Kanban,
  "02": CodeXml,
  "03": BrainCircuit,
}

const tonsFaixa = ["bg-cr-nevoa", "bg-cr-nevoa/65"]
const tomPraticas = "bg-cr-nevoa/35"

const faixasCarga = [
  ...edicao2025.blocos.map((bloco, indice) => ({
    descricao: `${bloco.nome}: ${bloco.horasEncontros} h de encontros`,
    horas: bloco.horasEncontros,
    tom: tonsFaixa[indice],
  })),
  {
    descricao: `Práticas dos participantes: ${edicao2025.praticas.horas} h`,
    horas: edicao2025.praticas.horas,
    tom: tomPraticas,
  },
]

function Dado({ icone: Icone, rotulo, children }: { icone: LucideIcon; rotulo: string; children: ReactNode }) {
  return (
    <div className={cn(classeCartao, "flex gap-4 p-5")}>
      <span
        className="flex size-10 flex-none items-center justify-center rounded-lg bg-cr-noite text-cr-bruma"
        aria-hidden="true"
      >
        <Icone size={20} />
      </span>
      <div>
        <dt className="text-sm text-cr-bruma">{rotulo}</dt>
        <dd className="mt-1 font-medium leading-snug text-cr-nevoa">{children}</dd>
      </div>
    </div>
  )
}

export function Edicao2025() {
  return (
    <section id="edicao-2025" aria-labelledby="edicao-2025-titulo" className="scroll-mt-24 border-t border-cr-linha py-20 sm:py-24">
      <div className="container-brand">
        <CabecalhoSecao id="edicao-2025" rotulo={`Edição ${edicao2025.ano}`} titulo={edicao2025.programa}>
          <p>
            Treinamento, workshop e oficina gratuita conduzido pelo mentor {edicao2025.mentor} para um grupo de
            participantes.
          </p>
        </CabecalhoSecao>

        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Formatos">
          {edicao2025.formatos.map((formato) => (
            <li
              key={formato}
              className="rounded-full border border-cr-bruma/70 px-4 py-1.5 text-sm font-medium text-cr-nevoa"
            >
              {formato}
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-xl font-semibold text-cr-nevoa">Três eixos</h3>
        <ol className="mt-5 grid gap-5 md:grid-cols-3">
          {edicao2025.eixos.map((eixo) => {
            const Icone = iconesEixo[eixo.numero]
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
            <p className="text-sm text-cr-bruma">Carga horária do programa</p>
            <p className="mt-1 text-6xl font-semibold text-cr-nevoa">
              {edicao2025.cargaHorariaPrograma}
              <span className="ml-1 text-3xl text-cr-bruma">h</span>
            </p>
            <div className="mt-5 flex h-3 gap-1 overflow-hidden rounded-full" aria-hidden="true">
              {faixasCarga.map((faixa) => (
                <div key={faixa.descricao} className={cn("rounded-full", faixa.tom)} style={{ flexGrow: faixa.horas }} />
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-cr-bruma">
              {faixasCarga.map((faixa) => (
                <li key={faixa.descricao} className="flex items-center gap-2">
                  <span className={cn("size-2.5 flex-none rounded-full", faixa.tom)} aria-hidden="true" />
                  {faixa.descricao}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-cr-nevoa">
              {faixasCarga.map((faixa) => `${faixa.horas} h`).join(" + ")} = {edicao2025.cargaHorariaPrograma} h
            </p>
          </div>

          <div className={cn(classeCartao, "p-6 sm:p-8")}>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-cr-nevoa">
              <CalendarDays size={20} className="text-cr-bruma" aria-hidden="true" />
              Períodos
            </h3>
            <ul className="mt-5 divide-y divide-cr-linha">
              {edicao2025.blocos.map((bloco) => (
                <li key={bloco.nome} className="py-4 first:pt-0">
                  <p className="font-semibold text-cr-nevoa">{bloco.nome}</p>
                  <p className="text-cr-bruma">
                    {formatarPeriodo(bloco.periodo)}, {bloco.horasEncontros} h de encontros
                  </p>
                </li>
              ))}
              <li className="py-4 last:pb-0">
                <p className="font-semibold text-cr-nevoa">Práticas dos participantes</p>
                <p className="text-cr-bruma">
                  {edicao2025.praticas.horas} h entre {formatarPeriodo(edicao2025.praticas.periodo)}, com revisão e
                  aprovação pelo mentor
                </p>
              </li>
            </ul>
          </div>
        </div>

        <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Dado icone={MapPin} rotulo="Local">
            {edicao2025.local}
          </Dado>
          <Dado icone={MonitorSmartphone} rotulo="Modalidade">
            {edicao2025.modalidade}
          </Dado>
          <Dado icone={Laptop} rotulo="Plataforma">
            {edicao2025.plataforma}
          </Dado>
          <Dado icone={UserRound} rotulo="Mentor">
            {edicao2025.mentor}
          </Dado>
          <Dado icone={Handshake} rotulo="Parceria e orientação">
            {edicao2025.parceria}
          </Dado>
        </dl>
      </div>
    </section>
  )
}
