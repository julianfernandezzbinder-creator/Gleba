type LogoProps = { large?: boolean }

export default function Logo({ large = false }: LogoProps) {
  return (
    <img
      src={large ? '/assets/logo-footer.svg' : '/assets/logo-header.svg'}
      alt="Estudio GLEBA"
      className={large ? 'h-[66px] w-[149px]' : 'h-[54px] w-[60px]'}
    />
  )
}