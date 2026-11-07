import { stat } from "node:fs/promises"
import path from "node:path"
import { rotaIniciativa, type Evento, type Material } from "@/lib/compartilhando-recursos"

const pastaDownloads = "downloads"

export type MaterialDisponivel = Material & {
  href: string
  tamanho: string
}

export function formatarTamanho(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`
}

/**
 * Lê, no build, quais materiais do evento existem em
 * public/compartilhando-recursos/downloads/<id do evento>. Só os que existem
 * viram card; o tamanho vem do próprio arquivo.
 */
export async function listarMateriaisDisponiveis(evento: Evento): Promise<MaterialDisponivel[]> {
  const pasta = path.join(process.cwd(), "public", "compartilhando-recursos", pastaDownloads, evento.id)

  const encontrados = await Promise.all(
    evento.materiais.map(async (material): Promise<MaterialDisponivel | null> => {
      try {
        const info = await stat(path.join(pasta, material.arquivo))
        if (!info.isFile()) return null
        return {
          ...material,
          href: `${rotaIniciativa}/${pastaDownloads}/${evento.id}/${material.arquivo}`,
          tamanho: formatarTamanho(info.size),
        }
      } catch {
        return null
      }
    }),
  )

  return encontrados.filter((material): material is MaterialDisponivel => material !== null)
}
