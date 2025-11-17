import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-white/15 bg-black/80 backdrop-blur-lg shadow-[0_12px_40px_rgba(0,0,0,0.35)]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5 text-white sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="NDQ Games" className="h-8 w-auto filter brightness-0 invert" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex">
            <a className="transition hover:text-white" href="#">
              Chúng tôi là ai
            </a>
            <a className="transition hover:text-white" href="#">
              Làm việc cùng chúng tôi
            </a>
            <a className="transition hover:text-white" href="#">
              Tin tức
            </a>
            <a className="transition hover:text-white" href="#">
              Cửa hàng
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-white/80">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition hover:border-white/50 hover:bg-black/60 hover:text-white md:inline-flex"
          >
            <span className="sr-only">Thay đổi khu vực</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/50 hover:bg-black/60 hover:text-white">
            <span>Kết quả</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="5" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="inline-flex items-center rounded-full bg-gradient-to-r from-[#f15b5b] to-[#c33939] px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(193,57,57,0.35)] transition hover:brightness-110">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  )
}

