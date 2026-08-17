import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Attendances() {
  return (
    <section className="relative isolate h-[28svh] min-h-[200px] max-h-[260px] overflow-hidden bg-sombra text-creme md:h-auto md:min-h-[58vh] md:max-h-none">
      <Image
        src="/carolina/livro.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[40%_48%] opacity-55 grayscale md:object-[40%_45%]"
      />
      <div className="absolute inset-0 bg-sombra/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-10 text-center md:min-h-[58vh] md:py-24">
        <Reveal>
          <p className="display text-[clamp(4rem,14vw,9rem)] tracking-[0.18em] text-manha">meus</p>
          <p className="script mt-[-0.35em] text-[clamp(3.4rem,12vw,7.5rem)] text-manha">atendimentos</p>
        </Reveal>
      </div>
    </section>
  )
}
