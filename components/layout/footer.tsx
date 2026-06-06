"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, useInView } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig, navLinks } from "@/lib/constants"

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido").max(15),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
      setTimeout(() => setStatus("idle"), 6000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:ring-1 ${
      hasError
        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
        : "border-white/10 focus:border-brand-teal/60 focus:ring-brand-teal/20"
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Seu nome *"
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Seu e-mail *"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Telefone / WhatsApp *"
          className={inputClass(!!errors.phone)}
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Como podemos ajudar? *"
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Status messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-brand-teal text-sm"
        >
          <CheckCircle size={16} />
          Mensagem enviada! Retornaremos em breve.
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-sm"
        >
          <AlertCircle size={16} />
          Erro ao enviar. Tente pelo WhatsApp.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-brand-purple/20"
        style={{ background: "linear-gradient(135deg, #652afb, #0acdad)" }}
      >
        {status === "loading" ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  )
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <footer id="contato" ref={ref} className="relative overflow-hidden">
      {/* Top divider */}
      <div className="section-divider" aria-hidden="true" />

      <div
        className="py-20"
        style={{ background: "linear-gradient(180deg, transparent, rgba(101,42,251,0.05))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Brand */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/brand/logo-nerdzone.png"
                  alt="Nerdzone Solutions"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-2xl font-bold text-white">
                  Nerd<span className="text-brand-teal">zone</span>
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                Nerds apaixonados por tecnologia que transformam ideias em soluções digitais reais.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-8">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-teal transition-colors text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-teal transition-colors text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                  WhatsApp: +55 11 99608-2749
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da Nerdzone"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal/40 transition-all duration-200"
                >
                  {/* LinkedIn icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Nerdzone"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-teal hover:border-brand-teal/40 transition-all duration-200"
                >
                  {/* Instagram icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>

              {/* Nav links */}
              <div className="mt-10">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Navegação</p>
                <ul className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/produtos/erpsystem"
                      className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                    >
                      ERPSystem
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produtos/outsourcing"
                      className="text-gray-400 hover:text-brand-teal text-sm transition-colors"
                    >
                      Outsourcing
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: contact form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-brand-teal text-sm font-semibold tracking-widest uppercase mb-4 block">
                Entre em contato
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Vamos conversar?
              </h2>
              <p className="text-gray-400 mb-8">
                Conte seu projeto e entraremos em contato em até 24 horas.
              </p>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nerdzone Solutions. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Feito com ☕ e muito código
          </p>
        </div>
      </div>
    </footer>
  )
}
