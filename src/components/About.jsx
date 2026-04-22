const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-28 relative">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Origins & Terroir
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
            Where the beans <span className="italic text-gold">come from</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Great coffee comes from great origins. Every role, every project, every line of code
            has shaped the engineer I am today.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-[#c8923a30] pl-8 space-y-12">

          <div>
            <p className="text-xs text-gold mb-2">2023 — Present</p>
            <h3 className="text-xl font-semibold text-cream">
              ServiceNow Developer
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Building enterprise workflows, integrations, and scalable backend systems.
              Working with ITSM, automation, and API-first architecture at scale.
            </p>
          </div>

          <div>
            <p className="text-xs text-gold mb-2">Side Projects</p>
            <h3 className="text-xl font-semibold text-cream">
              Systems + Backend Engineering
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Focused on distributed systems, real-time processing, and scalable architecture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;