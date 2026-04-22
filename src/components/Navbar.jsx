const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-lg font-semibold tracking-wide">
          Shreya
        </h1>

<div className="flex gap-8 text-sm text-secondary">
  <a href="#projects" className="hover:text-accent transition">Projects</a>
  <a href="#skills" className="hover:text-accent transition">Skills</a>
  <a href="#about" className="hover:text-accent transition">About</a>
  <a href="#contact" className="hover:text-accent transition">Contact</a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;