import logo480 from '../assets/logo-480.webp'
import logo960 from '../assets/logo-960.webp'

export default function Logo({ className = 'h-14' }) {
  return (
    <img
      src={logo480}
      srcSet={`${logo480} 480w, ${logo960} 960w`}
      sizes="(min-width: 1024px) 420px, 240px"
      width="480"
      height="417"
      alt="Snekkerbore AS"
      className={`w-auto ${className}`}
    />
  )
}
