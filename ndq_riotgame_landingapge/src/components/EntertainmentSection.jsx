import SectionTitle from './SectionTitle'

export default function EntertainmentSection({ items }) {
  return (
    <section className="space-y-10 animate-fadeIn">
      <div className="flex items-end justify-between animate-slideInLeft">
        <SectionTitle title="Esports & Giải Trí" subtitle="Theo dõi các giải đấu và sản phẩm giải trí mới nhất từ Riot." />
        <a
          href="#"
          className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white sm:block"
        >
          Xem tất cả
        </a>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Large featured card */}
        <div className="lg:col-span-2">
          <div className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1319] via-[#0d0a12] to-[#160f19] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/10 hover:shadow-[0_25px_60px_-25px_rgba(193,57,57,0.2)] animate-slideInUp animation-delay-200">
            <img
              src={items[0]?.image}
              alt={items[0]?.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10 flex h-full items-end p-8">
              <div>
                <h4 className="text-2xl font-bold text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition group-hover:text-white/95 mb-2">
                  {items[0]?.title}
                </h4>
                <p className="text-white/80 text-sm">
                  Khám phá thế giới esports đầy hấp dẫn và các sản phẩm giải trí đỉnh cao từ Riot Games
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Smaller cards on the right */}
        <div className="space-y-6 animate-slideInRight animation-delay-300">
          {items.slice(1, 3).map((item, index) => (
            <div
              key={item.title}
              className="group relative h-[190px] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1319] via-[#0d0a12] to-[#160f19] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/10 hover:shadow-[0_25px_60px_-25px_rgba(193,57,57,0.2)] animate-fadeInUp"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative z-10 flex h-full items-end p-5">
                <h4 className="text-lg font-semibold text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition group-hover:text-white/95">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

