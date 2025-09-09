import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pháp lý minh bạch",
      description: "Tất cả bất động sản đều có đầy đủ giấy tờ pháp lý, đảm bảo an toàn cho khách hàng"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Giao dịch nhanh chóng",
      description: "Quy trình giao dịch được tối ưu hóa, giúp khách hàng hoàn tất thủ tục một cách nhanh chóng"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chuyên viên luôn sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Giá cả hợp lý",
      description: "Cam kết mang đến những bất động sản chất lượng với mức giá cạnh tranh nhất thị trường"
    }
  ];

  const team = [
    {
      name: "Nguyễn Văn Anh",
      position: "Giám đốc điều hành",
      image: "https://phunuvietnam.mediacdn.vn/179072216278405120/2023/2/2/z407811279454704d3b10be2c47b86e5bd170832bde562-16753562253021567389777.jpg",
      experience: "15+ năm kinh nghiệm"
    },
    {
      name: "Trần Thị Bình",
      position: "Trưởng phòng kinh doanh",
      image: "https://assets.unileversolutions.com/v1/134184630.jpg",
      experience: "10+ năm kinh nghiệm"
    },
    {
      name: "Lê Văn Cường",
      position: "Chuyên viên tư vấn",
      image: "https://kenh14cdn.com/Images/Uploaded/Share/2011/12/18/111219dsphoto04.jpg",
      experience: "8+ năm kinh nghiệm"
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi cam kết mang đến 
            những dịch vụ tốt nhất và những bất động sản chất lượng cao cho khách hàng.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sứ mệnh của chúng tôi
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Chúng tôi tin rằng mỗi người đều xứng đáng có một ngôi nhà mơ ước. 
              Với sứ mệnh kết nối khách hàng với những bất động sản phù hợp nhất, 
              chúng tôi không ngừng nỗ lực để mang đến những trải nghiệm tuyệt vời 
              và những giá trị bền vững.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Đội ngũ chuyên nghiệp của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ 
              khách hàng trong suốt quá trình tìm kiếm và sở hữu bất động sản.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Tìm hiểu thêm
              </button>
              <button className="btn-secondary">
                Liên hệ ngay
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="About Us"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Tại sao chọn chúng tôi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Đội ngũ chuyên nghiệp
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
