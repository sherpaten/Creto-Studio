import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesGrid from "../components/ServicesGrid";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-[#011032] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesGrid />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}