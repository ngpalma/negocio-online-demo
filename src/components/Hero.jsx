import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          transform: `scale(${1.1 + scrollY * 0.0005})`,
        }}
      ></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Experiencia <span className="text-amber-400">Gastronómica</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Donde cada plato cuenta una historia única de sabor y tradición
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Descubrir Menú
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
