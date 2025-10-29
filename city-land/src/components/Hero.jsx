import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="relative h-[380px] md:h-[480px] mt-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://vinhomeoceanpark.com.vn/wp-content/uploads/2019/07/ho-dieu-hoa-bien-ho.jpg"
          alt="City Land Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Logo */}
          <div className="glass-card glass-glow inline-block p-6 rounded-2xl mb-6">
            <img 
              src="/logo.png" 
              alt="City Lane Logo" 
              className="h-24 md:h-32 w-auto object-contain mx-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Tagline */}
          <motion.p 
            className="text-white text-lg md:text-xl font-light tracking-wide drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Không gian sống đẳng cấp - Tương lai rực rỡ
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="animate-bounce">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
