import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured scalable e-commerce platform built with React, Node.js, and PostgreSQL. Features real-time inventory, payment gateway integration, and an admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'A modern analytics dashboard leveraging AI to provide predictive insights. Built with Next.js, Three.js for data visualization, and Python for the machine learning backend.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Three.js', 'Python', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Web3 NFT Marketplace',
    description: 'Decentralized application for minting and trading NFTs. Smart contracts written in Solidity and deployed on the Ethereum blockchain.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80',
    tags: ['Solidity', 'Web3.js', 'React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-[2rem] bg-white/5 border border-white/10 p-4 md:p-6 backdrop-blur-sm cursor-pointer"
      >
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div 
          className="relative rounded-2xl overflow-hidden aspect-video mb-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div style={{ transform: "translateZ(40px)" }}>
          <h4 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
          <p className="text-gray-400 text-sm md:text-base line-clamp-3 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={project.liveUrl} 
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
            <a 
              href={project.githubUrl} 
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              <FaGithub size={16} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 px-6 bg-[#050816] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm text-cyan-400 uppercase tracking-widest mb-4 font-semibold">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work, showcasing my skills in frontend architecture, backend development, and UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
