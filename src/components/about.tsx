import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

export function About() {
  return (
    <section id="sobre" className="bg-creme py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <h2 className="display mb-8 max-w-[12ch] text-[clamp(2.4rem,6vw,4.4rem)] text-castanho normal-case">
            Olá, eu sou a Carol!
          </h2>
          <div className="prose-brand text-[1.05rem] text-tinta md:text-lg [&_strong]:font-semibold [&_strong]:text-castanho">
            <p>
              Sou <strong>psicóloga clínica</strong>, e atendo de forma <strong>on-line ou presencial</strong>{" "}
              em Novo Hamburgo/RS. Tenho capacitação em <strong>Terapia do Esquema</strong>, e
              atualmente estou fazendo especialização em{" "}
              <strong>Terapias Comportamentais Contextuais</strong>.
            </p>
            <p>
              Antes de tudo, sou uma <strong>psi humana</strong> e alguém que acredita profundamente
              no valor dos <strong>vínculos seguros</strong>. Sou apaixonada por cachorros, divido a
              rotina com quatro deles em casa e carrego com muito carinho a marca de todos os outros
              que já fizeram parte da minha história. Tenho o sonho de morar perto do mar um dia e
              encontro respiro em duas coisas simples: escutar músicas que traduzem o que estou
              sentindo e ler livros que me conectam com a minha própria história, ao mesmo tempo em
              que me dão espaço pra desacelerar (e esquecer) da realidade.
            </p>
            <p>
              Viver envolve experimentar vulnerabilidades, afetos e emoções que a gente, muitas vezes,
              aprendeu a <strong>esconder ou a carregar em silêncio</strong>. Quando precisei de ajuda
              no passado, foi a experiência de ser ouvida e acolhida por uma psicóloga que me mostrou a{" "}
              <strong>força reparadora de um vínculo</strong>. É esse mesmo espaço de{" "}
              <strong>presença, segurança e escuta genuína</strong> que ofereço nos meus
              atendimentos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <figure className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-3 border border-[color:var(--linha)]" />
            <Image
              src="/carolina/hero.jpg"
              alt={`${site.name}, psicóloga, sentada numa poltrona com um livro no colo`}
              width={840}
              height={1120}
              className="relative aspect-[3/4] w-full object-cover object-[center_18%]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
