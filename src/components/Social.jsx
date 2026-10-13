import ReelTile from './ReelTile'
import { socialReels } from '../data/socialReels'
import { youtubeChannelUrl, youtubeVideos } from '../data/youtube'

const INSTAGRAM_VARIANTS = ['steel', 'flat', 'safety', 'flat', 'steel', 'safety']

// Vises frem til ekte Reels er lagt inn i src/data/socialReels.js.
const INSTAGRAM_PHOTOS = [
  { src: '/bilder/vindu-ramme.webp', alt: 'Vindusmontering sett innenfra' },
  { src: '/bilder/vinter-kappsag.webp', alt: 'Kapping på byggeplass om vinteren' },
  { src: '/bilder/kveldsarbeid.webp', alt: 'Kveldsarbeid på terrasse' },
  { src: '/bilder/snomaking-solnedgang.webp', alt: 'Snømåking på byggeplass i solnedgang' },
  { src: '/bilder/spikerpistol.webp', alt: 'Spikerpistol i bruk' },
  { src: '/bilder/dykksag.webp', alt: 'Dykksag på arbeidsbukk' },
]

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function Social() {
  return (
    <section id="folg-oss" className="bg-coal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">
            Følg oss
          </p>
          <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
            Vi viser frem jobben vi gjør
          </h2>
          <p className="mt-6 text-lg text-chalk-300">
            Prosjektoppdateringer, før/etter og det som skjer på byggeplassen
            – bli med videre på Instagram og YouTube.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-chalk-50">Instagram</h3>
            <a
              href="https://instagram.com/snekkerbore"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-chalk-50 hover:text-chalk-300"
            >
              Følg @snekkerbore
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {socialReels.length > 0
              ? socialReels.map((reel, i) => (
                  <ReelTile key={reel.url} reel={reel} variant={INSTAGRAM_VARIANTS[i % INSTAGRAM_VARIANTS.length]} />
                ))
              : INSTAGRAM_PHOTOS.map((photo) => (
                  <a
                    key={photo.src}
                    href="https://instagram.com/snekkerbore"
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-[9/16] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                ))}
          </div>
        </div>

        {youtubeVideos.length > 0 && (
          <div className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-chalk-50">YouTube</h3>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-chalk-50 hover:text-chalk-300"
              >
                Abonner på kanalen
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {youtubeVideos.map((video) => (
                <a
                  key={video.id}
                  href={
                    video.short
                      ? `https://www.youtube.com/shorts/${video.id}`
                      : `https://www.youtube.com/watch?v=${video.id}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`group block ${video.short ? '' : 'col-span-3'}`}
                >
                  <div className="relative overflow-hidden bg-coal-700">
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/${video.short ? 'oardefault' : 'hqdefault'}.jpg`}
                      alt=""
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                        video.short ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 transition-colors group-hover:bg-red-600">
                        <PlayIcon />
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-chalk-50">{video.title}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
