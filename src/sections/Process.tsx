import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Activity } from 'lucide-react';

const processData = [
  {
    title: 'Discover',
    description: 'Understanding requirements, analyzing the market, and defining project goals.',
    icon: Search
  },
  {
    title: 'Design',
    description: 'Creating wireframes, UI/UX designs, and interactive prototypes.',
    icon: PenTool
  },
  {
    title: 'Develop',
    description: 'Writing clean, scalable code and building robust frontend and backend architectures.',
    icon: Code
  },
  {
    title: 'Deploy',
    description: 'Setting up servers, configuring CI/CD pipelines, and launching the application.',
    icon: Rocket
  },
  {
    title: 'Maintain',
    description: 'Monitoring performance, fixing bugs, and pushing continuous updates.',
    icon: Activity
  }
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050816]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center w-full z-10 px-6">
          <h2 className="text-sm text-cyan-400 uppercase tracking-widest mb-2 font-semibold">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Process</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-[20vw] pt-32">
          {processData.map((step, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[400px] flex-shrink-0 group"
            >
              <div className="relative">
                <div className="text-8xl font-black text-white/5 absolute -top-16 -left-6 select-none transition-colors duration-500 group-hover:text-cyan-500/10">
                  0{index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-white w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
