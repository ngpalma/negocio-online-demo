import { useState } from "react";
import { MapPin, Clock, Phone, Star } from "lucide-react";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    personas: 1,
    fecha: "",
    hora: "",
    comentarios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert("Reserva enviada");
    setShowForm(false);
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      personas: 1,
      fecha: "",
      hora: "",
      comentarios: "",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visítanos <span className="text-amber-400">Hoy</span>
          </h2>
          <p className="text-xl text-gray-300">
            Te esperamos para vivir una experiencia gastronómica inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
            <MapPin className="text-amber-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
            <p className="text-gray-300">
              Av. Pellegrini 1234
              <br />
              Rosario, Santa Fe
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
            <Clock className="text-amber-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Horarios</h3>
            <p className="text-gray-300">
              Lun-Dom: 19:00 - 02:00
              <br />
              Cocina hasta 01:00
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
            <Phone className="text-amber-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Reservas</h3>
            <p className="text-gray-300">
              +54 341 555-0123
              <br />
              reservas@sabormoderno.com
            </p>
          </div>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-amber-400 mr-2" size={24} />
            <span className="text-white text-xl font-semibold">
              Calificación promedio: 4.9/5
            </span>
          </div>
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6">
              "Una experiencia gastronómica excepcional. Cada plato es una obra
              maestra."
            </p>
            {!showForm ? (
              <button
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowForm(true)}
              >
                Hacer Reserva
              </button>
            ) : (
              <form
                className="mt-8 space-y-4 text-left max-w-lg mx-auto"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-gray-200 mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">
                    Cantidad de personas
                  </label>
                  <input
                    type="number"
                    name="personas"
                    min={1}
                    max={20}
                    required
                    value={form.personas}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-200 mb-1">Fecha</label>
                    <input
                      type="date"
                      name="fecha"
                      required
                      value={form.fecha}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-200 mb-1">Hora</label>
                    <input
                      type="time"
                      name="hora"
                      required
                      value={form.hora}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">
                    Comentarios adicionales
                  </label>
                  <textarea
                    name="comentarios"
                    rows={3}
                    value={form.comentarios}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-amber-400 outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Reserva
                  </button>
                  <button
                    type="button"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
