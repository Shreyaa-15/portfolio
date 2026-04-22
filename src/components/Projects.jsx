import { motion } from "framer-motion";
import { useState } from "react";

// 👉 Import images properly
import judgeImg from "../assets/judge.png";
import jiraImg from "../assets/jira.png";
import cyberarkImg from "../assets/cyberark.png";

const projects = [
  {
    title: "Distributed Code Judge System",
    image: judgeImg,
    problem: "Running user-submitted code securely and at scale is complex.",
    solution:
      "Built a distributed system using Docker containers to safely execute code with isolation.",
    details:
      "Implemented containerized execution, queue-based processing, timeout handling, and resource limits (CPU/memory).",
    tech: ["Docker", "Node.js", "Queues", "REST APIs"],
    impact:
      "Simulates real-world systems like LeetCode with secure and scalable execution.",
    github: "https://github.com/Shreyaa-15", // update repo link if needed
  },
  {
    title: "ServiceNow ↔ Jira Integration",
    image: jiraImg,
    problem:
      "Manual tracking between systems caused delays and inconsistencies.",
    solution:
      "Developed a bi-directional sync using REST APIs and event-based updates.",
    details:
      "Handled data mapping, retries, and conflict resolution between both platforms.",
    tech: ["ServiceNow", "REST APIs", "Jira"],
    impact:
      "Reduced manual effort and improved cross-team visibility.",
    github: "https://github.com/Shreyaa-15",
  },
  {
    title: "CyberArk Credential Integration",
    image: cyberarkImg,
    problem:
      "Secure credential access during discovery processes was missing.",
    solution:
      "Integrated external credential storage using CyberArk APIs.",
    details:
      "Built secure authentication flows and automated credential retrieval pipelines.",
    tech: ["ServiceNow", "CyberArk", "Authentication"],
    impact:
      "Enabled secure, automated credential retrieval.",
    github: "https://github.com/Shreyaa-15",
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

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-2xl border border-gray-800 
                hover:border-accent hover:shadow-[0_0_20px_rgba(196,164,132,0.2)] 
                transition duration-300 cursor-pointer"
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
              >
                {/* ✅ IMAGE GOES HERE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 opacity-80 hover:opacity-100 transition"
                />

                {/* Title */}
                <h3 className="text-xl font-semibold text-accent">
                  {project.title}
                </h3>

                {/* Problem */}
                <p className="mt-3 text-secondary">
                  <span className="text-primary font-medium">Problem: </span>
                  {project.problem}
                </p>

                {/* Solution */}
                <p className="mt-2 text-secondary">
                  <span className="text-primary font-medium">Solution: </span>
                  {project.solution}
                </p>

                {/* Expandable Engineering Details */}
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

                {/* Impact */}
                <p className="mt-2 text-secondary">
                  <span className="text-primary font-medium">Impact: </span>
                  {project.impact}
                </p>

                {/* Tech Stack */}
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

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-4 text-sm text-accent hover:underline"
                >
                  View Code →
                </a>

                {/* Hint */}
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