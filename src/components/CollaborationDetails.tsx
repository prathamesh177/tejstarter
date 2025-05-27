import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Rocket, CheckCircle2, Briefcase, School } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { Link } from 'react-scroll';

interface PartnerEntry {
  name: string;
  location?: string;
  website?: string;
}

const partnerCompanies: PartnerEntry[] = [
  { name: "Ydcoders IT SOLUTIONS", location: "Kavathe Mahankal, Sangli", website: "https://ydcoders.com" },
  { name: "Reevasoft Engineers", location: "Pune", website: "https://reevasoftengineers.com" },
  { name: "Shivkrushiraj Agri Research and Development Producer Company", location: "Kavathe Mahankal, Sangli", website: "https://shivkrushiraj.com" },
  { name: "Dcpsnps Employees Foundation", website: "https://dcpsnps.org" },
  { name: "Dinnch", location: "Sangli", website: "https://dinnch.com" },
  { name: "Imagine360tour", location: "Pune", website: "https://imagine360tour.com" },
];

const partnerColleges: PartnerEntry[] = [
  { name: "Shivganga Charitable Trust, Sangli’s Vishveshwarya Technical Campus Faculty of Degree & Diploma Engineering, Patgaon, Miraj. An ISO 9001-2008 Certified Institute", website: "https://shivgangavtc.org" },
  { name: "Shikshan Prasarak Sanstha's Padmabhushan Vasantraodada Patil Mahavidyalaya, Kavathe Mahankal, Sangli (Affiliated to Shivaji University, Kolhapur)", website: "https://www.pvpkm.org" },
  { name: "Sanjay Bhokare Group of Institutes, Miraj", website: "https://www.sbgimiraj.org" },
  { name: "Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon", website: "https://www.pvpitsangli.edu.in" },
  { name: "Government Polytechnic, Miraj", website: "https://gpmiraj.ac.in" },
  { name: "Government Residence Women Polytechnic, Tasgaon", website: "https://www.grwptasgaon.ac.in" },
  { name: "शासकीय औद्योगिक प्रशिक्षण संस्था, कवठेमहाकाळ, जि: सांगली (ITI College)" },
  { name: "शासकीय औद्योगिक प्रशिक्षण संस्था, तासगाव, जि: सांगली (ITI College)" },
];

const collaborationTypes = [
  {
    icon: <Building2 className="h-6 w-6 text-primary-600" />,
    title: "Industry Partners",
    description: "Connect with leading companies for real-world projects and placement opportunities.",
    benefits: [
      "Access to industry expertise",
      "Live project experience",
      "Placement opportunities",
      "Professional network building"
    ]
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-secondary-600" />,
    title: "Educational Institutions",
    description: "Partner with colleges and universities to enhance student learning and career prospects.",
    benefits: [
      "Practical skill development",
      "Industry exposure",
      "Entrepreneurship guidance",
      "Research collaboration"
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-accent-600" />,
    title: "Startup Ecosystem",
    description: "Join a vibrant community of innovators, mentors, and entrepreneurs.",
    benefits: [
      "Mentorship programs",
      "Resource sharing",
      "Networking events",
      "Funding opportunities"
    ]
  }
];

const CollaborationDetails: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-2 bg-primary-100 rounded-lg mb-4">
            <Rocket className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Collaboration Opportunities
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join our growing ecosystem of partners and be part of the innovation journey. 
            We offer multiple collaboration pathways tailored to different organizational needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collaborationTypes.map((type, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Companies Section */}
        <motion.div 
          className="my-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block p-3 bg-green-100 rounded-xl mb-4">
              <Briefcase className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partner Companies</h2>
            <p className="text-lg text-slate-600">
              We are proud to collaborate with a diverse range of companies, driving innovation and creating opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {company.website ? (
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary-700 hover:text-primary-800 hover:underline break-words">
                    {company.name}
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold text-gray-800 break-words">{company.name}</h3>
                )}
                {company.location && <p className="text-sm text-slate-500 mt-1">{company.location}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Colleges Section */}
        <motion.div 
          className="my-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block p-3 bg-purple-100 rounded-xl mb-4">
              <School className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Esteemed Partner Institutions</h2>
            <p className="text-lg text-slate-600">
              Collaborating with leading educational institutions to foster talent and bridge academia with industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerColleges.map((college, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div>
                  {college.website ? (
                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary-700 hover:text-primary-800 hover:underline break-words">
                      {college.name}
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-800 break-words">{college.name}</h3>
                  )}
                  {college.location && <p className="text-sm text-slate-500 mt-1">{college.location}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-primary-900 text-white rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-primary-100 mb-6">
                Join our network of industry leaders, educational institutions, and innovators. 
                Let's create meaningful impact together.
              </p>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="px-6 py-3 bg-white text-primary-900 font-medium rounded-lg hover:bg-gray-100 transition-colors cursor-pointer inline-block"
              >
                Start Collaboration
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber to={100} plus={true} />
                </div>
                <div className="text-primary-100">Partner Institutions</div>
              </div>
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber to={50} plus={true} />
                </div>
                <div className="text-primary-100">Industry Partners</div>
              </div>
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber to={1000} plus={true} />
                </div>
                <div className="text-primary-100">Students Impacted</div>
              </div>
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber to={25} plus={true} />
                </div>
                <div className="text-primary-100">Startup Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationDetails;