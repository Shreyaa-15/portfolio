import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[60vh] px-6 py-24 bg-background text-primary flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-secondary mb-10"
        >
          Open to Software Engineering opportunities and meaningful projects.
        </motion.p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="mailto:shrsingh0990@gmail.com"
            className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition rounded-lg"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-singh-748b59217/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 hover:border-accent transition rounded-lg"
          >
            LinkedIn
          </a>

        </div>

        {/* Optional direct info */}
        <div className="mt-8 text-sm text-secondary">
          <p>Email: shrsingh0990@gmail.com</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;