
import { ArrowDown } from "lucide-react";
import FloatingFruit from "./FloatingFruit";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-orange-50 to-purple-50">
      <FloatingFruit />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="group cursor-pointer">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 mb-6 transition-all duration-500 group-hover:scale-105">
            Juicy
            <br />
            <span className="text-6xl md:text-8xl">Bliss</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium transition-all duration-300 group-hover:text-purple-600">
            Pure fruit. Pure <em className="text-orange-500">bliss</em>.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Taste Now
          </button>
          <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105">
            Our Story
          </button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-purple-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
