import Link from 'next/link'
import { Logo } from '@/components/logo'
import { CtaButton } from '@/components/cta-button'

const navItems = [
  { label: 'How it works', href: '#how' },
  { label: 'Why KhayaDirect', href: '#why' },
  { label: 'Contact', href: '#request' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="KhayaDirect home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CtaButton href="#request" size="sm">
          Tell us what you need
        </CtaButton>
      </div>
    </header>
  )
}
