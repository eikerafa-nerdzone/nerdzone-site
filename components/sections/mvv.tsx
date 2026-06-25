"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Binoculars, Diamond } from "lucide-react"
import { mvv } from "@/lib/constants"
import { SectionTitle } from "@/components/ui/section-title"

const iconMap = {
  rocket: Rocket,
  binoculars: Binoculars,
  diamond: Diamond,
}

export function MVV() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="mvv"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(101,42,251,0.05) 50%, transparent 100%)",
      }}
    >
      {/* Top divider */}
      <div className="section-divider mb-0" aria-hidden="true" />

      <div className="container-brand pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Nossa essência"
            accent="lime"
            title="Mundo Nerdzone"
            description={
              <>
                Esse é o nosso mundo e nossa{" "}
                <span className="text-brand-accent font-medium">Filosofia Dimensional</span>
              </>
            }
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {mvv.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/3 hover:border-brand-accent/30 hover:bg-brand-accent/3 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, rgba(204,255,0,0.10) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon size={28} className="text-brand-darker" strokeWidth={2} />}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, #ccff00, transparent)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Culture items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            { emoji: "☕", text: "Tela preta + café = cenário favorito" },
            { emoji: "🤖", text: "Back-end robusto, front-end responsivo" },
            { emoji: "🎯", text: "Feito é melhor que perfeito" },
          ].map((item) => (
            <div
              key={item.emoji}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/5"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-gray-400 text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-16" aria-hidden="true" />
    </section>
  )
}
