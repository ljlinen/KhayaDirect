import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col items-start duration-700 animate-in fade-in slide-in-from-bottom-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product sourcing · South Africa
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Sourcing the right products for the home you&apos;re building.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            KhayaDirect helps you find and buy the materials and products for
            building or improving small homes and backyard rooms. Tell us what
            you need — we research it, find trusted suppliers, source it and
            help arrange delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaButton href="#request" size="lg">
              Tell us what you need
              <ArrowRight className="size-4" />
            </CtaButton>
            <CtaButton href="#how" variant="ghost" size="lg">
              See how it works
            </CtaButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted-foreground">
            {['Vetted suppliers', 'Transparent pricing', 'Nationwide delivery'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Image */}
        <div className="relative duration-700 animate-in fade-in slide-in-from-bottom-4">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-[0_24px_60px_-24px_rgba(30,40,30,0.35)]">
            <Image
              src="/images/hero-home.png"
              alt="A modern small backyard room with brick and timber cladding, large black-framed windows and a landscaped garden at golden hour"
              width={1024}
              height={1024}
              priority
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 hidden max-w-[13rem] items-start gap-3 rounded-lg border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:flex">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <p className="text-sm leading-snug text-foreground">
              <span className="font-semibold">Vetted suppliers only</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                We check quality and reliability before you commit.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
