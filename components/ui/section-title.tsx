import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Accent = "teal" | "purple" | "lime"

const eyebrowColor: Record<Accent, string> = {
  teal: "text-brand-teal",
  purple: "text-brand-purple",
  lime: "text-brand-accent",
}

/** Cabeçalho de seção padrão: eyebrow + título + descrição, centralizado. */
export function SectionTitle({
  eyebrow,
  accent = "teal",
  icon,
  title,
  description,
  className,
}: {
  eyebrow: string
  accent?: Accent
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <span
        className={cn(
          "text-sm font-semibold tracking-widest uppercase mb-4",
          icon ? "inline-flex items-center gap-2" : "block",
          eyebrowColor[accent],
        )}
      >
        {icon}
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}
