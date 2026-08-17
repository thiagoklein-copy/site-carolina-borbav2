import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

export function About() {
  return (
    <section id="sobre" className="bg-creme py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <h2 className="display mb-8 max-w-[12ch] text-[clamp(2.4rem,6vw,4.4rem)] text-castanho">
            olá, eu me chamo {site.name}. mas pode me chamar de carol
          </h2>
          <div className="prose-brand text-[1.05rem] text-tinta md:text-lg">
            <p>
              Sou psicóloga com abordagem em Terapia do Esquema Contextual, atendendo em Novo
              Hamburgo e online.
            </p>
            <p>
              Acredito que ser humano é, acima de tudo, sentir. Viver é, inevitavelmente, sentir
              vulnerabilidades, afetos e emoções que muitas vezes escondemos, porque fomos
              culturalmente ensinados a fazê-lo. Acredito que todos nós carregamos uma criança
              interior que precisa ser acolhida, ouvida e protegida, e vejo nas relações um poder
              genuinamente reparador nesse sentido.
            </p>
            <p>
              Quando muito precisei, uma psicóloga me lembrou que eu não estava sozinha. É isso que
              desejo proporcionar às pessoas que atendo: a mesma segurança e amparo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <figure className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-3 border border-[color:var(--linha)]" />
            <Image
              src="/carolina/livro.jpg"
              alt={`${site.name} lendo o livro Terapia do Esquema Contextual`}
              width={840}
              height={1120}
              className="relative aspect-[3/4] w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
