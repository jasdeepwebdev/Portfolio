import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  
  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  const InputField = ({ label, name, type = 'text', isTextArea = false }: any) => {
    const isFocused = focusedInput === name;
    
    return (
      <div className="relative mb-8">
        <motion.label 
          initial={false}
          animate={{
            y: isFocused ? -24 : 0,
            scale: isFocused ? 0.8 : 1,
            color: isFocused ? '#06b6d4' : '#9ca3af'
          }}
          className="absolute left-4 top-4 transform origin-left pointer-events-none text-gray-400 font-medium"
        >
          {label}
        </motion.label>
        
        {isTextArea ? (
          <textarea
            name={name}
            onFocus={() => handleFocus(name)}
            onBlur={handleBlur}
            rows={5}
            className="w-full bg-white/5 border-b-2 border-white/10 rounded-t-xl px-4 pt-8 pb-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors resize-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            onFocus={() => handleFocus(name)}
            onBlur={handleBlur}
            className="w-full bg-white/5 border-b-2 border-white/10 rounded-t-xl px-4 pt-8 pb-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors"
          />
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#050816] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-sm text-purple-400 uppercase tracking-widest mb-4 font-semibold">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">awesome</span>.</h3>
            <p className="text-gray-400 text-lg mb-12">
              Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:jasdeepsinghop@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">jasdeepsinghop@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium">Mohali, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: "https://github.com/jasdeepwebdev" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/jasdeep-singh-4a63ba423" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target={href !== "#" ? "_blank" : undefined} rel={href !== "#" ? "noopener noreferrer" : undefined} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <InputField label="Your Name" name="name" />
                  <InputField label="Your Email" name="email" type="email" />
                </div>
                
                <InputField label="Subject" name="subject" />
                <InputField label="Message" name="message" isTextArea={true} />

                <button className="group relative w-full py-5 bg-white text-black font-bold rounded-xl overflow-hidden flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-300 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Send Message</span>
                  <Send className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
