const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Hi, I’m <span className="text-accent">Shreya Singh</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-secondary max-w-2xl">
        Software Engineer focused on backend systems, integrations,
        and solving real-world engineering problems.
      </p>

      <div className="mt-6 flex gap-4">
<a
  href="#projects"
  className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-black transition"
>
  View Projects
</a>

<a
  href="https://github.com/Shreyaa-15"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 border border-gray-600 hover:border-accent transition"
>
  GitHub
</a>
      </div>

    </section>
  );
};

export default Hero;