import React from 'react';
import { motion } from 'framer-motion';
import { Building, School, Check } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { Link } from 'react-scroll';

const Collaboration: React.FC = () => {
  const benefits = [
    "Live startup projects",
    "Real-time entrepreneurship experience",
    "Career mentorship"
  ];

  return (
    <section id="colleges" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 bg-secondary-100 rounded-lg mb-4">
            <Building className="h-8 w-8 text-secondary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">College & Institutional Collaboration</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            TEJSTARTER is actively working with educational institutions to create a bridge between academia and industry, 
            providing students with real-world experience and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-6">
                <School className="h-10 w-10 text-secondary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Network</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">
                    <AnimatedNumber to={100} plus={true} />
                  </div>
                  <p className="text-gray-700">Colleges across India</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-xl font-semibold text-gray-900 mb-2">MoUs</div>
                    <p className="text-gray-700">With engineering, agriculture, and professional institutes</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-xl font-semibold text-gray-900 mb-2">Incubators</div>
                    <p className="text-gray-700">Government and private startup incubators</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-xl font-semibold text-gray-900 mb-2">International Reach</div>
                  <p className="text-gray-700">Collaborations in Ghana, Nigeria, Uganda and beyond</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Benefits</h3>
            <p className="text-gray-700 mb-8">
              Partner colleges get access to a comprehensive ecosystem that bridges academia and industry, 
              providing students with valuable real-world experience and career opportunities.
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-4 bg-secondary-50 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-secondary-600" />
                  </div>
                  <p className="font-medium text-gray-800">{benefit}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-primary-700 text-white p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3">Become a Partner Institution</h4>
                <p className="mb-4">Join our growing network of educational institutions and provide your students with real-world entrepreneurial experiences.</p>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="px-6 py-2 bg-white text-primary-700 font-medium rounded-lg shadow hover:bg-gray-100 transition-colors cursor-pointer inline-block"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary-500 rounded-xl opacity-30 transform rotate-12"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;