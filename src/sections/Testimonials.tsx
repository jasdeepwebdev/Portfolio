import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager at TechCorp',
    content: 'Jasdeep is an exceptional developer. He transformed our vague requirements into a stunning, high-performing web application. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'CEO at StartupX',
    content: 'Working with him was a breeze. His attention to detail and ability to craft beautiful animations sets him apart from other developers.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Emily Davis',
    role: 'Creative Director',
    content: 'The 3D elements and smooth scrolling experiences he built for our campaign site blew our clients away. A true professional.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: 'David Wilson',
    role: 'Lead Designer',
    content: 'He perfectly translated our complex Figma designs into pixel-perfect code. His understanding of UI/UX is outstanding.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  // Duplicate array to create seamless loop
  const marqueeItems = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-sm text-purple-400 uppercase tracking-widest mb-4 font-semibold">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050816] via-transparent to-[#050816] w-full" />
        
        <motion.div
          animate={{ x: [0, -100 * testimonialsData.length + "vw"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
          className="flex gap-8 px-4 w-max group-hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
