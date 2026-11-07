import { siteConfig } from "@/lib/constants"

export const rotaIniciativa = "/compartilhando-recursos"
export const rotaValidacao = `${rotaIniciativa}/v`

export const iniciativa = {
  nome: "Compartilhando Recursos",
  sigla: "CoRe",
  descritor: "Iniciativa NerdZone de formação gratuita em tecnologia",
  slogan: "No centro, o que compartilhamos.",
  resumo: "Compartilhando Recursos é a iniciativa NerdZone de formação gratuita em tecnologia.",
  simbolo: {
    src: `${rotaIniciativa}/compartilhando-recursos-simbolo-escuro.svg`,
    largura: 200,
    altura: 200,
  },
  palavraMarca: {
    src: `${rotaIniciativa}/compartilhando-recursos-palavra-marca-escuro.png`,
    largura: 584,
    altura: 198,
  },
  logotipo: {
    src: `${rotaIniciativa}/compartilhando-recursos-logotipo-horizontal-escuro.png`,
    largura: 1520,
    altura: 400,
  },
  og: {
    src: `${rotaIniciativa}/compartilhando-recursos-og-1200x630.png`,
    largura: 1200,
    altura: 630,
  },
  favicon: {
    svg: `${rotaIniciativa}/compartilhando-recursos-favicon.svg`,
    png: `${rotaIniciativa}/compartilhando-recursos-favicon-512.png`,
  },
}

export type Periodo = {
  inicio: string
  fim: string
}

export type Eixo = {
  numero: string
  titulo: string
  detalhe?: string
}

type Bloco = {
  nome: string
  periodo: Periodo
  horasEncontros: number
}

type Edicao = {
  programa: string
  ano: number
  formatos: string[]
  eixos: Eixo[]
  blocos: Bloco[]
  praticas: { periodo: Periodo; horas: number }
  cargaHorariaPrograma: number
  local: string
  modalidade: string
  plataforma: string
  mentor: string
  parceria: string
}

export const edicao2025: Edicao = {
  programa: "Programa de Formação em Tecnologia",
  ano: 2025,
  formatos: ["Treinamento", "Workshop", "Oficina gratuita"],
  eixos: [
    { numero: "01", titulo: "Agilidade e Gestão de Projetos" },
    { numero: "02", titulo: "Atuar como Desenvolvedor", detalhe: "Nível estágio e júnior" },
    { numero: "03", titulo: "Desenvolvimento e Orquestração de IA" },
  ],
  blocos: [
    { nome: "Bloco 1", periodo: { inicio: "2025-09-01", fim: "2025-09-06" }, horasEncontros: 35 },
    { nome: "Bloco 2", periodo: { inicio: "2025-09-29", fim: "2025-10-04" }, horasEncontros: 23 },
  ],
  praticas: { periodo: { inicio: "2025-09-01", fim: "2025-10-04" }, horas: 10 },
  cargaHorariaPrograma: 68,
  local: "WeWork, Avenida Paulista, 1374, São Paulo/SP",
  modalidade: "Híbrida (presencial com acompanhamento online)",
  plataforma: "Microsoft Teams (com Azure DevOps, VS Code e Visual Studio)",
  mentor: "Erick Prado",
  parceria: "Estação Hack",
}

export const nomeEvento = `${edicao2025.programa}, edição ${edicao2025.ano}, da iniciativa ${iniciativa.nome}`

export const periodoRealizacao: Periodo = {
  inicio: edicao2025.blocos[0].periodo.inicio,
  fim: edicao2025.blocos[edicao2025.blocos.length - 1].periodo.fim,
}

export const cargaMinistrada = edicao2025.blocos.reduce((total, bloco) => total + bloco.horasEncontros, 0)

export const contato = {
  whatsapp: siteConfig.whatsapp,
  whatsappExibicao: "+55 11 93911-7113",
  whatsappMensagem: "Olá! Gostaria de saber mais sobre a iniciativa Compartilhando Recursos.",
  site: "nerdzonesolutions.com",
  siteUrl: "https://nerdzonesolutions.com",
}

export const linkWhatsapp = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(contato.whatsappMensagem)}`

export const emissor = {
  razaoSocial: "NERD ZONE SOLUTIONS DESENVOLVIMENTO DE SISTEMAS LTDA",
  cnpj: "40.799.358/0001-40",
}

export const validadorGovBr = "https://validar.iti.gov.br"

export type DocumentoEmitido = {
  /** Código único no formato canônico (XXXX-XXXX-XXXX). */
  codigo: string
  tipo: string
  /** Nome completo do titular. */
  titular: string
  funcao: string
  emissao: string
  cargaHorariaPrograma: number
  /** Só na declaração do instrutor: horas de encontros ministradas. */
  cargaMinistrada?: number
}

const dataEmissao = "2026-11-06"

function certificado(codigo: string, titular: string): DocumentoEmitido {
  return {
    codigo,
    tipo: "Certificado de participação",
    titular,
    funcao: "Participante",
    emissao: dataEmissao,
    cargaHorariaPrograma: edicao2025.cargaHorariaPrograma,
  }
}

export const documentos: DocumentoEmitido[] = [
  {
    codigo: "D92E-G9HF-JYSP",
    tipo: "Declaração de atuação como mentor e instrutor",
    titular: "Erick Rafael Prado",
    funcao: "Mentor e instrutor",
    emissao: dataEmissao,
    cargaHorariaPrograma: edicao2025.cargaHorariaPrograma,
    cargaMinistrada,
  },
  certificado("N3PG-SR5Q-V7DW", "Caroline Monteiro de Souza"),
  certificado("3ZR9-HU9T-S3NK", "Elizabeth Monteiro de Souza"),
  certificado("W38R-2JH3-KFZW", "Marciel Bonette"),
]

export function buscarDocumento(codigo: string): DocumentoEmitido | undefined {
  return documentos.find((documento) => documento.codigo === codigo)
}

/** "2025-09-01" vira "01/09/2025", sem passar por fuso horário. */
export function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split("-")
  return `${dia}/${mes}/${ano}`
}

export function formatarPeriodo({ inicio, fim }: Periodo): string {
  return `${formatarData(inicio)} a ${formatarData(fim)}`
}
