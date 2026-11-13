import Button from '../ui/Button'

const asset = (name: string) => `/assets/${name}`

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[522px] overflow-hidden bg-ink pt-[137px] md:min-h-[650px] md:pt-[199px]"
    >
      
      <img
        src={asset('hero-wave-left.svg')}
        alt=""
        className="pointer-events-none absolute -left-[250px] bottom-0 w-[746px] max-w-none md:-left-[100px]"
      />
      
      <img
        src={asset('hero-wave-right.svg')}
        alt=""
        className="pointer-events-none absolute -right-[100px] bottom-0 hidden w-[746px] max-w-none md:block"
      />

      <div className="relative z-[2] mx-auto w-[min(calc(100%_-_40px),1180px)]">
        <h1 className="max-w-[405px] text-hero font-title leading-[0.873] tracking-[-0.01em] md:max-w-[650px] md:text-hero-lg">
          Diseñamos tú web a la{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">medida</span> exacta.
        </h1>
        <p className="mt-7 max-w-[305px] text-subtitle font-body leading-[1.09] tracking-[-0.01em] md:max-w-[470px]">
          Tu web hecha a medida, con trato cercano, transparencia total, con todo lo necesario
          para crecer online.
        </p>
        <Button href="#contacto" className="mt-[33px]">
          Contactanos
        </Button>
      </div>
    </section>
  )
}
