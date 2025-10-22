import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import logoToy from '../../logo_toy.png';

const Footer = () => {
  const footerLinks = {
    'Giới thiệu': ['Câu chuyện của chúng tôi', 'Đội ngũ', 'Tuyển dụng', 'Blog'],
    'Hỗ trợ': ['Trung tâm trợ giúp', 'Hướng dẫn an toàn', 'Thông tin vận chuyển', 'Đổi trả'],
    'Chính sách': ['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Chính sách cookie', 'Bảo hành'],
  };

  const socialLinks = [
    { icon: FiFacebook, href: '#', color: 'hover:text-blue-500' },
    { icon: FiInstagram, href: '#', color: 'hover:text-pink-500' },
    { icon: FiTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FiYoutube, href: '#', color: 'hover:text-red-500' },
    { icon: SiTiktok, href: '#', color: 'hover:text-black' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoToy} 
                alt="ToyWorld Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Mang lại niềm vui và học tập cho mọi trẻ em thông qua những món đồ chơi an toàn, vui nhộn và giáo dục từ năm 2010.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 ToyWorld Inc. — Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Bảo mật
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Điều khoản
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
