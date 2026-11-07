import { siteConfig } from "@/lib/constants"

export const rotaIniciativa = "/compartilhando-recursos"
export const rotaValidacao = `${rotaIniciativa}/v`
export const rotaCodigoNaoEncontrado = `${rotaIniciativa}/codigo-nao-encontrado`

export const codigoNaoEncontrado = {
  titulo: "Código não encontrado",
  descricao: "Nenhum documento emitido pela iniciativa corresponde a este código.",
}

export const iniciativa = {
  nome: "Compartilhando Recursos",
  sigla: "CoRe",
  organizacao: "NerdZone",
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

/** Origem da iniciativa: o versículo como o mentor o carrega, a referência literal e a oração dele. */
export const origem = {
  frase: "Onde estiver um ou mais reunidos em meu nome",
  referencia: {
    passagem: "Mateus 18:20",
    traducao: "ARA",
    texto: "Porque, onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.",
  },
  oracao: {
    texto: "Tudo é para tua honra e glória. Me abençoe para que eu possa compartilhar cada vez mais recursos.",
    assinatura: "Erick Prado, mentor",
  },
}

export type Periodo = {
  /** Data no formato ISO (AAAA-MM-DD). */
  inicio: string
  fim: string
}

export type Eixo = {
  numero: string
  titulo: string
  detalhe?: string
  /** Tema do ícone mostrado no cartão do eixo. */
  tema?: "gestao" | "desenvolvimento" | "ia"
}

export type Bloco = {
  nome: string
  periodo: Periodo
  horasEncontros: number
}

export type Local = {
  espaco: string
  endereco: string
  cidade: string
}

export type Material = {
  id: string
  titulo: string
  descricao: string
  formato: "PDF" | "PPTX"
  /** Nome do arquivo em public/compartilhando-recursos/downloads/<id do evento>/. */
  arquivo: string
}

export type Evento = {
  /** Identifica o evento na página e nomeia a pasta dos materiais para baixar. */
  id: string
  programa: string
  edicao: number
  formatos: string[]
  eixos: Eixo[]
  blocos: Bloco[]
  praticas: { periodo: Periodo; horas: number }
  local: Local
  modalidade: string
  plataforma: { nome: string; ferramentas: string[] }
  mentor: string
  parceria: string
  materiais: Material[]
}

export const programaFormacao2025: Evento = {
  id: "2025",
  programa: "Programa de Formação em Tecnologia",
  edicao: 2025,
  formatos: ["Treinamento", "Workshop", "Oficina gratuita"],
  eixos: [
    { numero: "01", titulo: "Agilidade e Gestão de Projetos", tema: "gestao" },
    { numero: "02", titulo: "Atuar como Desenvolvedor", detalhe: "Nível estágio e júnior", tema: "desenvolvimento" },
    { numero: "03", titulo: "Desenvolvimento e Orquestração de IA", tema: "ia" },
  ],
  blocos: [
    { nome: "Bloco 1", periodo: { inicio: "2025-09-01", fim: "2025-09-06" }, horasEncontros: 35 },
    { nome: "Bloco 2", periodo: { inicio: "2025-09-29", fim: "2025-10-04" }, horasEncontros: 23 },
  ],
  praticas: { periodo: { inicio: "2025-09-01", fim: "2025-10-04" }, horas: 10 },
  local: { espaco: "WeWork", endereco: "Avenida Paulista, 1374", cidade: "São Paulo/SP" },
  modalidade: "Híbrida (presencial, com acompanhamento online)",
  plataforma: { nome: "Microsoft Teams", ferramentas: ["Azure DevOps", "VS Code", "Visual Studio"] },
  mentor: "Erick Prado",
  parceria: "Estação Hack",
  materiais: [
    {
      id: "documentacao",
      titulo: "Documentação do programa",
      descricao: "Os três eixos com módulos, práticas e entregáveis, mais modelos, checklists e glossário.",
      formato: "PDF",
      arquivo: "NerdZone_Documentacao_Programa_de_Formacao.pdf",
    },
    {
      id: "apresentacao",
      titulo: "Apresentação do programa",
      descricao: "Slides do programa, com o cronograma e o conteúdo dos três eixos.",
      formato: "PPTX",
      arquivo: "NerdZone_Apresentacao_Programa_de_Formacao.pptx",
    },
  ],
}

/** Eventos da iniciativa, do mais recente para o mais antigo. */
export const eventos: Evento[] = [programaFormacao2025]

/** Horas de encontros com o mentor (soma dos blocos): a carga ministrada. */
export function horasDeEncontros(evento: Evento): number {
  return evento.blocos.reduce((total, bloco) => total + bloco.horasEncontros, 0)
}

/** Carga horária do programa: encontros mais as práticas dos participantes. */
export function cargaHorariaPrograma(evento: Evento): number {
  return horasDeEncontros(evento) + evento.praticas.horas
}

export function periodoRealizacao(evento: Evento): Periodo {
  return { inicio: evento.blocos[0].periodo.inicio, fim: evento.blocos[evento.blocos.length - 1].periodo.fim }
}

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

/** "2025-09-01" vira "01/09/2025", sem passar por fuso horário. */
export function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split("-")
  return `${dia}/${mes}/${ano}`
}

export function formatarPeriodo({ inicio, fim }: Periodo): string {
  return `${formatarData(inicio)} a ${formatarData(fim)}`
}

/** Período sem repetir mês e ano iguais: "01 a 06/09/2025", "29/09 a 04/10/2025". */
export function formatarPeriodoCompacto({ inicio, fim }: Periodo): string {
  const [anoInicio, mesInicio, diaInicio] = inicio.split("-")
  const [anoFim, mesFim] = fim.split("-")
  if (anoInicio !== anoFim) return formatarPeriodo({ inicio, fim })
  const comeco = mesInicio === mesFim ? diaInicio : `${diaInicio}/${mesInicio}`
  return `${comeco} a ${formatarData(fim)}`
}

/** Para frases com "entre": "entre 01/09/2025 e 04/10/2025". */
export function formatarEntre({ inicio, fim }: Periodo): string {
  return `entre ${formatarData(inicio)} e ${formatarData(fim)}`
}

/** ["Treinamento", "Workshop", "Oficina gratuita"] vira "Treinamento, workshop e oficina gratuita". */
export function formatarLista(itens: string[]): string {
  const emFrase = itens.map((item, indice) => (indice === 0 ? item : item.charAt(0).toLowerCase() + item.slice(1)))
  return new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" }).format(emFrase)
}

export function formatarLocal({ espaco, endereco, cidade }: Local): string {
  return `${espaco}, ${endereco}, ${cidade}`
}

/** "Microsoft Teams (com Azure DevOps, VS Code e Visual Studio)" */
export function formatarPlataforma({ nome, ferramentas }: Evento["plataforma"]): string {
  const lista = new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" }).format(ferramentas)
  return `${nome} (com ${lista})`
}
