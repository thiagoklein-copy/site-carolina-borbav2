import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Attendances() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-sombra text-creme">
      <Image
        src="/carolina/livro.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-55 grayscale"
      />
      <div className="absolute inset-0 bg-sombra/45" />
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
        <Reveal>
          <p className="display text-[clamp(4rem,14vw,9rem)] tracking-[0.18em] text-manha">meus</p>
          <p className="script mt-[-0.35em] text-[clamp(3.4rem,12vw,7.5rem)] text-manha">atendimentos</p>
        </Reveal>
      </div>
    </section>
  )
}
