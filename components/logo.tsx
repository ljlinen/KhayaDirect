import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11.2 12 4l9 7.2" />
          <path d="M5.5 9.6V20h13V9.6" />
          <path d="M10 20v-5h4v5" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Khaya<span className="text-primary">Direct</span>
      </span>
    </span>
  )
}
