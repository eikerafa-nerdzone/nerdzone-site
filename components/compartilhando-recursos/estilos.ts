import { cn } from "@/lib/utils"

type VarianteBotao = "primario" | "secundario"

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-center font-semibold transition-colors"

const variantes: Record<VarianteBotao, string> = {
  // Neon só como acento: texto na cor base (14,4:1)
  primario: "bg-cr-neon text-cr-noite hover:bg-cr-neon/90",
  // Borda em bruma a 70% (acima de 4:1 sobre a base) para o limite do botão ser visível
  secundario: "border border-cr-bruma/70 text-cr-nevoa hover:border-cr-nevoa hover:bg-cr-nevoa/5",
}

export function classeBotao(variante: VarianteBotao, extra?: string): string {
  return cn(base, variantes[variante], extra)
}

/** Cartão sobre a base: superfície elevada com borda discreta. */
export const classeCartao = "rounded-2xl border border-cr-linha bg-cr-noite-2"
