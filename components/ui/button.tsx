import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"

const sizeClass: Record<Size, string> = {
  sm: "px-6 py-3.5",
  md: "px-8 py-4",
}

const variantClass: Record<Variant, string> = {
  primary:
    "gradient-bg text-white shadow-lg shadow-brand-purple/30 hover:opacity-90 hover:scale-105",
  secondary:
    "text-gray-300 border border-brand-purple/40 hover:border-brand-teal/60 hover:text-brand-teal",
  ghost: "text-gray-300 hover:text-brand-teal",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  children: ReactNode
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(base, sizeClass[size], variantClass[variant], fullWidth && "w-full", className)}
      {...rest}
    >
      {children}
    </button>
  )
}
