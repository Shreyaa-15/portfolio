const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#140800]/60 border-b border-[#ffffff10]">
      
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-cream font-semibold tracking-wide">
          Shreya
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#projects" className="hover:text-gold transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-gold transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-gold transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;