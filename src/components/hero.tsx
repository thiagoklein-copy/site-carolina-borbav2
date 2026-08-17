"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { site } from "@/lib/site"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-sombra text-creme">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/carolina/hero.jpg"
          alt={`${site.fullName}, psicóloga, sentada numa poltrona com um livro no colo`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] grayscale contrast-[1.05] brightness-[0.92]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(46,58,34,0.72) 0%, rgba(46,58,34,0.18) 42%, rgba(46,58,34,0.28) 100%)",
          }}
        />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 px-5 pt-6 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-manha md:px-10 md:text-[0.72rem]">
        <p className="max-w-[14rem] leading-snug">{site.audience}</p>
        <p className="text-right">{site.crp}</p>
      </div>

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center"
        style={{ y: copyY }}
      >
        <h1 className="relative max-w-[18ch]">
          <span className="display block text-[clamp(3.4rem,12vw,8.4rem)] text-manha">carolina</span>
          <span className="script absolute left-1/2 top-[58%] -translate-x-1/2 text-[clamp(3.8rem,16vw,9.5rem)] text-manha">
            Borba
          </span>
        </h1>
        <p className="mt-28 max-w-[22rem] text-[1.05rem] leading-relaxed text-creme/90 md:mt-36 md:text-xl">
          um lugar seguro pra quem aprendeu a dar conta de tudo sozinha
        </p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 px-5 pb-7 md:px-10">
        <p className="hidden max-w-[16rem] text-sm text-creme/80 md:block">
          Presencial em {site.city} e online
        </p>
        <a href="#sobre" className="cta ml-auto">
          Conheça meu trabalho
        </a>
      </div>
    </section>
  )
}
