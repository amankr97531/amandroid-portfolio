import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
