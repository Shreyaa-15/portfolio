import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ p, i }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      viewport={{ once: true }}

      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        setPos({ x, y });

        setTilt({
          x: ((y - midY) / midY) * -12,
          y: ((x - midX) / midX) * 12,
        });
      }}

      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
      }}

      style={{
        transform: `
          perspective(900px)
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
          scale(1.03)
        `,
        transformStyle: "preserve-3d",
      }}

      className="relative border border-[#c8923a20] p-8 rounded-xl bg-[#1a0a00]/70 backdrop-blur-lg 
      hover:border-[#c8923a60] transition duration-300 
      min-h-[420px] flex flex-col overflow-hidden group 
      transform-gpu will-change-transform"
    >

      {/* 🔥 Mouse Spotlight Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px at ${pos.x}px ${pos.y}px, rgba(200,146,58,0.18), transparent 60%)`,
        }}
      />

      {/* 🌈 Edge Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 blur-xl" />
      </div>

      {/* CONTENT WITH DEPTH */}
      <div style={{ transform: "translateZ(40px)" }}>

        {/* INDEX */}
        <span className="absolute top-6 right-6 text-xs text-gray-500 tracking-widest">
          {p.id} / 07
        </span>

        {/* TAG */}
        <p className="text-[10px] tracking-[0.25em] text-gold uppercase mb-4">
          {p.tag}
        </p>

        {/* TITLE */}
        <h3 className="text-2xl font-serif text-cream mb-2">
          {p.title}
        </h3>

        {/* TAGLINE */}
        <p className="text-gold text-sm italic mb-4">
          {p.tagline}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {p.desc}
        </p>

        {/* HIGHLIGHTS */}
        <div className="space-y-2 mb-6">
          {p.highlights.map((h, idx) => (
            <p key={idx} className="text-xs text-[#c8923a90] flex">
              <span className="mr-2">→</span> {h}
            </p>
          ))}
        </div>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-1 border border-[#c8923a30] text-gray-300 tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-[#c8923a20]">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest text-gold hover:text-amber-400 transition"
          >
            VIEW ON GITHUB →
          </a>

          <span className="text-[10px] text-gray-500 tracking-widest">
            {p.stack}
          </span>
        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;