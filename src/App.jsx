import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Experience from "./pages/Experience";
import ServicesPage from "./pages/ServicesPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<ServicesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
