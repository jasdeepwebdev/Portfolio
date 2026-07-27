import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const display = useTransform(spring, (current) => Math.floor(current));

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        <motion.span>{display}</motion.span>+
      </div>
      <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-32 px-6 bg-[#050816] relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12"
          >
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Image Placeholder */}
              <div className="w-full h-full rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12"
          >
            <h2 className="text-sm text-cyan-400 uppercase tracking-widest mb-4 font-semibold">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Crafting Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experiences</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              I am a Full Stack Developer passionate about creating scalable web applications with exceptional user experiences. 
              I blend technical expertise with a keen eye for design to build products that are not only performant and robust, 
              but also beautiful and intuitive.
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Counter value={3} label="Years Exp." />
              <Counter value={40} label="Projects" />
              <Counter value={15} label="Technologies" />
              <Counter value={20} label="Clients" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
