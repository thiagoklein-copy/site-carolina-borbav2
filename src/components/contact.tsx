import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

function InstagramIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.144 1.144 0 1 1 0-2.288 1.144 1.144 0 0 1 0 2.288zM6.556 20.452H4.087V9h2.469v11.452z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.78 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
    </svg>
  )
}

const socialLinks = [
  { href: site.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: site.tiktok, label: "TikTok", icon: TikTokIcon },
] as const

export function Contact() {
  return (
    <section id="conversar" className="relative isolate overflow-hidden bg-sombra py-24 text-creme md:py-32">
      <Image
        src="/carolina/hero-fundo.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-sombra/80" />

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
          <a
            href={site.whatsapp}
            className="cta mt-10 w-full max-w-md"
            target="_blank"
            rel="noreferrer"
          >
            {site.whatsappLabel}
          </a>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-8">
            <p className="text-sm tracking-wide text-creme/75">
              {site.fullName} · {site.title} · {site.crp}
              <br />
              {site.city} e online
            </p>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <p className="text-sm text-creme/85">Me acompanhe nas redes sociais!</p>
              <div className="flex items-center gap-6 text-creme/90">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-sm p-1 transition-colors hover:text-manha"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
