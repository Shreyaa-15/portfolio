import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Distributed Code Judge System",
    problem: "Running user-submitted code securely and at scale is complex.",
    solution:
      "Built a distributed system using Docker containers to safely execute code with isolation.",
    details:
      "Implemented containerized execution, queue-based processing, and resource limits (CPU/memory).",
    tech: ["Docker", "Node.js", "Queue System", "REST APIs"],
    impact:
      "Simulates real-world systems like LeetCode with secure and scalable execution.",
    github: "#",
  },
  {
    title: "ServiceNow ↔ Jira Integration",
    problem:
      "Manual tracking between systems caused delays and inconsistencies.",
    solution:
      "Developed a bi-directional sync using REST APIs and event-based updates.",
    details:
      "Handled data mapping, retry mechanisms, and conflict resolution between platforms.",
    tech: ["ServiceNow", "REST APIs", "Jira Spoke"],
    impact:
      "Reduced manual effort and improved cross-team visibility.",
    github: "#",
  },
  {
    title: "CyberArk Credential Integration",
    problem:
      "Secure credential access during discovery processes was missing.",
    solution:
      "Integrated external credential storage using CyberArk APIs.",
    details:
      "Built secure authentication flows and automated credential retrieval pipelines.",
    tech: ["ServiceNow", "CyberArk", "Authentication"],
    impact:
      "Enabled secure, automated credential retrieval.",
    github: "#",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-background text-primary"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-accent transition cursor-pointer"
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
              >
                <h3 className="text-xl font-semibold text-accent">
                  {project.title}
                </h3>

                <p className="mt-3 text-secondary">
                  <span className="text-primary font-medium">Problem: </span>
                  {project.problem}
                </p>

                <p className="mt-2 text-secondary">
                  <span className="text-primary font-medium">Solution: </span>
                  {project.solution}
                </p>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-secondary"
                  >
                    <span className="text-primary font-medium">
                      Engineering:
                    </span>{" "}
                    {project.details}
                  </motion.div>
                )}

                <p className="mt-2 text-secondary">
                  <span className="text-primary font-medium">Impact: </span>
                  {project.impact}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border border-gray-700 rounded hover:border-accent transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-4 text-sm text-accent hover:underline"
                >
                  View Code →
                </a>

                <p className="text-xs text-gray-500 mt-2">
                  Click to {isOpen ? "collapse" : "expand"}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;