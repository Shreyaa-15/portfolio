const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-32 text-center">

      <div className="max-w-4xl mx-auto">

        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
          Place Your Order
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-cream mb-6">
          Let’s brew something.
        </h2>

        <p className="text-gray-400 mb-10">
          Available to brew something new — SWE · ML · Freelance
        </p>

        <div className="flex justify-center gap-8 text-sm tracking-widest">
          <a href="mailto:shrsingh0990@gmail.com" className="hover:text-gold">Email</a>
          <a href="https://linkedin.com" className="hover:text-gold">LinkedIn</a>
          <a href="https://github.com/Shreyaa-15" className="hover:text-gold">GitHub</a>
          <a href="#" className="hover:text-gold">Resume</a>
        </div>

      </div>
    </section>
  );
};

export default Contact;