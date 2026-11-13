import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export default function Button({ href, children, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[55px] items-center justify-center rounded-full border border-brand-blue bg-[#060606] px-[18px] text-button font-title leading-none shadow-[0_0_12px_rgb(252_51_97/16%)] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-pink ${className}`}
    >
      {children}
    </a>
  )
}