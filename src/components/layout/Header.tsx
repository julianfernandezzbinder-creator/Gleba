import { useEffect, useState } from 'react'
import Logo from '../ui/Logo'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#preguntas' },
]

const bar = 'h-0.5 w-[27px] bg-[#d9d9d9] transition duration-250'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    // Fijo: acompaña el scroll. El glass está en la barra (backdrop-blur).
    <header className="fixed inset-x-0 top-8 z-50">
      <div className="relative mx-auto flex h-[75px] w-[min(calc(100%_-_48px),1180px)] items-center justify-between rounded-md bg-black/35 py-2.5 pl-3.5 pr-[18px] backdrop-blur-xl md:bg-black/60">
        <a href="#inicio" onClick={close} aria-label="Ir al inicio">
          <Logo />
        </a>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
          className="grid size-[43px] cursor-pointer place-content-center gap-1.5 rounded-md bg-black/63 md:hidden"
        >
          <span className={`${bar} ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`${bar} ${open ? 'opacity-0' : ''}`} />
          <span className={`${bar} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav
          id="menu-principal"
          className={`absolute inset-x-0 top-[74px] grid overflow-hidden rounded-b-md bg-[#2e2e2e] px-[21px] transition-all duration-300 md:static md:visible md:flex md:max-h-none md:w-auto md:gap-[34px] md:overflow-visible md:bg-transparent md:p-0 md:opacity-100 ${
            open ? 'visible max-h-[250px] pb-[18px] pt-2 opacity-100' : 'invisible max-h-0 opacity-0'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className="border-b-2 border-[#d9d9d9] px-0.5 py-[11px] text-subtitle font-body tracking-[-0.01em] md:border-0 md:p-0 md:py-2 md:text-nav md:hover:text-brand-pink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
