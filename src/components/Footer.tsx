
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
            Juicy Bliss
          </span>
        </h3>
        
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Pure fruit. Pure joy. Pure bliss.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          {['Our Flavors', 'Find Stores', 'About Us', 'Contact'].map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
            >
              {link}
            </a>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {[
            { bg: "from-orange-400 to-purple-500", icon: "f" },
            { bg: "from-purple-400 to-green-500", icon: "t" },
            { bg: "from-green-400 to-orange-500", icon: "i" }
          ].map((social, index) => (
            <div 
              key={index}
              className={`w-12 h-12 bg-gradient-to-r ${social.bg} rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-300`}
            >
              <span className="text-white font-bold">{social.icon}</span>
            </div>
          ))}
        </div>
        
        <p className="text-gray-400 text-sm">
          © 2024 Juicy Bliss. Made with 💚 for juice lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
