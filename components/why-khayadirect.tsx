import Image from 'next/image'
import { ShieldCheck, Wallet, Clock, MapPin } from 'lucide-react'

const reasons = [
  {
    title: 'Vetted suppliers',
    description:
      'We only work with suppliers we\u2019ve checked for quality, reliability and fair pricing.',
    Icon: ShieldCheck,
  },
  {
    title: 'Transparent pricing',
    description:
      'Clear quotes with no hidden mark-ups. You always see what you\u2019re paying for.',
    Icon: Wallet,
  },
  {
    title: 'Your time back',
    description:
      'No more endless searching and phone calls. We do the legwork and report back.',
    Icon: Clock,
  },
  {
    title: 'Local knowledge',
    description:
      'We understand the South African market — what\u2019s available, and what actually works.',
    Icon: MapPin,
  },
]

const stats = [
  { value: '200+', label: 'Vetted suppliers' },
  { value: '9', label: 'Provinces served' },
  { value: '48h', label: 'Average first quote' },
]

export function WhyKhayaDirect() {
  return (
    <section id="why" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        {/* Image + stats */}
        <div>
          <div className="overflow-hidden rounded-xl border border-border shadow-[0_24px_60px_-30px_rgba(30,40,30,0.35)]">
            <Image
              src="/images/materials.png"
              alt="A neatly arranged flat-lay of building material samples: timber veneer, face bricks, tile swatches, a metal hinge and paint cards on a limestone surface"
              width={1024}
              height={1024}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl tracking-tight text-primary">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Copy + reasons */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Why KhayaDirect
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Finding the right products, made easier and safer.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sourcing materials shouldn&apos;t mean second-guessing quality or
            overpaying. We bring the research, relationships and care so you can
            build with confidence.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {reasons.map(({ title, description, Icon }) => (
              <div key={title} className="flex flex-col">
                <span className="flex size-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
