import { stat } from "node:fs/promises"
import path from "node:path"
import { rotaIniciativa } from "@/lib/compartilhando-recursos"

const pastaDownloads = "downloads"

type MaterialConfig = {
  id: string
  titulo: string
  descricao: string
  formato: "PDF" | "PPTX"
  arquivo: string
}

export type MaterialDisponivel = MaterialConfig & {
  href: string
  tamanho: string
}

const materiais: MaterialConfig[] = [
  {
    id: "documentacao",
    titulo: "Documentação do programa",
    descricao: "Documentação do Programa de Formação em Tecnologia, em PDF.",
    formato: "PDF",
    arquivo: "NerdZone_Documentacao_Programa_de_Formacao.pdf",
  },
  {
    id: "apresentacao",
    titulo: "Apresentação do programa",
    descricao: "Apresentação do Programa de Formação em Tecnologia, em PowerPoint.",
    formato: "PPTX",
    arquivo: "NerdZone_Apresentacao_Programa_de_Formacao.pptx",
  },
]

export function formatarTamanho(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`
}

/**
 * Lê, no build, quais arquivos existem em public/compartilhando-recursos/downloads.
 * Só os que existem viram card; o tamanho vem do próprio arquivo.
 */
export async function listarMateriaisDisponiveis(): Promise<MaterialDisponivel[]> {
  const pasta = path.join(process.cwd(), "public", "compartilhando-recursos", pastaDownloads)

  const encontrados = await Promise.all(
    materiais.map(async (material): Promise<MaterialDisponivel | null> => {
      try {
        const info = await stat(path.join(pasta, material.arquivo))
        if (!info.isFile()) return null
        return {
          ...material,
          href: `${rotaIniciativa}/${pastaDownloads}/${material.arquivo}`,
          tamanho: formatarTamanho(info.size),
        }
      } catch {
        return null
      }
    }),
  )

  return encontrados.filter((material): material is MaterialDisponivel => material !== null)
}
