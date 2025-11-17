export default function SectionTitle({ title, subtitle, linkLabel = 'Xem tất cả', linkHref = '#' }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400/80">NDQ Games</p>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>}
      </div>
      <a className="hidden text-sm font-semibold text-white transition hover:text-emerald-400 md:inline" href={linkHref}>
        {linkLabel}
      </a>
    </div>
  )
}

