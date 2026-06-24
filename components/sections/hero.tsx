"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ChevronRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const fontSize = 13
    let columns = Math.floor(canvas.width / fontSize)
    let drops: number[] = Array(columns).fill(1)

    const chars = "01"

    const draw = () => {
      ctx.fillStyle = "rgba(25, 36, 47, 0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const opacity = Math.random() > 0.5 ? 1 : 0.4
        ctx.fillStyle = `rgba(10, 205, 173, ${opacity * 0.6})`
        ctx.font = `${fontSize}px monospace`
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)

    const onResize = () => {
      resize()
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById("produtos")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const el = document.getElementById("contato")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #19242f 0%, #1a1040 50%, #19242f 100%)",
      }}
    >
      {/* Matrix rain canvas */}
      <MatrixRain />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(101,42,251,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ filter: "drop-shadow(0 0 28px rgba(101,42,251,0.4))" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight cursor-default"
        >
          <span
            className="glitch block text-white"
            data-text="Desenvolvendo"
          >
            Desenvolvendo
          </span>
          <span className="block mt-1">
            para{" "}
            <GradientText>conectar você</GradientText>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={scrollToProducts}>
            Conheça nossos produtos
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>

          <Button variant="secondary" onClick={scrollToContact}>
            Fale conosco
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator — outside content box, anchored to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
