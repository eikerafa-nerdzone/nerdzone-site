import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Texto com o gradiente oficial da marca (roxo → verde água). */
export function GradientText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <span className={cn("gradient-text", className)}>{children}</span>
}
