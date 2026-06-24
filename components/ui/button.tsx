import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "ghost"
type Size = "xs" | "sm" | "md"
type Gradient = "brand" | "purple" | "teal" | "teal-purple"
type Accent = "purple" | "teal" | "neutral"

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"

const sizeClass: Record<Size, string> = {
  xs: "px-5 py-2 text-sm rounded-lg",
  sm: "px-6 py-3.5 rounded-xl",
  md: "px-8 py-4 rounded-xl",
}

const gradientClass: Record<Gradient, string> = {
  brand: "gradient-bg shadow-brand-purple/30",
  purple: "gradient-bg-purple shadow-brand-purple/30",
  teal: "gradient-bg-teal shadow-brand-teal/30",
  "teal-purple": "gradient-bg-teal-purple shadow-brand-teal/30",
}

const accentClass: Record<Accent, string> = {
  purple: "border-brand-purple/40 hover:border-brand-teal/60 hover:text-brand-teal",
  teal: "border-brand-teal/40 hover:border-brand-teal/60 hover:text-brand-teal",
  neutral: "border-white/10 hover:border-brand-teal/40 hover:text-brand-teal",
}

function variantClasses(variant: Variant, gradient: Gradient, accent: Accent): string {
  if (variant === "primary") {
    return cn("text-white shadow-lg hover:opacity-90 hover:scale-105", gradientClass[gradient])
  }
  if (variant === "secondary") {
    return cn("text-gray-300 border", accentClass[accent])
  }
  return "text-gray-300 hover:text-brand-teal"
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  gradient?: Gradient
  accent?: Accent
  fullWidth?: boolean
  className?: string
  children: ReactNode
  /** Renders an anchor (external) or a Next Link (internal) when set. */
  href?: string
  external?: boolean
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  gradient = "brand",
  accent = "purple",
  fullWidth = false,
  className,
  children,
  href,
  external = false,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    base,
    sizeClass[size],
    variantClasses(variant, gradient, accent),
    fullWidth && "w-full",
    className,
  )

  if (href !== undefined) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
