
import { useState } from "react";
import { ArrowDown, X } from "lucide-react";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const flavors = [
    { id: "rage", name: "RAGE", color: "from-red-600 to-orange-500", bg: "bg-red-900/20" },
    { id: "venom", name: "VENOM", color: "from-purple-600 to-pink-500", bg: "bg-purple-900/20" },
    { id: "strike", name: "STRIKE", color: "from-green-500 to-emerald-400", bg: "bg-green-900/20" }
  ];

  const testimonials = [
    "PURE LIQUID FIRE - Marcus",
    "UNLEASHED MY BEAST - Sarah", 
    "IMPOSSIBLE TO RESIST - Alex"
  ];

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-600/20 to-transparent transform rotate-45 translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-transparent transform -rotate-45 -translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-600/10 to-transparent transform -translate-x-32 -translate-y-32 rotate-12"></div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col gap-4">
          {["main", "flavors", "about"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-3 h-3 border-2 transform transition-all duration-300 hover:scale-150 ${
                activeSection === section 
                  ? 'bg-orange-500 border-orange-500 rotate-45' 
                  : 'border-white hover:border-orange-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Section */}
      {activeSection === "main" && (
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="relative group cursor-pointer">
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 
                              drop-shadow-[0_0_30px_rgba(255,165,0,0.5)] group-hover:drop-shadow-[0_0_50px_rgba(255,165,0,0.8)] 
                              transition-all duration-500">
                  JUICY
                </span>
                <br />
                <span className="text-white group-hover:text-red-500 transition-colors duration-500">
                  BLISS
                </span>
              </h1>
              
              <div className="absolute -inset-10 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-green-500/20 
                            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            
            <p className="text-2xl font-bold text-gray-300 mb-8 tracking-wide">
              LIQUID <span className="text-orange-500">REBELLION</span>
            </p>
            
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setActiveSection("flavors")}
                className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-black text-lg 
                         transform hover:scale-110 hover:rotate-1 transition-all duration-300 
                         shadow-[0_0_20px_rgba(255,165,0,0.5)] hover:shadow-[0_0_30px_rgba(255,165,0,0.8)]
                         border-2 border-orange-500/50 hover:border-orange-400">
                UNLEASH
              </button>
              <button 
                onClick={() => setActiveSection("about")}
                className="border-2 border-green-500 px-8 py-4 font-black text-lg text-green-400 
                         hover:bg-green-500 hover:text-black transform hover:scale-110 hover:-rotate-1 
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]">
                ORIGINS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Flavors Section */}
      {activeSection === "flavors" && (
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl">
            <h2 className="text-6xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              CHOOSE YOUR WEAPON
            </h2>
            
            <div className="grid grid-cols-3 gap-8">
              {flavors.map((flavor) => (
                <div
                  key={flavor.id}
                  onClick={() => setSelectedFlavor(selectedFlavor === flavor.id ? null : flavor.id)}
                  className={`${flavor.bg} border-2 border-gray-600 p-8 cursor-pointer group 
                            transform transition-all duration-500 hover:scale-110 hover:-rotate-2
                            ${selectedFlavor === flavor.id ? 'scale-110 -rotate-2 border-white' : ''}`}
                >
                  <div className={`w-20 h-32 mx-auto mb-6 bg-gradient-to-b ${flavor.color} 
                                 transform group-hover:rotate-12 transition-transform duration-500
                                 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}>
                    <div className="absolute inset-2 bg-white bg-opacity-20"></div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                    {flavor.name}
                  </h3>
                  
                  {selectedFlavor === flavor.id && (
                    <div className="mt-4 text-gray-300 font-bold animate-fade-in">
                      PURE INTENSITY
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h2 className="text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">
              NO MERCY
            </h2>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="text-left">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-black text-orange-400 mb-4">PURE POWER</h3>
                  <p className="text-gray-300 font-bold">
                    Cold-pressed fury in every bottle. No additives. No weakness. Only strength.
                  </p>
                </div>
              </div>
              
              <div className="text-left">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-black text-purple-400 mb-4">TESTIMONIALS</h3>
                  <div className="space-y-2">
                    {testimonials.map((testimonial, index) => (
                      <p key={index} className="text-gray-300 font-bold text-sm">
                        {testimonial}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-green-600 px-12 py-6 font-black text-2xl 
                               transform hover:scale-110 transition-all duration-300 
                               shadow-[0_0_30px_rgba(128,0,128,0.5)] hover:shadow-[0_0_50px_rgba(128,0,128,0.8)]
                               border-2 border-purple-500/50 hover:border-purple-400">
                DOMINATE NOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Close/Back Button */}
      {activeSection !== "main" && (
        <button
          onClick={() => setActiveSection("main")}
          className="absolute top-8 right-8 z-30 text-white hover:text-orange-500 
                   transform hover:scale-125 hover:rotate-90 transition-all duration-300"
        >
          <X size={32} />
        </button>
      )}

      {/* Subtle animated elements */}
      <div className="absolute bottom-10 right-10 text-orange-500/30 animate-pulse">
        <ArrowDown size={24} className="transform rotate-45" />
      </div>
    </div>
  );
};

export default Hero;
