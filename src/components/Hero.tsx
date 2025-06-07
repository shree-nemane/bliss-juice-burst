
import { useState } from "react";
import { Heart, Sparkles, Sun } from "lucide-react";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const flavors = [
    { id: "sunshine", name: "SUNSHINE", color: "from-orange-300 to-yellow-400", bg: "bg-orange-50", emoji: "☀️" },
    { id: "berry", name: "BERRY BLISS", color: "from-purple-300 to-pink-400", bg: "bg-purple-50", emoji: "🫐" },
    { id: "fresh", name: "FRESH MINT", color: "from-green-300 to-emerald-400", bg: "bg-green-50", emoji: "🌿" }
  ];

  const testimonials = [
    { text: "Pure happiness in a bottle!", author: "Emma" },
    { text: "My daily dose of joy!", author: "Marcus" }, 
    { text: "Tastes like sunshine!", author: "Lily" }
  ];

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-orange-50 via-purple-50 to-green-50 text-gray-800 overflow-hidden">
      {/* Floating Happy Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col gap-4">
          {["main", "flavors", "about"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-4 h-4 rounded-full transform transition-all duration-500 hover:scale-125 ${
                activeSection === section 
                  ? 'bg-gradient-to-r from-orange-400 to-purple-400 shadow-lg' 
                  : 'bg-white border-2 border-purple-300 hover:bg-purple-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Section */}
      {activeSection === "main" && (
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="relative group cursor-pointer mb-8">
              <div className="absolute -top-4 -right-4 text-4xl animate-spin" style={{ animationDuration: '3s' }}>
                <Sparkles className="text-yellow-400" />
              </div>
              <div className="absolute -top-4 -left-4 text-4xl animate-bounce">
                <Heart className="text-pink-400" />
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-4 group-hover:scale-105 transition-all duration-700">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-green-500 
                              group-hover:from-pink-400 group-hover:via-yellow-500 group-hover:to-blue-500 
                              transition-all duration-1000">
                  Juicy
                </span>
                <br />
                <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-700">
                  Bliss
                </span>
              </h1>
            </div>
            
            <p className="text-2xl font-medium text-gray-600 mb-12 animate-fade-in">
              Sip the <span className="text-orange-500 font-bold">Rainbow</span> of Happiness
            </p>
            
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setActiveSection("flavors")}
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-10 py-4 rounded-full font-bold text-lg 
                         transform hover:scale-110 hover:rotate-2 transition-all duration-500 
                         shadow-lg hover:shadow-xl hover:shadow-orange-200
                         animate-pulse hover:animate-none">
                Taste Joy
              </button>
              <button 
                onClick={() => setActiveSection("about")}
                className="bg-white border-2 border-purple-300 text-purple-600 px-10 py-4 rounded-full font-bold text-lg 
                         hover:bg-purple-50 transform hover:scale-110 hover:-rotate-2 
                         transition-all duration-500 hover:shadow-lg hover:shadow-purple-200">
                Our Story
              </button>
            </div>
            
            <div className="mt-16 flex justify-center gap-8 text-4xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🍊</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍇</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🍃</span>
            </div>
          </div>
        </div>
      )}

      {/* Flavors Section */}
      {activeSection === "flavors" && (
        <div className="relative z-20 h-full flex items-center justify-center p-8">
          <div className="text-center max-w-6xl">
            <h2 className="text-5xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
              Choose Your Happy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {flavors.map((flavor) => (
                <div
                  key={flavor.id}
                  onClick={() => setSelectedFlavor(selectedFlavor === flavor.id ? null : flavor.id)}
                  className={`${flavor.bg} rounded-3xl p-8 cursor-pointer group 
                            transform transition-all duration-700 hover:scale-105 hover:rotate-3
                            shadow-lg hover:shadow-2xl border border-white
                            ${selectedFlavor === flavor.id ? 'scale-105 rotate-3 ring-4 ring-purple-300' : ''}`}
                >
                  <div className="text-6xl mb-6 group-hover:animate-spin transition-all duration-1000">
                    {flavor.emoji}
                  </div>
                  
                  <div className={`w-16 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-b ${flavor.color} 
                                 transform group-hover:rotate-12 transition-transform duration-700
                                 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                    <div className="absolute inset-2 bg-white bg-opacity-40 rounded-xl"></div>
                    <div className="absolute top-2 left-2 right-2 h-3 bg-white bg-opacity-60 rounded-t-xl"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-500">
                    {flavor.name}
                  </h3>
                  
                  {selectedFlavor === flavor.id && (
                    <div className="mt-4 text-purple-600 font-medium animate-fade-in">
                      Pure liquid happiness! ✨
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
        <div className="relative z-20 h-full flex items-center justify-center p-8">
          <div className="text-center max-w-4xl">
            <div className="text-6xl mb-8 animate-pulse">
              <Sun className="mx-auto text-yellow-400" size={80} />
            </div>
            
            <h2 className="text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">
              Spreading Smiles Since Day One
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Farm Fresh</h3>
                <p className="text-gray-600">
                  Picked with love, pressed with care, delivered with joy!
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Happy Customers</h3>
                <div className="space-y-3">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-sm text-gray-600 italic">
                      "{testimonial.text}" - {testimonial.author}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-purple-400 to-green-400 text-white px-12 py-6 rounded-full font-bold text-xl 
                             transform hover:scale-110 transition-all duration-500 
                             shadow-lg hover:shadow-2xl hover:shadow-purple-200
                             animate-pulse hover:animate-none">
              Join the Bliss Family 🎉
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      {activeSection !== "main" && (
        <button
          onClick={() => setActiveSection("main")}
          className="absolute top-8 right-8 z-30 bg-white text-purple-600 p-3 rounded-full
                   hover:bg-purple-50 transform hover:scale-110 hover:rotate-12 transition-all duration-500
                   shadow-lg hover:shadow-xl"
        >
          <Heart size={24} />
        </button>
      )}

      {/* Floating Happy Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce">
        <Sparkles size={32} />
      </div>
    </div>
  );
};

export default Hero;
