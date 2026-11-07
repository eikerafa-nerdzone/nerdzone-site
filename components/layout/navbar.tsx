"use client"

import { useState, useEffect, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { LogotipoNerdZone } from "@/components/layout/logotipo-nerdzone"
import { navLinks, siteConfig } from "@/lib/constants"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = usePathname() === "/"

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On the home page the link scrolls to its section; on other pages it navigates to "/#section"
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)
    if (!isHome || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const el = document.getElementById(href.replace("#", ""))
    if (!el) return
    event.preventDefault()
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-darker/95 backdrop-blur-md border-b border-brand-purple/20 shadow-lg shadow-brand-purple/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <LogotipoNerdZone uso="menu" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-brand-teal rounded-md transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-brand-purple to-brand-teal text-white hover:opacity-90 transition-opacity shadow-md shadow-brand-purple/25"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-brand-darker/98 backdrop-blur-md border-b border-brand-purple/20 md:hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-brand-teal hover:bg-brand-purple/10 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-brand-purple to-brand-teal text-white"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
