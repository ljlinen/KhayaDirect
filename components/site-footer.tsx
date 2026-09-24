import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    heading: 'Service',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Why KhayaDirect', href: '#why' },
      { label: 'Tell us what you need', href: '#request' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#why' },
      { label: 'Contact', href: '#request' },
      { label: 'Suppliers', href: '#why' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Product sourcing for people building and improving small homes and
              backyard rooms across South Africa.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} KhayaDirect. All rights reserved.</p>
          <p>Made in South Africa</p>
        </div>
      </div>
    </footer>
  )
}
