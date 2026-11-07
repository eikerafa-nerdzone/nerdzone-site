import "server-only"
import {
  cargaHorariaPrograma,
  horasDeEncontros,
  programaFormacao2025,
  type Evento,
} from "@/lib/compartilhando-recursos"

/*
 * Documentos emitidos, com o nome completo de cada titular. Fica fora de
 * lib/compartilhando-recursos.ts, que também é importado por componentes de
 * cliente, para que os nomes só apareçam nas páginas de validação.
 */

export type CargaHoraria = {
  horas: number
  /** Complemento depois das horas, como "do programa". */
  complemento?: string
}

export type DocumentoEmitido = {
  /** Código único no formato canônico (XXXX-XXXX-XXXX). */
  codigo: string
  tipo: string
  /** Nome completo do titular. */
  titular: string
  funcao: string
  evento: Evento
  emissao: string
  /** Linhas da carga horária, na ordem em que aparecem no documento. */
  cargaHoraria: CargaHoraria[]
}

const dataEmissao = "2026-11-06"

function declaracaoDeInstrutor(codigo: string, titular: string, evento: Evento): DocumentoEmitido {
  return {
    codigo,
    tipo: "Declaração de atuação como mentor e instrutor",
    titular,
    funcao: "Mentor e instrutor",
    evento,
    emissao: dataEmissao,
    cargaHoraria: [
      { horas: horasDeEncontros(evento), complemento: "ministradas (encontros)" },
      { horas: cargaHorariaPrograma(evento), complemento: "do programa" },
    ],
  }
}

function certificadoDeParticipacao(codigo: string, titular: string, evento: Evento): DocumentoEmitido {
  return {
    codigo,
    tipo: "Certificado de participação",
    titular,
    funcao: "Participante",
    evento,
    emissao: dataEmissao,
    cargaHoraria: [{ horas: cargaHorariaPrograma(evento) }],
  }
}

export const documentos: DocumentoEmitido[] = [
  declaracaoDeInstrutor("D92E-G9HF-JYSP", "Erick Rafael Prado", programaFormacao2025),
  certificadoDeParticipacao("N3PG-SR5Q-V7DW", "Caroline Monteiro de Souza", programaFormacao2025),
  certificadoDeParticipacao("3ZR9-HU9T-S3NK", "Elizabeth Monteiro de Souza", programaFormacao2025),
  certificadoDeParticipacao("W38R-2JH3-KFZW", "Marciel Bonette", programaFormacao2025),
]

export function buscarDocumento(codigo: string): DocumentoEmitido | undefined {
  return documentos.find((documento) => documento.codigo === codigo)
}

export function formatarCargaHoraria({ horas, complemento }: CargaHoraria): string {
  return complemento ? `${horas} h ${complemento}` : `${horas} h`
}
