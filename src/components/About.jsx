const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra <span className="text-amber-400">Historia</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Desde 2018, SaborModerno ha sido un referente en la gastronomía
              contemporánea. Combinamos técnicas tradicionales con innovación
              culinaria para crear experiencias únicas que despiertan todos los
              sentidos.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nuestro chef ejecutivo, con más de 15 años de experiencia
              internacional, lidera un equipo apasionado por la excelencia
              gastronómica.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  150+
                </div>
                <div className="text-gray-400">Platos Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  50k+
                </div>
                <div className="text-gray-400">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">6</div>
                <div className="text-gray-400">Años de Tradición</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Chef preparando plato"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
