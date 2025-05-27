import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 bg-primary-100 rounded-lg mb-4">
            <Lightbulb className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About TEJSTARTER</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            TEJSTARTER is a dynamic platform founded by passionate entrepreneurs with a vision to foster creativity and innovation. 
            We provide a collaborative space where individuals — whether students, entrepreneurs, or seasoned professionals — can come 
            together to explore, develop, and actualize their ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Community</h3>
              <p className="text-gray-700">
                We believe that innovation knows no bounds. Whether you're a student with a groundbreaking concept, 
                an entrepreneur looking to bring your startup to life, or a professional wanting to contribute expertise — 
                TEJSTARTER is where ideas flourish.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrepreneurial Spirit</h3>
              <p className="text-gray-700">
                Our platform is designed to nurture the entrepreneurial spirit in everyone. We provide the resources, 
                mentorship, and environment needed to transform innovative ideas into successful ventures, regardless of 
                your background or experience level.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-8">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovative Approach</h3>
              <p className="text-gray-700">
                At TEJSTARTER, we take a unique approach to innovation by combining practical education with real-world 
                opportunities. Our methodology focuses on learning by doing, allowing participants to develop skills while 
                contributing to meaningful projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;