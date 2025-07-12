import { Star } from "lucide-react";
import { testimonials } from "../data/data";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="text-amber-400">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios reales de quienes han vivido la experiencia Sabores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-white mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="font-semibold text-white">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
