import { motion } from 'framer-motion';
import { MonitorSmartphone, Server, Database, Code2, Rocket, Wrench } from 'lucide-react';

const servicesData = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive, pixel-perfect, and highly interactive user interfaces using React, Vue, and modern CSS frameworks.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Backend Development',
    description: 'Building robust, scalable server-side applications and RESTful APIs using Node.js, Express, and Python.',
    icon: Server,
  },
  {
    title: 'Database Design',
    description: 'Designing efficient schemas and managing relational (PostgreSQL) and NoSQL (MongoDB) databases.',
    icon: Database,
  },
  {
    title: 'Full Stack Solutions',
    description: 'Delivering end-to-end web applications with seamless integration between frontend and backend systems.',
    icon: Code2,
  },
  {
    title: 'Deployment & DevOps',
    description: 'Containerizing applications with Docker and deploying them using modern CI/CD pipelines to AWS or Vercel.',
    icon: Rocket,
  },
  {
    title: 'Maintenance & Optimization',
    description: 'Improving performance, SEO, and accessibility of existing applications for maximum impact.',
    icon: Wrench,
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-[#050816] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm text-blue-400 uppercase tracking-widest mb-4 font-semibold">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">My Services</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Providing comprehensive technical solutions tailored to meet your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full bg-[#0a0a0a] rounded-[calc(1.5rem-1px)] p-8">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
