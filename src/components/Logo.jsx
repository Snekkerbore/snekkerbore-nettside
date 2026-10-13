export default function Logo({ className = '', tone = 'dark' }) {
  const color = tone === 'light' ? 'text-steel-50' : 'text-ink-950'

  return (
    <div className={`flex items-center gap-2.5 ${color} ${className}`}>
      <span className="h-6 w-1.5 shrink-0 skew-x-[-12deg] bg-safety-500" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-black tracking-tight uppercase">
          Snekkerbore
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.3em] text-ink-500 uppercase">
          AS
        </span>
      </div>
    </div>
  )
}
