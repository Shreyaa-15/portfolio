import { motion } from "framer-motion";

const experiences = [
  {
    date: "Nov 2025 — Present",
    role: "Software Engineer",
    company: "Rewa Infotech LLC",
    type: "Full-time · Remote",
    desc: "Building scalable backend systems and enterprise workflows using ServiceNow. Focus on automation, integrations, and API-first architecture.",
    stack: "ServiceNow · Backend Systems",
  },
  {
    date: "Dec 2024 — Nov 2025",
    role: "Data Engineer",
    company: "VOIS",
    type: "Pune, India",
    desc: "Worked on data pipelines, ETL systems, and analytics infrastructure using Python and SQL.",
    stack: "Python · SQL · Data Pipelines",
  },
  {
    date: "Jul 2023 — Dec 2023",
    role: "Data Science Intern",
    company: "Tata Group",
    type: "Hybrid",
    desc: "Performed statistical analysis and built ML-driven insights for real-world datasets.",
    stack: "Python · Machine Learning",
  },
  {
    date: "Jul 2023 — Dec 2023",
    role: "Software Engineer Intern",
    company: "Symphony Technologies",
    type: "Remote",
    desc: "Built ML pipelines using Apache Spark and CNN models for data-driven systems.",
    stack: "Spark · Deep Learning",
  },
  {
    date: "Apr 2022 — Jul 2022",
    role: "Vice President",
    company: "MIT-WPU LaunchPad",
    type: "Leadership",
    desc: "Led student initiatives, technical events, and community programs.",
    stack: "Leadership · Communication",
  },
  {
    date: "Jan 2021 — Apr 2022",
    role: "Technical Team Member",
    company: "Cosmos MIT-WPU",
    type: "Part-time",
    desc: "Worked on technical projects and strengthened problem-solving & algorithmic thinking.",
    stack: "Algorithms · Problem Solving",
  },
  {
    date: "May 2021 — Aug 2021",
    role: "Web Development Intern",
    company: "Rewa Infotech LLC",
    type: "Internship",
    desc: "Built web applications and worked with databases and frontend systems.",
    stack: "JavaScript · Databases",
  },
];

const education = {
  date: "2020 — 2024",
  degree: "B.Tech in Computer Science",
  college: "MIT World Peace University (MIT-WPU)",
  desc: "Built a strong foundation in computer science fundamentals, data structures, machine learning, and system design while actively contributing to technical communities and projects.",
  stack: "Data Structures · ML · Systems",
};

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-28 relative">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Origins & Terroir
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
            Where the beans <span className="italic text-gold">come from</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Great systems come from strong foundations. Every role, every challenge,
            every line of code has shaped the engineer I am today.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-[#c8923a30] pl-8 space-y-12">

          {/* EXPERIENCE */}
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* dot */}
              <span className="absolute -left-[38px] top-1 w-2 h-2 bg-gold rounded-full opacity-70 group-hover:opacity-100" />

              <p className="text-xs text-gold mb-2">{exp.date}</p>

              <h3 className="text-xl md:text-2xl font-serif text-cream">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-400 mb-2">
                {exp.company} · {exp.type}
              </p>

              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                {exp.desc}
              </p>

              <span className="text-[11px] text-gray-500 tracking-widest">
                {exp.stack}
              </span>
            </motion.div>
          ))}

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="relative pt-4 group"
          >
            <span className="absolute -left-[38px] top-1 w-2 h-2 bg-gold rounded-full opacity-70" />

            <p className="text-xs text-gold mb-2">{education.date}</p>

            <h3 className="text-xl md:text-2xl font-serif text-cream">
              {education.degree}
            </h3>

            <p className="text-sm text-gray-400 mb-2">
              {education.college}
            </p>

            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
              {education.desc}
            </p>

            <span className="text-[11px] text-gray-500 tracking-widest">
              {education.stack}
            </span>
          </motion.div>

          {/* SIDE PROJECTS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <p className="text-xs text-gold mb-2">Side Projects</p>

            <h3 className="text-xl md:text-2xl font-serif text-cream">
              Systems + Backend Engineering
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Focused on distributed systems, real-time processing, and scalable architecture —
              building production-grade systems beyond the classroom.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;