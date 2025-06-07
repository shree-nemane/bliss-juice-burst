
import { ArrowDown } from "lucide-react";
import FloatingFruit from "./FloatingFruit";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Floating fruit decorations */}
      <FloatingFruit />
      
      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-green-500 mb-6 leading-tight">
            Juicy
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl">Bliss</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Pure fruit. Pure joy. Pure <em className="text-orange-500 font-bold">bliss</em>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Taste the Rainbow
            </button>
            <button className="border-2 border-green-400 text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-300 to-blue-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full opacity-20 blur-xl"></div>
    </section>
  );
};

export default Hero;
