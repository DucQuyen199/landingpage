import { Heart, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Về chúng tôi', href: '#' },
    { name: 'Chính sách bảo hành', href: '#' },
    { name: 'Hướng dẫn chọn vợt', href: '#' },
    { name: 'Thông tin giao hàng', href: '#' },
  ];

  const categories = [
    { name: 'Vợt cầu lông', href: '#' },
    { name: 'Giày thể thao', href: '#' },
    { name: 'Áo thể thao', href: '#' },
    { name: 'Phụ kiện', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Phone, href: '#', label: 'Hotline' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left - Logo & Slogan */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="SmashPro Logo" 
                className="h-18 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Cung cấp vợt cầu lông chính hãng, chất lượng cao với giá tốt nhất. Hỗ trợ khách hàng 24/7.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-orange-600 flex-shrink-0" />
                <span className="text-sm">Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                <span className="text-sm">+84 3322029410</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-orange-600 flex-shrink-0" />
                <span className="text-sm">quyennd19@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Middle Left - Categories */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Danh mục</h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Right - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Chính sách</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Kết nối với chúng tôi</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 group"
                  >
                    <Icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">Theo dõi chúng tôi trên mạng xã hội để cập nhật các ưu đãi mới nhất!</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Quyen Nguyen Duc. Bảo lưu mọi quyền.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Làm với</span>
            <Heart size={14} className="text-orange-600 fill-orange-600 animate-pulse" />
            <span>cho những người yêu cầu lông</span>
          </div>
        </div>
      </div>
    </footer>
  );
}