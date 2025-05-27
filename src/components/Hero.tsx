import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-16 lg:pt-0 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 opacity-95"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary-500/10 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary-500/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-32 h-32 rounded-full bg-accent-500/10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Launch Your Ideas. 
              <span className="text-accent-400">Build the Future.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-0 text-lg md:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              TEJSTARTER is a powerful launchpad where students, professionals, and entrepreneurs come together to innovate, collaborate, and succeed.
            </motion.p>
            
            <motion.div 
              className="mt-0 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 cursor-pointer"
              >
                Join TEJSTARTER
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-primary-700 font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">
                Start a Project
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 lg:p-8">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-800">Join Our Community</h3>
                  <p className="mt-2 text-slate-600">Connect with innovators, entrepreneurs, and creators to bring your ideas to life.</p>
                  <div className="mt-4 flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-white text-xs font-bold ring-1 ring-white">
                        <span className='sr-only'>User {i}</span>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-accent-500 flex items-center justify-center text-white text-sm font-bold ring-1 ring-white">
                      +50
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent-500/20 rounded-xl transform rotate-12"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary-600/20 rounded-xl transform -rotate-12"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;