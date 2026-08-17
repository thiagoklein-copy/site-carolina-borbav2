import { Reveal } from "@/components/reveal"

const points = [
  "A terapia é um encontro. Não um espelho frio e neutro, e também não um lugar pra performar que está tudo bem.",
  "Tu não precisa chegar sabendo o que falar. Parte do trabalho é justamente traduzir o que ainda não tem nome.",
  "Atendo presencialmente em Novo Hamburgo/RS e online — o formato se adapta à tua realidade, o cuidado não.",
  "O foco não é eliminar sintoma como fim em si. É entender os próprios padrões, no teu contexto, pra escolher com mais liberdade como se relacionar consigo e com os outros.",
]

export function HowItWorks() {
  return (
    <section className="bg-papel py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <h2 className="display max-w-[10ch] text-[clamp(2.4rem,6vw,4.2rem)] text-castanho">
            como funciona a terapia
          </h2>
          <p className="script mt-6 text-4xl text-bordo md:text-5xl">sem pressa de parecer bem</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="space-y-7">
            {points.map((item) => (
              <li key={item} className="flex gap-4 text-[1.05rem] leading-relaxed md:text-lg">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-bordo" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
