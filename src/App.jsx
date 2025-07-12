import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/testimonios" element={<Testimonials />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <WhatsAppFloatingButton 
        phoneNumber="+1234567890"
        message="¡Hola! Quiero hacer una reserva."
        position="bottom-right"
      />
      <Footer />
    </div>
  );
}
export default App;
