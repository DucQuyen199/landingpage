import Badge from './Badge'

export default function HeroSection({ content }) {
  const { background, badge, title, description, primaryAction, secondaryAction, details } = content
  const { duration, release, special } = details

  return (
    <section className="relative -mx-4 -mt-28 overflow-hidden border border-white/10 bg-[#161018] shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] sm:-mx-6 sm:-mt-28 lg:-mx-10 lg:-mt-28 xl:-mx-14 animate-fadeIn">
      <img src={background} alt={title} className="absolute inset-0 h-full w-full object-cover animate-scaleIn" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/75 to-black/30 sm:bg-gradient-to-r sm:from-black sm:via-black/70 sm:to-transparent" />
      <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-2xl space-y-7">
          <Badge className="animate-slideInLeft">{badge}</Badge>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] animate-slideInLeft animation-delay-200">{title}</h1>
          <p className="text-base text-white/80 md:text-lg animate-slideInLeft animation-delay-300">{description}</p>
          <div className="flex flex-wrap items-center gap-4 animate-slideInLeft animation-delay-400">
            <button className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#f15b5b] to-[#c33939] px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_20px_40px_rgba(193,57,57,0.35)] transition hover:brightness-110">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-lg">▶</span>
              {primaryAction}
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
              {secondaryAction}
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 text-xs uppercase tracking-[0.3em] text-white/45 sm:grid-cols-3 animate-fadeInUp animation-delay-500">
          <div className="space-y-2">
            <p>Thời lượng</p>
            <p className="text-base normal-case tracking-normal text-white/85">{duration}</p>
          </div>
          <div className="space-y-2">
            <p>Phát hành</p>
            <p className="text-base normal-case tracking-normal text-white/85">{release}</p>
          </div>
          <div className="space-y-2 sm:col-span-1 md:col-span-1">
            <p>Sự kiện đặc biệt</p>
            <p className="text-base normal-case tracking-normal text-white/80">{special}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

