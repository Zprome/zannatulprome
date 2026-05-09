import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/ui/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

import ProjectsPage from "./pages/ProjectsPage";

import WebDevelopmentProject from "./pages/WebDevelopmentProject";
import BusinessIntelligenceProject from "./pages/BusinessIntelligenceProject";
import GrowKasterleeProject from "./pages/Skill2-GrowKasterleeProject";


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-[#F5F1E8] font-body">
      <CursorGlow />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#09090B_0%,#0C0C10_40%,#121217_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(198,169,114,0.06),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(156,105,50,0.12),transparent_24%),radial-gradient(circle_at_55%_60%,rgba(198,169,114,0.06),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_48%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/book-a-bite" element={<WebDevelopmentProject />} />
          <Route path="/projects/daf-dashboard" element={<BusinessIntelligenceProject />} />
          <Route path="/projects/growkasterlee" element={<GrowKasterleeProject />} />
          
        </Routes>
      </div>
    </main>
  );
}

export default App;