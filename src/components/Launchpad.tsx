import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const Launchpad: React.FC = () => {
  return (
    <section id="launchpad" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7256802/pexels-photo-7256802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Launch your ideas" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200 rounded-full opacity-60"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 md:bottom-8 md:right-8 bg-white rounded-xl shadow-lg p-6 z-20 max-w-xs">
                <div className="flex items-center mb-3">
                  <Rocket className="h-8 w-8 text-primary-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Launch Success</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  "Start small, dream big — TEJSTARTER takes you from idea to execution."
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-2 bg-primary-100 rounded-lg mb-4">
              <Rocket className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Launchpad for Every New Beginning
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We're not just a community — we're a launchpad for new ideas, startups, and bold dreams. 
              From small concepts to large ventures, TEJSTARTER supports innovators through mentorship, 
              resources, collaboration, and real-world opportunities.
            </p>
            
            <div className="space-y-4">
              {['Mentorship', 'Resources', 'Collaboration', 'Opportunities'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item}</h4>
                    <p className="text-sm text-gray-600">
                      {item === 'Mentorship' ? 'Guidance from industry experts' : 
                       item === 'Resources' ? 'Access to tools and funding' : 
                       item === 'Collaboration' ? 'Network with like-minded innovators' : 
                       'Connect with real-world projects and partners'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Launchpad;