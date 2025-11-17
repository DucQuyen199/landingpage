export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-gradient-to-b from-transparent to-black/30 pt-12 text-sm text-white/60 animate-fadeIn">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Logo */}
        <div className="flex items-center animate-slideInLeft">
          <img
            src="/logo.png"
            alt="NDQ Games"
            className="h-16 w-auto brightness-0 invert"
          />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-3 animate-fadeInUp animation-delay-200">
          <h4 className="text-sm font-semibold text-white mb-2">Liên hệ</h4>
          <div className="space-y-2">
            <a 
              href="tel:0332029410" 
              className="flex items-center gap-2 text-sm transition hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0332029410
            </a>
            <a 
              href="mailto:quyennd19@gmail.com" 
              className="flex items-center gap-2 text-sm transition hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              quyennd19@gmail.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 animate-slideInRight animation-delay-300">
          <h4 className="text-sm font-semibold text-white mb-2">Thông tin</h4>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-sm font-medium transition hover:text-white">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-sm font-medium transition hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-sm font-medium transition hover:text-white">
              Hỗ trợ
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 pt-6 border-t border-white/5 max-w-3xl text-xs leading-relaxed text-white/40 animate-fadeIn animation-delay-400">
        NDQ Games và logo NDQ Games là thương hiệu thuộc sở hữu của NDQ Games, Inc. Tất cả nhãn hiệu là tài sản của các chủ sở hữu tương ứng.
      </div>
    </footer>
  )
}

