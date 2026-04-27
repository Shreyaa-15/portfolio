import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: "01",
    title: "Distributed Code Execution Engine",
    tag: "Cold Brew — Systems",
    tagline: "A mini LeetCode judge built from scratch.",
    desc: "Multi-language execution inside isolated Docker containers with async job queue, real-time streaming, and plagiarism detection.",
    highlights: [
      "Sandboxed every submission in a fresh Docker container with no network access, 128MB RAM cap, CPU limits, read-only filesystem, and non-root execution - the same threat model as production judges",

      "Designed an async job queue with Redis + RQ; worker pool scales horizontally - docker compose up --scale worker=5 adds five concurrent executors with zero config changes",

      "Streamed real-time stdout/stderr to the browser via WebSockets, eliminating the need for polling and reducing perceived latency to near-zero",

      "Implemented plagiarism detection using the Winnowing fingerprinting algorithm - the same tokenize → k-gram → sliding-window-min approach used by Stanford's MOSS system",
    ],
    tech: ["Docker", "Redis", "FastAPI", "WebSockets", "POSTGRESQL"],
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
      "Designed a decoupled AI layer (Gemini 2.0) with a clean boundary between LLM calls and business logic - changes to the AI provider require touching exactly one file",

      "Implemented the SM-2 spaced repetition algorithm from scratch; schedules each card's next review using a recall quality score (0–5), matching the algorithm used by Anki's 100M+ user base",

      "Built 9 REST endpoints across a full user lifecycle: onboarding > AI plan generation > adaptive quiz > weakness analysis > mock test",

      "Centralized all Axios calls in a single api.js module - zero fetch logic scattered across components, enabling easy mock injection for testing",
    ],
    tech: ["React", "FastAPI", "Gemini", "SQLite", "SM-2", "Python"],
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
      "Built a two-stage hybrid retrieval pipeline: sentence-transformer embeddings : FAISS ANN first pass (top-50), re-ranked with BM25 keyword overlap (70/30 weighted) - the same architecture GitHub Copilot uses",

      "Measured MRR: 0.122 vs 0.071 for BM25 baseline - a 72% improvement, validated on 15 labelled test queries",

      "Scraped 1,683 real Python/JS functions from 8 public GitHub repos using PyGitHub + AST parser; extracted function signatures and docstrings as natural language anchors",
    ],
    tech: ["Python", "FAISS", "SENTENCE-TRANSFORMERS", "BM25", "React"],
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
      "Implemented Operational Transformation (OT) from scratch - the algorithm transforms concurrent Insert/Delete operations so divergent client states always converge to the same document, the same guarantee Google Docs provides",

      "Broadcast live cursor positions per user over WebSockets with unique per-session colors - zero latency flash; each keystroke triggers a targeted delta, not a full-document sync",

      "Every operation is persisted to SQLite as an append-only log - documents survive page refresh and the full revision history is replayable from scratch",

      "Separated OT algorithm into a pure module (ot.py) with no I/O dependencies - fully unit testable, zero side effects",
    ],
    tech: ["React", "Node.js", "WebSockets", "OT", "SQLITE"],
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
      "Trained a two-tower PyTorch model (user tower + item tower, 64-dim L2-normalized embeddings) with BPR loss and 4× negative sampling - the architecture used by YouTube, Spotify, and Pinterest at scale",

      "Achieved Recall - 10: 46.3% on a held-out test set; A/B test showed +26.7% CTR lift over a popularity-based baseline across 10,870 user-artist interactions",

      "Item embeddings pre-computed offline and indexed into FAISS IndexFlatIP for sub-millisecond ANN retrieval at request time - online path only runs the user tower",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "PyTorch", "FAISS", "BPR Loss"],
    stack: "ML",
    link: "https://github.com/Shreyaa-15/music-recsys",
  },

  {
    id: "06",
    title: "ML Observability + Drift Detection",
    tag: "BATCH — MLOPS",
    tagline: "Production ML monitoring — what Stripe and Google build.",
    desc: "KS test + PSI drift detection on live model inputs. Auto-retraining pipeline fires when drift score ≥ 50. Real-time dashboard.",
    highlights: [
      "Implemented KS test + PSI drift detection on live model inputs - correctly identifies 3 drifted features at drift_factor=0.9; PSI threshold 0.08 triggers a high-severity alert, matching the standard used by Stripe and major banks",

      "Built an auto-retraining pipeline that fires when the combined drift score ≥ 50/100 - new model is only deployed if it outperforms the current champion, preventing regression",

      "Drift score range validated end-to-end: 8.7 (clean data) > 77.7 (injected concept drift) - demonstrating the detector's full dynamic range",
    ],
    tech: ["Python", "PSI", "Scikit-learn", "FastAPI", "XGBOOST", "Ks Test"],
    stack: "ML",
    link: "https://github.com/Shreyaa-15/ml-drift-monitor",
  },

  {
    id: "07",
    title: "Full-Scale E-Commerce Microservices",
    tag: "BATCH BREW — INFRA",
    tagline: "4 services. 4 databases. Kafka. Kubernetes. One command.",
    desc: "Database-per-service. Event-driven consistency. SAGA pattern for distributed transactions. The three patterns almost no candidates implement — demonstrated end to end.",
    highlights: [
      "Applied database-per-service isolation across 4 independent PostgreSQL instances - no shared state, no cross-service joins, enabling independent deploys",

      "Implemented event-driven async communication via Kafka: order service publishes order.created > payment service consumes and publishes payment.processed - zero direct coupling between services",

      "Designed the SAGA pattern for distributed transactions: if payment fails, a compensating event rolls back order state - the three patterns almost no candidates implement end-to-end",

      "Load tested at 50 concurrent users: product endpoints at 8ms median / 17ms p95; zero failures across all product and order routes",
    ],
    tech: ["Dcker", "Kafka", "PostgreSQL", "Locust"],
    stack: "ML",
    link: "https://github.com/Shreyaa-15/ecommerce-microservices",
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
          Signature <span className="italic text-gold">brews</span>
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