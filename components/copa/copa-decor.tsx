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
        style={{ transformOrigin: "top right" }}
        initial={{ rotate: -18 }}
        animate={{ rotate: [-18, -15, -18], y: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/copa-8.webp"
          alt=""
          width={724}
          height={241}
          className="w-64 sm:w-80 h-auto"
        />
      </motion.div>

      {/* Right — 32% from top: Brazilian ball "2026" */}
      <motion.div
        className="absolute top-[32%] right-0 opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/copa-3.webp"
          alt=""
          width={120}
          height={120}
          className="w-20 sm:w-24 h-auto"
        />
      </motion.div>

      {/* Left — 48% from top: ball + ribbon */}
      <motion.div
        className="absolute top-[48%] left-0 opacity-35"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/images/copa-5.webp"
          alt=""
          width={120}
          height={120}
          className="w-20 sm:w-24 h-auto"
        />
      </motion.div>

      {/* Right — 63% from top: trophy */}
      <motion.div
        className="absolute top-[63%] right-0 opacity-35"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image
          src="/images/copa-4.webp"
          alt=""
          width={110}
          height={110}
          className="w-16 sm:w-20 h-auto"
        />
      </motion.div>

      {/* Bottom-left: Copa 2026 badge */}
      <motion.div
        className="absolute bottom-24 sm:bottom-8 left-3 sm:left-4 opacity-50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/images/copa-6.webp"
          alt="Copa 2026"
          width={120}
          height={120}
          className="w-14 sm:w-16 h-auto"
        />
      </motion.div>

      {/* Bottom: ribbon strip "2026" */}
      <div className="absolute bottom-0 inset-x-0 opacity-30">
        <Image
          src="/images/copa-7.webp"
          alt=""
          width={1086}
          height={362}
          className="w-full h-auto"
          style={{ maxHeight: 64, objectFit: "cover" }}
        />
      </div>
    </div>
  )
}
