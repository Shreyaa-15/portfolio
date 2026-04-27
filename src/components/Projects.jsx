import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: "01",
    title: "Distributed Code Execution Engine",
    tag: "Cold Brew — Systems",
    tagline: "A mini LeetCode judge built from scratch.",
    desc: "Multi-language execution inside isolated Docker containers with async job queue, real-time streaming, and plagiarism detection.",
    highlights: [
      "Docker sandbox (secure execution)",
      "Async queue with Redis workers",
      "Real-time execution via WebSockets",
    ],
    tech: ["Docker", "Redis", "FastAPI", "WebSockets"],
    stack: "Python · Docker",
    link: "https://github.com/Shreyaa-15/code-judge",
  },

  {
    id: "02",
    title: "AI-Powered Learning System",
    tag: "Pour Over — AI",
    tagline: "Adaptive intelligence, personalized to the learner.",
    desc: "LLM-powered study plans with spaced repetition, quiz generation, and weakness analysis.",
    highlights: [
      "SM-2 spaced repetition algorithm",
      "Full learning pipeline (quiz → analysis → review)",
      "AI layer decoupled from backend",
    ],
    tech: ["React", "FastAPI", "Gemini", "SQLite"],
    stack: "Python · React",
    link: "https://github.com/Shreyaa-15/ai-learning-system",
  },

  {
    id: "03",
    title: "Semantic Code Search",
    tag: "Chemex — Search",
    tagline: "Search code using meaning, not keywords.",
    desc: "Embedding-based semantic search over large codebases using transformer models.",
    highlights: [
      "Vector embeddings for code understanding",
      "Re-ranking for better search accuracy",
      "FastAPI + vector DB backend",
    ],
    tech: ["Python", "FAISS", "Transformers"],
    stack: "ML · Backend",
    link: "https://github.com/Shreyaa-15/semantic-code-search",
  },

  {
    id: "04",
    title: "Collaborative Document Editor",
    tag: "Batch — Infrastructure",
    tagline: "Real-time collaborative editing system.",
    desc: "Google Docs–like editor with live sync and conflict resolution.",
    highlights: [
      "Operational Transform / CRDT logic",
      "WebSocket real-time sync",
      "Multi-user editing support",
    ],
    tech: ["React", "Node.js", "WebSockets"],
    stack: "Full Stack",
    link: "https://github.com/Shreyaa-15/collab-doc-editor",
  },

  {
    id: "05",
    title: "Music Recommendation System",
    tag: "Espresso — ML",
    tagline: "Personalized music recommendations.",
    desc: "Hybrid recommendation system combining collaborative + content-based filtering.",
    highlights: [
      "User similarity modeling",
      "Feature-based recommendations",
      "Scalable ML pipeline",
    ],
    tech: ["Python", "Pandas", "Scikit-learn"],
    stack: "ML",
    link: "https://github.com/Shreyaa-15/music-recsys",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-28">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          The Menu
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-16 leading-tight">
          Five <span className="italic text-gold">signature brews</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;