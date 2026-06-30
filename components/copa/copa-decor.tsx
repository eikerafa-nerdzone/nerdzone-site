"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CopaDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Bunting 2026 (purple/teal, brand colors) — just below navbar */}
      <div className="absolute top-20 inset-x-0 flex justify-center">
        <Image
          src="/images/copa-1.webp"
          alt=""
          width={1086}
          height={362}
          className="w-full max-w-3xl opacity-50"
          style={{ maxHeight: 72, objectFit: "contain", objectPosition: "center top" }}
        />
      </div>

      {/* Floating ball (purple/teal) — right edge, hero level */}
      <motion.div
        className="absolute top-[30%] -right-6 opacity-20"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/copa-2.webp"
          alt=""
          width={200}
          height={200}
          className="w-24 sm:w-32 h-auto"
        />
      </motion.div>

      {/* Copa 2026 badge — bottom-left (avoids WhatsApp button) */}
      <motion.div
        className="absolute bottom-24 sm:bottom-8 left-3 opacity-30"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/images/copa-6.webp"
          alt="Copa 2026"
          width={110}
          height={110}
          className="w-12 sm:w-14 h-auto"
        />
      </motion.div>

      {/* Trophy — left edge, produtos area */}
      <motion.div
        className="absolute top-[62%] -left-3 opacity-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image
          src="/images/copa-4.webp"
          alt=""
          width={100}
          height={100}
          className="w-16 h-auto"
        />
      </motion.div>

      {/* Brazilian 2026 ball — right edge, middle of page */}
      <motion.div
        className="absolute top-[52%] -right-3 opacity-[0.09]"
        animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Image
          src="/images/copa-3.webp"
          alt=""
          width={130}
          height={130}
          className="w-16 sm:w-20 h-auto"
        />
      </motion.div>

      {/* Brazilian ball + ribbon — left edge, footer area */}
      <motion.div
        className="absolute top-[76%] -left-2 opacity-[0.08]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Image
          src="/images/copa-5.webp"
          alt=""
          width={120}
          height={120}
          className="w-14 sm:w-16 h-auto"
        />
      </motion.div>

      {/* Ribbon strip — very bottom edge */}
      <div className="absolute bottom-0 inset-x-0 opacity-[0.07]">
        <Image
          src="/images/copa-7.webp"
          alt=""
          width={1086}
          height={362}
          className="w-full h-auto"
          style={{ maxHeight: 60, objectFit: "cover" }}
        />
      </div>

      {/* Bunting 2026 (green/yellow) — top-right, quem-somos level */}
      <motion.div
        className="absolute top-[22%] right-0 opacity-10 hidden sm:block"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/images/copa-8.webp"
          alt=""
          width={543}
          height={181}
          className="w-40 sm:w-52 h-auto"
        />
      </motion.div>
    </div>
  )
}
