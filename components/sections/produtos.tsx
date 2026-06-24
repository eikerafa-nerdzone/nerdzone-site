"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Monitor, Users, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { produtos } from "@/lib/constants"

const iconMap = {
  monitor: Monitor,
  users: Users,
}

const colorMap = {
  purple: {
    border: "hover:border-brand-purple/50",
    glow: "rgba(101,42,251,0.1)",
    iconBg: "from-brand-purple to-brand-purple-dark",
    iconShadow: "shadow-brand-purple/25",
    tag: "bg-brand-purple/15 text-brand-purple border-brand-purple/30",
    arrow: "text-brand-purple group-hover:text-white",
    arrowBg: "group-hover:bg-brand-purple",
    line: "from-brand-purple",
  },
  teal: {
    border: "hover:border-brand-teal/50",
    glow: "rgba(10,205,173,0.1)",
    iconBg: "from-brand-teal to-brand-teal-dark",
    iconShadow: "shadow-brand-teal/25",
    tag: "bg-brand-teal/15 text-brand-teal border-brand-teal/30",
    arrow: "text-brand-teal group-hover:text-white",
    arrowBg: "group-hover:bg-brand-teal",
    line: "from-brand-teal",
  },
}

export function Produtos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="produtos" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-teal text-sm font-semibold tracking-widest uppercase mb-4 block">
            Soluções Nerdzone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Produtos & Serviços
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Do sistema de gestão à alocação de talentos — temos o que sua empresa precisa para crescer.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {produtos.map((produto, i) => {
            const Icon = iconMap[produto.icon as keyof typeof iconMap]
            const colors = colorMap[produto.color as keyof typeof colorMap]

            return (
              <motion.div
                key={produto.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Link
                  href={`/produtos/${produto.slug}`}
                  className={`group relative flex flex-col p-8 rounded-2xl border border-white/5 bg-white/3 ${colors.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-full`}
                  style={
                    {
                      "--glow": colors.glow,
                    } as React.CSSProperties
                  }
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${colors.glow} 0%, transparent 70%)` }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center mb-6 shadow-lg ${colors.iconShadow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {Icon && <Icon size={24} className="text-white" strokeWidth={1.5} />}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${colors.tag} w-fit`}
                    >
                      <span className="font-mono" aria-hidden="true">{"</>"}</span>
                      {produto.tagline}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow w-fit">
                      <Sparkles size={10} />
                      Orquestração de IA
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{produto.name}</h3>
                  <p className="text-gray-400 leading-relaxed flex-1">{produto.shortDescription}</p>

                  {/* CTA */}
                  <div
                    className={`mt-8 flex items-center gap-2 font-semibold text-sm ${colors.arrow} transition-colors duration-200`}
                  >
                    <span>{produto.cta}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${produto.color === "purple" ? "#652afb" : "#0acdad"}, transparent)`,
                    }}
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
