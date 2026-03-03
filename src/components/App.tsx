import { useEffect, useState, useRef } from "react";
import CarCanvas from "./CarCanvas";
import { motion, useScroll, useTransform } from "framer-motion";
/** @jsxImportSource @emotion/react */


const App = () => {
  const [scrollFactor, setScrollFactor] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Progress indicator values
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const factor = Math.min(scrollY / maxScroll, 1);
      setScrollFactor(factor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate dynamic section colors based on scroll position
  const getSectionColor = (index: number) => {
    const hue = 220 + (index * 20) % 140; // Blue to purple range
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Canvas fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <CarCanvas scrollFactor={scrollFactor} />
        
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay"></div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-60 pointer-events-none"></div>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ 
          width: progressWidth,
          opacity: progressOpacity
        }}
      />

      {/* Header with fade-in effect */}
      <motion.div 
        className="fixed top-4 left-0 w-full z-40 flex justify-between items-center px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-xl font-light tracking-wider">PORSCHE<span className="text-purple-400">EVOLUTION</span></div>
        <div className="flex space-x-6 text-sm">
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">About</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Gallery</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Contact</span>
        </div>
      </motion.div>

      {/* Scrollable text content */}
      <div className="relative z-10 pt-[100vh] pb-32 max-w-6xl mx-auto">
        {/* Intro section with special styling */}
        <motion.section 
          className="h-screen flex flex-col justify-center items-center text-center px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
            Automotive Evolution
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Scroll to experience a transformation in automotive design.
            Watch as classic forms disintegrate and modern lines emerge.
          </p>
        </motion.section>

        {/* Content sections with staggered animations */}
        {[1, 2, 3, 4, 5, 6].map((_item, index) => {
          return (
            <motion.section
              key={index}
              className="min-h-[80vh] flex flex-col justify-center px-12 py-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-2xl mx-auto">
                <div
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${getSectionColor(index)}20` }}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: getSectionColor(index) }}
                  ></div>
                </div>

                <h2 className="text-4xl font-bold mb-8" style={{ color: getSectionColor(index) }}>
                  {index % 2 === 0 ? "Engineering Excellence" : "Design Revolution"}
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {index % 2 === 0 ?
                    "Observe how parts fly off one chassis and realign into another. It's a reverse explosion that reveals craftsmanship behind each icon." :
                    "From classic curves to modern aerodynamics, the transition represents decades of automotive design thinking compressed into a single flowing movement."}
                </p>

                <div className="flex items-center mt-8">
                  <div className="w-12 h-[1px] bg-gray-600"></div>
                  <span className="mx-4 text-sm uppercase tracking-wider text-gray-400">
                    {index + 1}/6
                  </span>
                  <div className="w-12 h-[1px] bg-gray-600"></div>
                </div>
              </div>
            </motion.section>
          );
        })}
        
        {/* Final call to action */}
        <motion.section 
          className="min-h-screen flex flex-col justify-center items-center text-center px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
            Experience Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            From classic elegance to modern performance, our journey through automotive history continues to inspire.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-glow transition-all duration-300">
            Discover More
          </button>
        </motion.section>
      </div>

      {/* Enhanced styling */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default App;