import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050816] min-h-screen text-white font-sans selection:bg-cyan-500/30">
      <Hero />
      <About />
      <TechStack />
      <Timeline />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
