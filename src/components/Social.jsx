import ImageBlock from './ImageBlock'
import ReelTile from './ReelTile'
import { socialReels } from '../data/socialReels'

const INSTAGRAM_VARIANTS = ['steel', 'flat', 'safety', 'flat', 'steel', 'safety']

const YOUTUBE_VIDEOS = [
  { title: 'Fra riving til ferdig bad', variant: 'steel' },
  { title: 'Slik priser vi et tilbygg', variant: 'safety' },
  { title: 'En dag på byggeplassen', variant: 'flat' },
]

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-steel-50">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function Social() {
  return (
    <section id="folg-oss" className="bg-steel-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-ink-700 uppercase">
            Følg oss
          </p>
          <h2 className="mt-4 text-3xl font-black text-ink-950 uppercase sm:text-4xl">
            Vi viser frem jobben vi gjør
          </h2>
          <p className="mt-6 text-lg text-ink-700">
            Prosjektoppdateringer, før/etter og det som skjer på byggeplassen
            – bli med videre på Instagram og YouTube.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-ink-950">Instagram</h3>
            <a
              href="https://instagram.com/snekkerbore"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-ink-950 hover:text-ink-700"
            >
              Følg @snekkerbore
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {socialReels.length > 0
              ? socialReels.map((reel, i) => (
                  <ReelTile key={reel.url} reel={reel} variant={INSTAGRAM_VARIANTS[i % INSTAGRAM_VARIANTS.length]} />
                ))
              : INSTAGRAM_VARIANTS.map((variant, i) => (
                  <ImageBlock key={i} variant={variant} className="aspect-[9/16] w-full text-safety-500" />
                ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-ink-950">YouTube</h3>
            <a
              href="https://youtube.com/@snekkerbore"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-ink-950 hover:text-ink-700"
            >
              Abonner på kanalen
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {YOUTUBE_VIDEOS.map((video) => (
              <div key={video.title}>
                <div className="relative">
                  <ImageBlock variant={video.variant} className="aspect-video w-full text-safety-500" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-950/70">
                      <PlayIcon />
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink-950">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
