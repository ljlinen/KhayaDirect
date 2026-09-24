import { ClipboardList, Search, CheckCircle2, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'Describe your project or list the products and materials you\u2019re after. No jargon required — a rough idea is enough to get started.',
    Icon: ClipboardList,
  },
  {
    number: '02',
    title: 'We research & source',
    description:
      'We find suitable products, compare options and vetted suppliers, and pull together the right combination of price and quality.',
    Icon: Search,
  },
  {
    number: '03',
    title: 'You approve',
    description:
      'We send you a clear quote with transparent pricing. Nothing is ordered until you\u2019re happy — no surprises, no pressure.',
    Icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'We arrange delivery',
    description:
      'We handle the order and coordinate delivery to your home or site, keeping you updated the whole way through.',
    Icon: Truck,
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            How it works
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            A simpler way to get what your project needs.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We take the research, comparison and coordination off your plate — so
            you can focus on the build, not the buying.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, Icon }) => (
            <li
              key={number}
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-background"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="font-serif text-2xl text-muted-foreground/50">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
