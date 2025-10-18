import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { FaMicrosoft, FaGoogle, FaAmazon, FaApple } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed our workflow. The intuitive design and powerful features make it an absolute game-changer.",
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      avatar: "https://kyruus-app-static.kyruus.com/providermatch/johnshopkins/photos/orig/johnson-sara.jpg?1723150235071",
      rating: 5,
      company: "TechCorp"
    },
    {
      quote: "Nothing comes close to the ease of use and reliability. We've seen a 40% increase in productivity since implementing it.",
      name: "Michael Chen",
      role: "Product Manager",
      avatar: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/image.jpeg",
      rating: 5,
      company: "StartupXYZ"
    },
    {
      quote: "The customer support is outstanding. We've grown from 10 to 100 employees without any hiccups in system performance.",
      name: "Emily Rodriguez",
      role: "Founder at GrowthLab",
      avatar: "https://images.squarespace-cdn.com/content/v1/5da74c3f60e88671cdfabe9c/78360e94-e737-4ad4-bf7f-743b81ff1ed7/Emily+headshot+JLSF.jpg",
      rating: 5,
      company: "GrowthLab"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-gray-200/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex mb-6">
            <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-glass border border-white/60 shadow-glass">
              <span className="text-sm font-medium text-gray-700">Social Proof</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their transformation journey
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/30 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Glass effect */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-glass border border-white/60 group-hover:border-white/80 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-8 flex-grow text-base">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/40">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/60"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
              Trusted by companies of all sizes
            </p>
          </div>
          
          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: FaMicrosoft, label: 'Microsoft', color: 'text-blue-600' },
              { Icon: FaGoogle, label: 'Google', color: 'text-red-500' },
              { Icon: FaAmazon, label: 'Amazon', color: 'text-orange-600' },
              { Icon: FaApple, label: 'Apple', color: 'text-gray-900' }
            ].map((company, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group p-6 rounded-xl bg-white/30 backdrop-blur-glass border border-white/60 hover:border-white/80 transition-all duration-300 cursor-pointer flex flex-col items-center gap-3"
              >
                <div className={`text-4xl ${company.color} group-hover:scale-110 transition-transform duration-300`}>
                  <company.Icon />
                </div>
                <div className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {company.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
