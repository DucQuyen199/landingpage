import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn bạn đã đăng ký với ${email}!`);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#1a535c] mb-4">
              📬 Cập nhật thông tin!
            </h2>
            <p className="text-[#1a535c]/70 mb-6">
              Đăng ký nhận bản tin của chúng tôi để nhận ưu đãi độc quyền, sản phẩm mới và hoạt động vui nhộn cho trẻ em!
            </p>
            <div className="max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#ff6b6b] focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#ff6b6b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#ff5252] transition-colors"
                >
                  Đăng ký
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#1a535c] mb-6">Liên hệ với chúng tôi</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-md">
                <FiPhone className="text-[#1a535c]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1a535c]">Điện thoại</h4>
                <p className="text-[#1a535c]/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-md">
                <FiMail className="text-[#1a535c]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1a535c]">Email</h4>
                <p className="text-[#1a535c]/70">hello@toyworld.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-md">
                <FiMapPin className="text-[#1a535c]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1a535c]">Địa chỉ</h4>
                <p className="text-[#1a535c]/70">123 Đường Đồ Chơi, Thành phố Vui chơi, PC 12345</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
