
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                Juicy Bliss
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Bringing you the purest, most delicious fruit juices straight from nature to your glass. 
              Every bottle tells a story of freshness and quality.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Our Flavors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Find Stores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Nutrition Facts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Juicy Bliss. All rights reserved. Made with 💚 for juice lovers everywhere.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
