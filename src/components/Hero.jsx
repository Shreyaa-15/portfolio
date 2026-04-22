import CoffeeCup from "./CoffeeCup";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) / 35,
        y: (e.clientY - window.innerHeight / 2) / 35,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-[60%] w-[650px] h-[650px] bg-[#c8923a12] blur-[160px]" />
        <div className="absolute bottom-0 left-[20%] w-[450px] h-[450px] bg-[#c8923a08] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 animate-fadeUp">
            Software Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-black font-serif text-cream leading-tight animate-fadeUp delay-100">
            Shreya<br />Singh
          </h1>

          <p className="italic text-gray-400 mt-4 animate-fadeUp delay-200">
            Crafted code, served strong.
          </p>

          <p className="mt-6 text-sm text-gray-400 max-w-md animate-fadeUp delay-300">
            Like a well-pulled espresso shot — fast, precise, and built with depth.
            I engineer backend systems and integrations that solve real-world problems.
          </p>

<div className="mt-8 flex items-center gap-6 animate-fadeUp delay-300">
  
  <a
    href="#projects"
    className="bg-gold text-black px-6 py-3 text-xs uppercase hover:scale-105 transition"
  >
    View Brews
  </a>

  <a
    href="#contact"
    className="relative text-xs tracking-widest group flex items-center h-[42px]"
  >
    Let’s Talk

    <span className="absolute left-0 bottom-2 w-full h-[1px] bg-gray-600 group-hover:bg-gold transition-all duration-300 origin-left scale-x-75 group-hover:scale-x-100"></span>
  </a>

</div>
        </div>

        {/* RIGHT (BIG FLOATING CUP) */}
        <div
          className="hidden md:flex justify-center items-center relative scale-[1.6] md:scale-[1.8] -mr-10 transition-transform duration-300"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`
          }}
        >
          {/* Glow */}
          <div className="absolute w-[550px] h-[550px] bg-[#c8923a25] blur-[160px] rounded-full"></div>

          <CoffeeCup />
        </div>
      </div>

      {/* FLOATING CODE */}
      <div className="absolute inset-0 pointer-events-none">
        {["O(log n)", "kafka.publish()", "docker run", "redis.set()", "async/await"].map((text, i) => (
          <span
            key={i}
            className="absolute text-[10px] text-gold/20 animate-codeFloat"
            style={{
              left: `${10 + i * 15}%`,
              bottom: `${20 + i * 10}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full animate-floatSlow"
            style={{
              left: `${20 + i * 10}%`,
              bottom: `${10 + i * 8}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* SCROLL */}
      <p className="absolute bottom-6 left-6 text-xs text-gray-500">
        SCROLL ↓
      </p>
    </section>
  );
};

export default Hero;