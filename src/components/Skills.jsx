import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Backend & Systems",
    skills: ["REST APIs", "System Design Basics", "OOP", "DBMS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Docker", "Git", "ServiceNow", "Jira", "Postman"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Networking"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 bg-background text-primary"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-accent transition"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">
                {section.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-gray-700 rounded-full hover:border-accent transition"
                  >
                    {skill}
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

export default Skills;