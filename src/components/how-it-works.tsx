import { Reveal } from "@/components/reveal"

const points = [
  "A terapia é um encontro. Não um espelho frio e neutro, e também não um lugar para performar que está tudo bem.",
  "O foco do meu trabalho é a clínica com adolescentes e mulheres jovens adultas, tanto em atendimentos online quanto presenciais em Novo Hamburgo/RS.",
  "Normalmente, as sessões têm frequência semanal e duração média de 50 minutos. Caso seja necessário, podemos ajustar o formato de acordo com as tuas necessidades se fizer sentido.",
  "Na primeira sessão, a gente se conhece, conversa sobre o que te motivou a procurar atendimento e começa a construir o teu processo, no teu ritmo.",
]

function Asterisk() {
  return (
    <svg
      className="mt-1 h-[1.15rem] w-[1.15rem] shrink-0 -rotate-[9deg] text-sombra"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.4 3.1c-.35 4.2.55 8.6-.15 12.9.2 4.4-.45 8.7.25 12.8" strokeWidth="1.85" />
        <path d="M6.1 8.4c3.6 2.15 8.1 4.35 11.7 6.55 3.2 1.85 7.9 4.7 11.3 6.2" strokeWidth="1.7" />
        <path d="M25.9 7.9c-3.35 2.55-7.9 4.7-11.6 6.85-3.85 2-8.35 4.45-12.2 6.15" strokeWidth="1.75" />
        <path d="M15.7 4.4c.15 3.6-.2 8.1.35 11.6-.25 4.1.4 8.3-.2 11.9" strokeWidth="0.7" opacity="0.45" />
      </g>
    </svg>
  )
}

export function HowItWorks() {
  return (
    <section className="bg-papel pt-24 pb-10 md:pt-32 md:pb-12">
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
                <Asterisk />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
