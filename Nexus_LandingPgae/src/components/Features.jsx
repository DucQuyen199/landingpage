import React from 'react';
import { motion } from 'framer-motion';
import { TbBolt, TbLock, TbLink, TbChartBar, TbWorld, TbRocket } from 'react-icons/tb';

const Features = () => {
  const features = [
    {
      icon: TbBolt,
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times with global edge servers.',
      gradient: 'from-blue-100 to-blue-50',
      accent: 'text-blue-700'
    },
    {
      icon: TbLock,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption and SOC 2 Type II compliance.',
      gradient: 'from-slate-100 to-slate-50',
      accent: 'text-slate-700'
    },
    {
      icon: TbLink,
      title: 'Seamless Integration',
      description: 'Connect with 500+ tools through unified API.',
      gradient: 'from-purple-100 to-purple-50',
      accent: 'text-purple-700'
    },
    {
      icon: TbChartBar,
      title: 'Advanced Analytics',
      description: 'Real-time insights with predictive intelligence.',
      gradient: 'from-cyan-100 to-cyan-50',
      accent: 'text-cyan-700'
    },
    {
      icon: TbWorld,
      title: 'Global Scale',
      description: 'Deployed across 6 continents with 99.99% SLA.',
      gradient: 'from-emerald-100 to-emerald-50',
      accent: 'text-emerald-700'
    },
    {
      icon: TbRocket,
      title: 'Future Ready',
      description: 'AI-powered automation and machine learning models.',
      gradient: 'from-rose-100 to-rose-50',
      accent: 'text-rose-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100/20 rounded-full blur-3xl"></div>
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
              <span className="text-sm font-medium text-gray-700">Powerful Features</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              to Succeed
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to maximize your potential and streamline your workflow
          </p>
        </motion.div>

        {/* Features Grid - 3 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative h-full rounded-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-glass border border-white/60 group-hover:border-white/80 transition-colors duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 ${feature.accent}`}>
                      <IconComponent size={40} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${feature.accent}`}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-600 text-lg">
              Explore all features and find the perfect plan for your needs
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
              View All Features
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
