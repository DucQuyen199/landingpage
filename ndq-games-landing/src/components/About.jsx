import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-8 md:px-16 lg:px-24 pt-32 overflow-hidden">
      {/* Background with Logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(/logo.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white italic leading-tight mb-8" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
            Contact Us
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
            Nhận Thi Công Phần Mềm Theo Yêu Cầu
          </p>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Services Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                Dịch Vụ Thi Công Phần Mềm
              </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Web Development</h4>
                  <p className="text-white/70">Website, Landing Page, E-commerce</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Mobile App Development</h4>
                  <p className="text-white/70">iOS, Android, Cross-platform</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Custom Software</h4>
                  <p className="text-white/70">ERP, CRM, Management Systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Game Development</h4>
                  <p className="text-white/70">2D, 3D, Mobile Games</p>
                </div>
              </div>
            </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                Tại Sao Chọn Chúng Tôi?
              </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Đội ngũ chuyên nghiệp, giàu kinh nghiệm</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Giá cả cạnh tranh, hợp lý</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bảo hành và hỗ trợ dài hạn</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Giao hàng đúng tiến độ cam kết</span>
              </li>
            </ul>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Phone Number */}
            <div>
              <p className="text-white/70 text-sm font-medium mb-2">Hotline</p>
              <a 
                href="tel:0332029410"
                className="text-white text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity block"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
              >
                0332029410
              </a>
              <p className="text-white/70 text-sm mt-2">
                Liên hệ ngay để được tư vấn miễn phí!
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-white/70 text-sm font-medium mb-2">Email</p>
              <a 
                href="mailto:quyennd19@gmail.com"
                className="text-white text-3xl md:text-4xl font-bold hover:opacity-80 transition-opacity break-all block"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
              >
                quyennd19@gmail.com
              </a>
              <p className="text-white/70 text-sm mt-2">
                Gửi yêu cầu qua email để nhận báo giá chi tiết
              </p>
            </div>

            {/* CTA Links */}
            <div className="flex flex-col gap-6 pt-4">
              <a
                href="tel:0332029410"
                className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2 text-white"
              >
                Gọi Ngay <span className="text-2xl">›</span>
              </a>
              <a
                href="mailto:quyennd19@gmail.com"
                className="text-lg md:text-xl font-light hover:opacity-80 transition-opacity flex items-center gap-2 text-white"
              >
                Gửi Email <span className="text-2xl">›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
