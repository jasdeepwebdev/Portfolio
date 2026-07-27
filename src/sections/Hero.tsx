import { Suspense, useEffect, useRef, useState } from 'react';
import HeroScene from '../canvas/HeroScene';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Download, ChevronRight, Mail } from 'lucide-react';
import resumePdf from '../assets/Jasdeep Resume.pdf';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded && textRef.current) {
      const chars = textRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }
  }, [isLoaded]);

  const title = "Jasdeep Singh".split("");

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-[#050816]" />}>
        <HeroScene onLoaded={() => setIsLoaded(true)} />
      </Suspense>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 font-medium tracking-widest uppercase mb-4"
        >
          Hi, I'm
        </motion.p>

        <h1 
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight flex space-x-[0.2em]"
          style={{ perspective: '1000px' }}
        >
          {title.map((char, index) => (
            <span key={index} className="char inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-2xl"
        >
          <span className="text-purple-400 font-medium">Full Stack Developer</span> building scalable web experiences.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
            <ChevronRight className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
          </button>
          
          <a href={resumePdf} download="Jasdeep Resume.pdf" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Download Resume</span>
          </a>
          
          <a href="mailto:jasdeepsinghop@gmail.com" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Particles / Elements can be added here or in Canvas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-gray-400 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
