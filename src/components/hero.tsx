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
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-papel text-sombra">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/carolina/hero-fundo.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(244,236,220,0.32) 0%, rgba(244,236,220,0.08) 48%, rgba(244,236,220,0.2) 100%)",
          }}
        />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 px-5 pt-5 text-[0.78rem] font-medium tracking-[0.16em] uppercase text-castanho md:px-10 md:pt-7 md:text-[0.88rem]">
        <div className="flex max-w-[24rem] items-center gap-3.5">
          <span className="relative flex h-[3.85rem] w-[3.85rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f3ebd4] md:h-[4.65rem] md:w-[4.65rem]">
            <Image
              src="/carolina/logo.png"
              alt={`Marca de ${site.name}`}
              fill
              sizes="80px"
              className="object-contain object-center"
            />
          </span>
          <p className="leading-snug">{site.audience}</p>
        </div>
        <div className="flex h-[3.85rem] shrink-0 items-center md:h-[4.65rem]">
          <p className="text-right">{site.crp}</p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center"
        style={{ y: copyY }}
      >
        <h1 className="hero-ink relative grid w-full place-items-center">
          <span className="display col-start-1 row-start-1 whitespace-nowrap text-[clamp(3.4rem,12vw,8.4rem)] text-sombra">
            carolina
          </span>
          <span className="script col-start-1 row-start-1 translate-y-[72%] whitespace-nowrap text-[clamp(3.8rem,16vw,9.5rem)] text-sombra">
            Borba
          </span>
        </h1>
      </motion.div>

      <div className="absolute inset-x-0 bottom-14 z-10 flex justify-center px-5 md:bottom-16">
        <p className="hero-ink max-w-[22rem] text-center text-[1.05rem] leading-relaxed text-tinta md:text-xl">
          um lugar seguro pra quem aprendeu a dar conta de tudo sozinha
        </p>
      </div>
    </section>
  )
}
