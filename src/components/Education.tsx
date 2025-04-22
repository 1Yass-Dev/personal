import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationItems = [
    {
      title: 'Baccalaureate in Physical Sciences',
      school: 'Ibnu Lhaitam High School, Sidi-Moumen, Casablanca',
      period: '2022–2023',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'Specialized Technician in Digital Development',
      school: 'INSTITUT SPÉCIALISÉ DE FORMATION DE L\'OFFSHORING CASABLANCA',
      period: '2023–2025',
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-900 opacity-70 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(109,40,217,0.08)_0,_transparent_70%)] -z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 inline-block"
            whileInView={{ 
              backgroundSize: ["100% 0", "100% 100%", "100% 0"] 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ 
              background: "linear-gradient(to right, #8b5cf6, #6d28d9)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 0",
              backgroundPosition: "0 100%",
              color: "white",
              padding: "0 10px"
            }}
          >
            My Education
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my skills and knowledge.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-10">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 relative overflow-hidden"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50
                }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary-700 opacity-10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center text-primary-400 glow-sm">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <div className="flex items-center text-gray-400">
                        <Building size={16} className="mr-2" />
                        <span>{item.school}</span>
                      </div>
                      <div className="hidden sm:block text-gray-500">•</div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400">
                      {index === 0 ? 
                        "Completed with distinction, establishing a strong foundation in mathematical and scientific principles." :
                        "Currently pursuing this program to develop comprehensive skills in web development, programming, and digital solutions."
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;