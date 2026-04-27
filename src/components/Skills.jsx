const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-20 py-28 bg-[#140800]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Tasting Notes
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
          The <span className="italic text-gold">ingredients</span> in every brew
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12">
          Every great system starts with the right fundamentals — from APIs to distributed pipelines.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Beans */}
          <div>
            <p className="text-xs text-gold mb-4">Beans</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Java / Python</li>
              <li>TypeScript / JavaScript</li>
              <li>SQL</li>
              <li>ServiceNow (Glide)</li>
            </ul>
          </div>

          {/* Method */}
          <div>
            <p className="text-xs text-gold mb-4">Method</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>System Design & Scalability</li>
              <li>Microservices & Distributed Systems</li>
              <li>Event-Driven Architecture</li>
              <li>REST API Design</li>
              <li>Data Pipelines & ETL</li>
              <li>Machine Learning Pipelines</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <p className="text-xs text-gold mb-4">Tools</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Spring Boot / FastAPI</li>
              <li>Node.js / React</li>
              <li>Docker / Kafka / Redis</li>
              <li>PostgreSQL / MongoDB / MySQL</li>
              <li>Git / CI-CD (GitHub Actions, Jenkins)</li>
              <li>Apache Spark</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;