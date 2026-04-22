const projects = [
  {
    title: "Distributed Code Execution Engine",
    tag: "Cold Brew — Systems",
    desc: "A mini LeetCode judge built from scratch.",
    details:
      "Multi-language execution in Docker, Kafka-based job queue, real-time streaming, rate limiting, and plagiarism detection.",
    tech: ["Docker", "Kafka", "Python"],
  },
  {
    title: "AI-Powered Learning System",
    tag: "Pour Over — AI",
    desc: "Adaptive intelligence personalized to the learner.",
    details:
      "LLM-based learning plans, spaced repetition, embeddings-driven insights, and automated test generation.",
    tech: ["LLM APIs", "React", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-28">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Today's Specials
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-12">
          Five <span className="italic text-gold">signature brews</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-[#c8923a30] p-8 rounded-xl bg-[#1a0a00]/70 backdrop-blur-lg hover:scale-[1.02] transition"
            >
              <p className="text-xs text-gold mb-3">{p.tag}</p>

              <h3 className="text-2xl font-serif text-cream mb-4">
                {p.title}
              </h3>

              <p className="text-gold text-sm mb-3 italic">
                {p.desc}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {p.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 border border-[#c8923a30] text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;