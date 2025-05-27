import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Briefcase as BriefcaseBusiness } from 'lucide-react';

const Students: React.FC = () => {
  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Practical Education",
      description: "Hands-on learning experience working on real projects"
    },
    {
      icon: <BriefcaseBusiness className="h-6 w-6 text-white" />,
      title: "Placement Opportunities",
      description: "Direct connections to industry partners and job opportunities"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Entrepreneurship Guidance",
      description: "Support to start and grow your own profitable ventures"
    }
  ];

  return (
    <section id="students" className="py-20 bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-2 bg-primary-700 rounded-lg mb-4">
              <GraduationCap className="h-8 w-8 text-primary-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Helping Students with Placements & Entrepreneurship
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              TEJSTARTER works closely with colleges to provide practical, hands-on education, 
              help students get placement opportunities, and guide them to start their own profitable ventures.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-600 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                    <p className="text-primary-100">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 border-l-4 border-accent-500 bg-primary-700 rounded-r-lg">
              <p className="text-lg italic">
                "We don't just teach innovation. We build it with students."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Success metrics cards */}
              <div className="absolute -top-6 -right-6 md:top-6 md:right-6 bg-white text-gray-900 rounded-xl shadow-lg p-4 z-20 max-w-[180px]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">10+</div>
                  <div className="text-sm font-medium mt-1">College Partners</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:bottom-6 md:left-6 bg-white text-gray-900 rounded-xl shadow-lg p-4 z-20 max-w-[180px]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600">500+</div>
                  <div className="text-sm font-medium mt-1">Student Entrepreneurs</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-600 rounded-full opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-500 rounded-full opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Students;