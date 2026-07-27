import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    year: '2021',
    title: 'Started B.Tech',
    company: 'Baba Banda Singh Bahadur Engineering College',
    location: 'Fatehgarh Sahib',
    description: 'Began the journey in computer science and engineering.'
  },
  {
    year: '2025',
    title: 'Graduated B.Tech',
    company: 'BBSBEC',
    location: 'Fatehgarh Sahib',
    description: 'Completed graduation with a strong foundation in software development.'
  },
  {
    year: 'July 1, 2025 - Dec 31, 2025',
    title: 'Full Stack Developer Intern',
    company: 'Interrait',
    location: 'NSEZ, Noida',
    description: 'Worked as an intern developing scalable web applications and enhancing frontend user experiences.'
  },
  {
    year: 'January 2026',
    title: 'Started Freelancing',
    company: 'Self-Employed',
    location: 'Remote',
    description: 'Worked directly with clients to design and develop custom web solutions.'
  },
  {
    year: '2026 - Present',
    title: 'Full Stack Developer',
    company: 'WePromote',
    location: '8B Mohali',
    description: 'Building robust digital platforms and working on cutting-edge full stack technologies.'
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-32 px-6 bg-[#050816] relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm text-purple-400 uppercase tracking-widest mb-4 font-semibold">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Timeline</h3>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Line Progress */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal group">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050816] border-2 border-purple-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:bg-purple-500 group-hover:scale-150 transition-all duration-300"
                  />

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-5/12 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                  >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-4">
                        {item.year}
                      </span>
                      <h4 className="text-2xl font-bold mb-1 text-white">{item.title}</h4>
                      <h5 className="text-cyan-400 font-medium mb-1">{item.company}</h5>
                      <span className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {item.location}
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
