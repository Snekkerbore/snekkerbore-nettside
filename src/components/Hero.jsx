import Logo from './Logo'

const HERO_PHOTOS = [
  { src: '/bilder/kappsag-smil.webp', alt: 'Alexander kapper materialer på kappsagen', position: '50% 35%' },
  { src: '/bilder/lift-utsikt.webp', alt: 'Montering fra lift med utsikt over fjorden', position: '50% 40%' },
  { src: '/bilder/sirkelsag-telt.webp', alt: 'Skjæring med sirkelsag under arbeidstelt', position: '50% 55%' },
]

export default function Hero() {
  return (
    <section id="hjem" className="bg-coal-900 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
            Snekkerbore AS
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-black text-chalk-50 uppercase sm:text-5xl lg:text-6xl">
            Solid håndverk. Ingen snarveier.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-chalk-300">
            Vi tar på oss alt fra tilbygg og bad til kjøkken og terrasser.
            Nøyaktig planlegging, ryddig gjennomføring, og et sluttresultat som
            tåler å bli sett nøye etter i sømmene.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="bg-safety-500 px-7 py-3.5 text-sm font-bold text-coal-950 uppercase transition-colors hover:bg-safety-400"
            >
              Få et tilbud
            </a>
            <a
              href="#prosjekter"
              className="border-2 border-chalk-50 px-7 py-3.5 text-sm font-bold text-chalk-50 uppercase transition-colors hover:bg-coal-800"
            >
              Se prosjekter
            </a>
          </div>
        </div>

        <Logo className="hidden h-96 lg:block" />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 sm:gap-4">
        {HERO_PHOTOS.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`aspect-[3/4] w-full object-cover ${i === 2 ? 'hidden sm:block' : ''}`}
            style={{ objectPosition: photo.position }}
          />
        ))}
      </div>
    </section>
  )
}
