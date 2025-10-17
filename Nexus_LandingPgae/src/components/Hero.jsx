import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gray-200/20 blur-3xl"
        />
        {/* Blob 2 */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-20 w-96 h-96 rounded-full bg-gray-300/20 blur-3xl"
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/10 to-gray-200/10" 
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Complex Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex"
            >
              <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-glass border border-white/60 shadow-glass">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-700 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Join 10,000+ Users</span>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Build the
              <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Future Today
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Transform your vision into reality with our powerful, intuitive platform. 
              Designed for creators who demand excellence.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/60 text-gray-900 border border-white/80 rounded-full font-semibold backdrop-blur-glass hover:bg-white/80 transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats - 3 Column Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
                { number: '∞', label: 'Scalability' }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/30 backdrop-blur-glass border border-white/40 shadow-glass">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-glass-lg">
                {/* Glass Background */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-glass border border-white/60"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200/40">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">Dashboard</span>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Total Users', value: '12.5K', change: '+24%' },
                        { label: 'Revenue', value: '$54.2K', change: '+12%' }
                      ].map((metric, index) => (
                        <div key={index} className="p-4 rounded-lg bg-white/40 backdrop-blur-xs border border-white/50">
                          <div className="text-xs text-gray-600 font-medium mb-2">{metric.label}</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.change}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="p-4 rounded-lg bg-white/40 backdrop-blur-xs border border-white/50 h-32 flex items-end gap-2">
                      {[65, 78, 45, 82, 70, 55, 88, 92].map((height, idx) => (
                        <motion.div
                          key={idx}
                          animate={{ height: [height * 0.7, height] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-gray-300 to-gray-200 rounded-t-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-8 w-40 p-4 bg-white/50 backdrop-blur-glass border border-white/60 rounded-xl shadow-glass"
            >
              <div className="text-xs font-medium text-gray-600 mb-2">Last Activity</div>
              <div className="text-sm font-semibold text-gray-900">Profile Updated</div>
              <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-16 -right-8 w-40 p-4 bg-white/50 backdrop-blur-glass border border-white/60 rounded-xl shadow-glass"
            >
              <div className="text-xs font-medium text-gray-600 mb-2">System Status</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <div className="text-sm font-semibold text-gray-900">All Systems OK</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
