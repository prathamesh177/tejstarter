import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I joined TEJSTARTER during college. Today, I lead a startup with 10+ employees!",
    author: "Rutuja",
    position: "Student Entrepreneur",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Our students got real industry experience and placement offers. TEJSTARTER's model is unique.",
    author: "Prof. Kulkarni",
    position: "Principal, Partner College",
    image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The mentorship and resources provided by TEJSTARTER helped me transform my idea into a viable business.",
    author: "Aditya",
    position: "Tech Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 bg-accent-100 rounded-lg mb-4">
            <Quote className="h-8 w-8 text-accent-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hear from the students, educators, and entrepreneurs who have experienced 
            the transformative power of the TEJSTARTER ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
                <div className="bg-white p-6">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-accent-500" />
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md transition-colors">
              Join TEJSTARTER Today
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium rounded-lg shadow-md transition-colors">
              Read More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;