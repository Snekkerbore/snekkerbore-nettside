import { trustedBrands } from '../data/trustedBrands'

export default function TrustedBrands() {
  if (trustedBrands.length === 0) return null

  return (
    <section className="border-y border-line bg-coal-800 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-chalk-400 uppercase">
          Samarbeidspartnere
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {trustedBrands.map((brand) => {
            const img = (
              <img
                src={brand.src}
                alt={brand.name}
                loading="lazy"
                // Logoer gjøres hvite som standard så de passer på mørk
                // bakgrunn. Sett keepColors: true for å vise originalfargene.
                className={`h-8 w-auto object-contain transition-opacity sm:h-10 ${
                  brand.keepColors ? '' : 'opacity-80 brightness-0 invert hover:opacity-100'
                }`}
              />
            )

            return brand.href ? (
              <a key={brand.name} href={brand.href} target="_blank" rel="noreferrer">
                {img}
              </a>
            ) : (
              <span key={brand.name}>{img}</span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
