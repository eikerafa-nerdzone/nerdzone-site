"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CopaDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Upper-right corner: bunting "2026" — diagonal, anchored at top-right */}
      <motion.div
        className="absolute top-0 right-0"
        style={{ transformOrigin: "top left" }}
        initial={{ rotate: 18 }}
        animate={{ rotate: [18, 15, 18], y: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/copa-8.png"
          alt=""
          width={724}
          height={241}
          className="w-64 sm:w-80 h-auto"
        />
      </motion.div>

      {/* Bottom-left: Copa 2026 badge */}
      <motion.div
        className="absolute bottom-24 sm:bottom-8 left-3 sm:left-4 opacity-50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/images/copa-6.png"
          alt="Copa 2026"
          width={120}
          height={120}
          className="w-14 sm:w-16 h-auto"
        />
      </motion.div>
    </div>
  )
}
