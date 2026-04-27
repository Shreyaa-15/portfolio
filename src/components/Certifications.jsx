import { motion } from "framer-motion";

const certifications = [
  {
    title: "ServiceNow Certified Implementation Specialist — ITSM",
    issuer: "ServiceNow",
    date: "Mar 2024",
    id: "25143046",
    tags: ["ITSM", "ServiceNow", "Implementation"],
  },
  {
    title: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    date: "Feb 2024",
    id: "25053922",
    tags: ["System Administration", "ServiceNow"],
  },
  {
    title: "The Complete ServiceNow Developer Course",
    issuer: "Udemy",
    date: "Jul 2024",
    id: "UC-15ce0850-5f76-4fbc-b48f-416c2456ec96",
    tags: ["ServiceNow"],
  },
  {
    title: "The Complete ServiceNow System Administrator Course",
    issuer: "Udemy",
    date: "Jul 2024",
    id: "UC-496b960-72ca-4581-af49-606217261176",
    tags: ["ServiceNow"],
  },
  {
    title: "Mathematics for Machine Learning",
    issuer: "Coursera",
    date: "Jan 2023",
    tags: ["PCA", "Eigenvalues", "ML"],
  },
  {
    title: "Accelerated Computer Science Fundamentals",
    issuer: "Coursera",
    date: "Jan 2023",
    tags: ["OOP", "Trees", "Algorithms"],
  },
  {
    title: "Object-Oriented Data Structures in C++",
    issuer: "Coursera",
    date: "Jan 2023",
    tags: ["C++", "OOP"],
  },
  {
    title: "Mathematics for Machine Learning: PCA",
    issuer: "Coursera",
    date: "Jan 2023",
    tags: ["Dimensionality Reduction", "Python"],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 md:px-20 py-28">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          The Wall
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-12">
          Earned & <span className="italic text-gold">certified</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative border border-[#c8923a20] p-8 rounded-xl bg-[#1a0a00]/70 backdrop-blur-lg 
              hover:scale-[1.02] hover:border-[#c8923a60] transition duration-300 
              min-h-[260px] flex flex-col group overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 blur-xl" />
              </div>

              {/* Issuer + Date */}
              <p className="text-[10px] tracking-[0.25em] text-gold uppercase mb-4">
                {c.issuer} — {c.date}
              </p>

              {/* Title */}
              <h3 className="text-xl font-serif text-cream mb-3">
                {c.title}
              </h3>

              {/* Credential ID */}
              {c.id && (
                <p className="text-xs text-gray-500 mb-4">
                  ID: {c.id}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {c.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-1 border border-[#c8923a30] text-gray-300 tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;