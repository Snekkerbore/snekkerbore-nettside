import ImageBlock from './ImageBlock'

export default function Hero() {
  return (
    <section id="hjem" className="bg-steel-50 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
          Snekkerbore AS
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-black text-ink-950 uppercase sm:text-5xl lg:text-6xl">
          Solid håndverk. Ingen snarveier.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink-700">
          Vi tar på oss alt fra tilbygg og bad til kjøkken og terrasser.
          Nøyaktig planlegging, ryddig gjennomføring, og et sluttresultat som
          tåler å bli sett nøye etter i sømmene.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="bg-ink-950 px-7 py-3.5 text-sm font-bold text-safety-500 uppercase transition-colors hover:bg-ink-700"
          >
            Få et tilbud
          </a>
          <a
            href="#prosjekter"
            className="border-2 border-ink-950 px-7 py-3.5 text-sm font-bold text-ink-950 uppercase transition-colors hover:bg-steel-100"
          >
            Se prosjekter
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <ImageBlock
          variant="steel"
          className="aspect-[16/9] w-full text-safety-500"
        />
      </div>
    </section>
  )
}
