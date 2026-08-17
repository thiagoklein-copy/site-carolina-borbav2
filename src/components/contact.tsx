import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="conversar" className="relative isolate overflow-hidden bg-castanho py-24 text-creme md:py-32">
      <Image
        src="/carolina/chao.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25 grayscale"
      />
      <div className="absolute inset-0 bg-castanho/70" />

      <div className="relative z-10 wrap">
        <Reveal>
          <h2 className="display text-[clamp(3rem,10vw,7rem)]">
            vamos
            <span className="script ml-3 inline-block text-[0.78em] text-manha">conversar</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[36ch] text-lg text-creme/90">
            Se esse espaço fez sentido pra ti, me chama. A primeira sessão começa nessa conversa —
            sem pressão de já saber o que dizer.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={site.whatsapp} className="cta" target="_blank" rel="noreferrer">
              {site.whatsappLabel}
            </a>
            <a
              href={site.instagram}
              className="cta cta-ghost"
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${site.instagramHandle}`}
            >
              <InstagramIcon />
              {site.instagramHandle}
            </a>
          </div>
          <p className="mt-16 text-sm tracking-wide text-creme/75">
            {site.fullName} · {site.title} · {site.crp}
            <br />
            {site.city} e online
          </p>
        </Reveal>
      </div>
    </section>
  )
}
