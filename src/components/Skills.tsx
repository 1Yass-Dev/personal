import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import { Figma, FileCode2, FileCode, Braces, Github, Cpu, GitBranch, Database, Receipt, Atom} from 'lucide-react';
import SkillCard from './SkillCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Figma', icon: <Figma size={24} /> },
    { name: 'HTML', icon: <FileCode2 size={24} /> },
    { name: 'CSS', icon: <FileCode size={24} /> },
    { name: 'JavaScript', icon: <Braces size={24} /> },
    { name: 'GitHub', icon: <Github size={24} /> },
    { name: 'Python', icon: <Cpu size={24} /> },
    { name: 'Git', icon: <GitBranch size={24} /> },
    { name: 'SQL', icon: <Database size={24} /> },
    { name: 'PHP', icon: <Receipt size={24} /> },
    { name: 'React', icon: <Atom size={24} /> }
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>
      
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
            Skills
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with and am proficient in.
          </p>
        </motion.div>

        {/* Mobile Skills - Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Grid]}
            spaceBetween={20}
            slidesPerView={2}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-[320px]"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={skill.name} className="h-auto">
                <SkillCard name={skill.name} icon={skill.icon} delay={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Skills - Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                delay={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;