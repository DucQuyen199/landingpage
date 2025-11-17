import Badge from './Badge'

export default function CareersSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1a1319] via-[#0d0a12] to-[#160f19] p-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.75)] md:p-14 animate-fadeIn">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-gradient-to-bl from-[#f15b5b]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-gradient-to-tr from-[#c33939]/10 to-transparent rounded-full blur-2xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInLeft">
          <Badge className="mb-4">Chúng tôi đang tuyển dụng!</Badge>
          <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl mb-6 max-w-4xl mx-auto">
            Xây dựng tương lai gaming cùng NDQ Games
          </h3>
          <p className="text-base leading-relaxed text-white/75 max-w-2xl mx-auto">
            Chúng tôi đang tìm kiếm những tài năng đam mê muốn tạo nên sự khác biệt trong ngành công nghiệp game. 
            Từ nghệ thuật, kỹ thuật đến esports — hãy tìm vai trò phù hợp với đam mê của bạn.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fadeInUp animation-delay-200">
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 animate-scaleIn" style={{animationDelay: '300ms'}}>
            <div className="relative z-10">
              <p className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">155+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Vị trí trống</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f15b5b]/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 animate-scaleIn" style={{animationDelay: '400ms'}}>
            <div className="relative z-10">
              <p className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">26</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Văn phòng</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f15b5b]/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 animate-scaleIn" style={{animationDelay: '500ms'}}>
            <div className="relative z-10">
              <p className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">50+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Quốc gia</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f15b5b]/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 animate-scaleIn" style={{animationDelay: '600ms'}}>
            <div className="relative z-10">
              <p className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">24/7</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Hỗ trợ</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f15b5b]/20 to-transparent rounded-full blur-xl" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInLeft animation-delay-700">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Tại sao chọn NDQ Games?</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#f15b5b] mt-2 flex-shrink-0" />
                  <p className="text-white/75 text-sm">Môi trường làm việc sáng tạo và đầy thử thách</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#f15b5b] mt-2 flex-shrink-0" />
                  <p className="text-white/75 text-sm">Cơ hội phát triển sự nghiệp toàn cầu</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#f15b5b] mt-2 flex-shrink-0" />
                  <p className="text-white/75 text-sm">Đồng nghiệp đam mê và tài năng</p>
                </div>
              </div>
            </div>
            
            <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f15b5b] to-[#c33939] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_15px_35px_rgba(193,57,57,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_20px_40px_rgba(193,57,57,0.45)] hover:scale-105">
              Khám phá công việc
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-80 md:h-96 overflow-hidden rounded-[28px] border border-white/5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)] animate-slideInRight animation-delay-800">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2022_6_1_637897027105597193_lol-la-gi-thumnail.png"
              alt="NDQ office"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/80">
                NDQ Games HQ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

