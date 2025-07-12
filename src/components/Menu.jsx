import { menuItems } from "../data/data";
import { ChefHat, Utensils, Coffee, Wine } from "lucide-react";

const MenuSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-amber-400">Menú</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada plato es una obra de arte culinaria, preparada con los mejores
            ingredientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(menuItems).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                {category === "entradas" && (
                  <ChefHat className="text-amber-400 mr-3" size={24} />
                )}
                {category === "principales" && (
                  <Utensils className="text-amber-400 mr-3" size={24} />
                )}
                {category === "postres" && (
                  <Coffee className="text-amber-400 mr-3" size={24} />
                )}
                {category === "bebidas" && (
                  <Wine className="text-amber-400 mr-3" size={24} />
                )}
                <h3 className="text-2xl font-bold text-white capitalize">
                  {category}
                </h3>
              </div>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-700 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold text-lg">
                        {item.name}
                      </h4>
                      <span className="text-amber-400 font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuSection;
