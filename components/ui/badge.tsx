import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Accent = "purple" | "teal" | "yellow"
type Size = "sm" | "md"

const accentClass: Record<Accent, string> = {
  purple: "bg-brand-purple/15 text-brand-purple border-brand-purple/30",
  teal: "bg-brand-teal/15 text-brand-teal border-brand-teal/30",
  yellow: "bg-brand-yellow/15 text-brand-yellow border-brand-yellow/30",
}

const sizeClass: Record<Size, string> = {
  sm: "gap-1.5 px-3 py-1 text-xs font-semibold",
  md: "gap-2 px-4 py-1.5 text-sm font-medium",
}

/** Tag/badge da marca. `code` adiciona o glifo `</>` em mono. */
export function Badge({
  accent = "teal",
  size = "sm",
  code = false,
  icon,
  children,
  className,
}: {
  accent?: Accent
  size?: Size
  code?: boolean
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border w-fit",
        accentClass[accent],
        sizeClass[size],
        className,
      )}
    >
      {code && (
        <span className="font-mono" aria-hidden="true">
          {"</>"}
        </span>
      )}
      {icon}
      {children}
    </span>
  )
}
