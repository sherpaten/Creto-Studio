import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesGrid from "../components/ServicesGrid";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-[#011032] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesGrid />
        <Projects />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
