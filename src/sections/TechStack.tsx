import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss, SiGreensock, SiFramer, SiKubernetes, SiThreedotjs, SiJsonwebtokens
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const techData = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'REST APIs', icon: TbApi, color: '#FF6C37' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' }
];

const learningData = [
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', progress: 60 },
  { name: 'AWS', icon: FaAws, color: '#FF9900', progress: 40 }
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-square rounded-2xl cursor-pointer group"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
        style={{ transform: "translateZ(50px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function ProgressRing({ radius, stroke, progress, color }: { radius: number, stroke: number, progress: number, color: string }) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
      <circle
        stroke="rgba(255,255,255,0.1)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#050816] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm text-cyan-400 uppercase tracking-widest mb-4 font-semibold">Skills & Tools</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">My Tech Stack</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of technologies I use to build robust, scalable, and stunning web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techData.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{ perspective: 1000 }}
            >
              <TiltCard>
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <tech.icon 
                    size={48} 
                    color={tech.color} 
                    className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Currently Learning</h3>
            <p className="text-gray-400">Expanding my horizons with cloud and orchestration.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {learningData.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center relative group"
              >
                <div className="relative flex items-center justify-center w-[160px] h-[160px]">
                  <div className="absolute inset-0">
                    <ProgressRing radius={80} stroke={8} progress={item.progress} color={item.color} />
                  </div>
                  <item.icon size={50} color={item.color} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                  <span className="text-cyan-400 font-medium">{item.progress}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
