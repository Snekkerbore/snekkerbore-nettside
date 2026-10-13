import { podcasts } from '../data/podcasts'

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function Podcasts() {
  if (podcasts.length === 0) return null

  return (
    <section className="bg-coal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-chalk-300 uppercase">Podcast</p>
          <h2 className="mt-4 text-3xl font-black text-chalk-50 uppercase sm:text-4xl">
            Vi har vært gjester
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast) => (
            <a key={podcast.url} href={podcast.url} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-video w-full overflow-hidden bg-coal-700">
                <img src={podcast.thumbnail} alt={podcast.title} className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70">
                    <PlayIcon />
                  </span>
                </span>
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.2em] text-chalk-300 uppercase">{podcast.channel}</p>
              <h3 className="mt-2 text-lg font-bold text-chalk-50">{podcast.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
