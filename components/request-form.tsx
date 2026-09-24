'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const assurances = [
  'A response within two business days',
  'A clear, no-obligation quote',
  'No mark-ups you can\u2019t see',
]

const projectTypes = [
  'New backyard room',
  'Home extension',
  'Renovation / improvement',
  'Repairs & maintenance',
  'Something else',
]

const fieldClass =
  'mt-2 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="request"
      className="scroll-mt-20 bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: reassurance */}
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            Tell us what you need
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
            Start with what you have in mind.
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Share as much or as little as you like. We&apos;ll take it from
            there and come back to you with options and a clear quote.
          </p>

          <ul className="mt-8 space-y-3">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary-foreground/15">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-xl sm:p-8">
          {submitted ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="size-7" />
              </span>
              <h3 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                Thank you — we&apos;re on it.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your request has been received. A member of the KhayaDirect team
                will be in touch within two business days with next steps.
              </p>
              <CtaButton
                variant="ghost"
                className="mt-6 text-primary hover:bg-primary/10"
                onClick={() => setSubmitted(false)}
              >
                Submit another request
              </CtaButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Thabo Mokoena"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="text-sm font-medium text-foreground"
                  >
                    Email or phone
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    required
                    placeholder="you@example.co.za"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-foreground"
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    placeholder="City / province"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="text-sm font-medium text-foreground"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="text-sm font-medium text-foreground"
                >
                  What do you need?
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={4}
                  placeholder="e.g. Roofing sheets, insulation and a door for a 3x4m backyard room…"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <CtaButton type="submit" size="lg" className="mt-1 w-full">
                Send request
                <ArrowRight className="size-4" />
              </CtaButton>
              <p className="text-center text-xs text-muted-foreground">
                No obligation. We&apos;ll only use your details to help with your
                request.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
