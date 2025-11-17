import { useState } from 'react'
import SectionTitle from './SectionTitle'

export default function GamesSection({ games }) {


  return (
    <section className="space-y-10 animate-fadeIn">
      <div className="flex items-end justify-between animate-slideInLeft">
        <SectionTitle
          title="Trò chơi của chúng tôi"
          subtitle="Khám phá thế giới đa dạng của NDQ trên mọi nền tảng."
        />
        <a
          href="#"
          className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white sm:block"
        >
          Xem tất cả
        </a>
      </div>

      <div className="flex justify-center">
        <div className="flex">
          {games.slice(0, 5).map((game, index) => {
            return (
            <article
              key={`${game.name}-${index}`}
              className="group relative flex-shrink-0 w-[350px] overflow-hidden bg-black shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.9)] cursor-pointer animate-slideInUp"
              style={{ 
                clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                marginLeft: index === 0 ? '0' : '-80px',
                height: '500px',
                animationDelay: `${200 + index * 150}ms`
              }}
            >
              <img
                src={game.image}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {/* Game title */}
                <h4 className="text-center text-sm font-bold uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] line-clamp-2 px-2">
                  {game.name}
                </h4>
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
