import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseGlow from "./components/MouseGlow";
import Cursor from "./components/Cursor";
import Certifications from "./components/Certifications";
import "./styles/global.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* Effects */}
      <Cursor />
      <MouseGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="pt-20"> 
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

    </div>
  );
}

export default App;