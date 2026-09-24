import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        soft: 'border border-border bg-card text-foreground shadow-sm hover:bg-secondary',
        ghost: 'text-foreground hover:bg-secondary',
        onPrimary:
          'bg-primary-foreground text-primary shadow-sm hover:bg-primary-foreground/90',
      },
      size: {
        sm: 'h-9 px-3.5 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type CtaButtonProps = VariantProps<typeof ctaVariants> & {
  className?: string
  children: React.ReactNode
} & (
    | ({ href: string } & Omit<
        React.ComponentPropsWithoutRef<typeof Link>,
        'href' | 'className'
      >)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function CtaButton({
  className,
  variant,
  size,
  children,
  ...props
}: CtaButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)

  if (props.href !== undefined) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { href: _ignored, ...buttonProps } = props
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
