import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Users, 
  GraduationCap, 
  Brain, 
  Globe,
  Briefcase,
} from 'lucide-react';

const features = [
  {
    icon: <RefreshCw className="h-6 w-6 text-primary-600" />,
    title: 'Flexible Contribution Model',
    description: 'Choose between payments or equity shares in startups.',
    color: 'bg-primary-100',
  },
  {
    icon: <Users className="h-6 w-6 text-primary-600" />,
    title: 'Collaborative Project System',
    description: 'Work on your own ideas or join others\' projects.',
    color: 'bg-primary-100',
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-accent-600" />,
    title: 'Student-Focused Programs',
    description: 'Build, learn, and grow while studying.',
    color: 'bg-accent-100',
  },
  {
    icon: <Brain className="h-6 w-6 text-primary-600" />,
    title: 'Expert Mentorship',
    description: 'Guidance from industry professionals and startup founders.',
    color: 'bg-primary-100',
  },
  {
    icon: <Globe className="h-6 w-6 text-primary-600" />,
    title: 'Global Vision',
    description: 'Collaborations in India, Ghana, Nigeria, Uganda and expanding.',
    color: 'bg-primary-100',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary-600" />,
    title: 'Entrepreneurship',
    description: 'Support to start and grow your own profitable ventures.',
    color: 'bg-primary-100',
  },
];

const UniqueFeatures: React.FC = () => {
  return (
    <section id="features\" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 bg-accent-100 rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Us Unique?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            TEJSTARTER stands apart through our innovative approach to collaboration, education, and entrepreneurship.
            Our unique features create opportunities that traditional platforms simply can't offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-8">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;