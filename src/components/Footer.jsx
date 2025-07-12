const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-2xl font-bold text-white mb-4">
          <span className="text-amber-400">Sabor</span>Moderno
        </div>
        <p className="text-gray-400 mb-4">
          © 2025 SaborModerno. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/549123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
