type LogoProps = { large?: boolean }

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

export default function Logo({ large = false }: LogoProps) {
  return (
    <img
      src={asset(large ? 'logo-footer.svg' : 'logo-header.svg')}
      alt="Estudio GLEBA"
      className={large ? 'h-[66px] w-[149px]' : 'h-[54px] w-[60px]'}
    />
  )
}