import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 bg-background text-primary"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card p-8 rounded-2xl border border-gray-800 leading-relaxed text-secondary"
        >
          <p>
            I’m a Software Engineer focused on building backend systems,
            integrations, and automation workflows that solve real-world
            operational problems.
          </p>

          <p className="mt-4">
            My experience includes working extensively with ServiceNow,
            designing integrations (like Jira sync and CyberArk credential
            systems), and building scalable solutions that improve efficiency
            and reliability.
          </p>

          <p className="mt-4">
            I approach problems by breaking them into structured components,
            identifying constraints, and designing solutions that are both
            practical and scalable.
          </p>

          <p className="mt-4">
            Currently, I’m strengthening my foundations in Data Structures,
            System Design, and core Computer Science concepts while building
            projects that reflect real engineering challenges.
          </p>
        </motion.div>

        {/* Timeline / Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-card p-6 rounded-xl border border-gray-800">
            <h3 className="text-accent font-semibold">Experience</h3>
            <p className="text-secondary mt-2 text-sm">
              ServiceNow Development, Integrations, Automation
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-gray-800">
            <h3 className="text-accent font-semibold">Certifications</h3>
            <p className="text-secondary mt-2 text-sm">
              CSA, CIS-ITSM
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-gray-800">
            <h3 className="text-accent font-semibold">Focus</h3>
            <p className="text-secondary mt-2 text-sm">
              Backend Systems, Problem Solving, Scalable Design
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;