import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiLock } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-96 h-96 bg-gray-200/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-300/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex mb-8"
          >
            <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-glass border border-white/60 shadow-glass">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Ready to Start?</span>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Ready to Transform
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of companies already transforming their workflows. 
            Start your free trial today and see results immediately.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/60 text-gray-900 border border-white/80 rounded-full font-semibold backdrop-blur-glass hover:bg-white/80 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-12"
          >
            {[
              { icon: FiCheck, text: 'No credit card required' },
              { icon: FiZap, text: '30-second setup' },
              { icon: FiLock, text: 'Enterprise security' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-2 text-gray-900">
                  <item.icon size={28} />
                </div>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Glass Card with Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 md:mt-24"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Glass background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/30 opacity-50"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-glass border border-white/60"></div>
              
              {/* Content */}
              <div className="relative p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  What's Included
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Unlimited projects & users',
                    'Advanced analytics',
                    'Priority support',
                    'Custom integrations',
                    'API access',
                    'Team collaboration'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
