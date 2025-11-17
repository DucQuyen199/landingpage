const TAG_STYLES = {
  default: {
    wrapper: 'bg-white/10 text-white/70',
    dot: 'bg-emerald-300',
  },
  highlight: {
    wrapper: 'bg-yellow-400/20 text-yellow-200',
    dot: 'bg-yellow-300',
  },
}

function NewsTag({ children, variant = 'default', compact = false }) {
  const style = TAG_STYLES[variant] ?? TAG_STYLES.default

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${compact ? 'px-3 py-1 text-[0.55rem]' : 'px-4 py-1 text-[0.65rem]'} font-semibold uppercase tracking-[0.35em] ${style.wrapper}`}
    >
      <span className={`h-2 w-2 rounded-full ${style.dot}`} />
      <span>{children}</span>
    </span>
  )
}

export default function NewsSection({ featured, trending }) {
  return (
    <section className="w-full py-14 animate-fadeIn">
      <div className="flex w-full flex-col gap-10 px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between animate-slideInLeft">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Chuyện gì đang xảy ra vậy?</h2>
          <a
            className="self-start rounded-full bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/15 md:self-auto"
            href="#"
          >
            Xem tất cả
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured News - 2 columns */}
          <article className="lg:col-span-2 overflow-hidden rounded-2xl bg-black/30 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.85)] animate-slideInUp animation-delay-200">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  {featured.date}
                </span>
                {featured.location && (
                  <span className="inline-flex items-center gap-1 text-white/50">{featured.location}</span>
                )}
              </div>
              <NewsTag variant="highlight">{featured.tag}</NewsTag>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{featured.title}</h3>
              {featured.description && (
                <p className="max-w-2xl text-sm text-white/70">{featured.description}</p>
              )}
            </div>
          </article>

          {/* Trending News - 1 column */}
          <aside className="space-y-6 animate-slideInRight animation-delay-300">
            <h3 className="text-xl font-semibold text-white uppercase tracking-[0.1em] text-white/80">
              Tin tức nổi bật
            </h3>
            <div className="space-y-4">
              {trending.slice(0, 3).map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4 transition hover:border-white/10 hover:bg-white/[0.07] animate-fadeInUp"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-white/50">
                      <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
                      {item.tag}
                    </div>
                    <h4 className="mt-2 text-base font-semibold text-white transition group-hover:text-white/85">
                      {item.title}
                    </h4>
                    {item.meta && (
                      <p className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-white/40">{item.meta}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

