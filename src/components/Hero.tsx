
import { useState } from "react";
import { Leaf, TreeDeciduous, TreePalm } from "lucide-react";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const flavors = [
    { 
      id: "green", 
      name: "GREEN VITALITY", 
      color: "from-emerald-600 to-green-700", 
      bg: "bg-green-50", 
      icon: <Leaf className="w-12 h-12 text-green-700" />,
      ingredients: "Kale • Spinach • Apple • Lemon"
    },
    { 
      id: "citrus", 
      name: "CITRUS GLOW", 
      color: "from-orange-500 to-amber-600", 
      bg: "bg-orange-50", 
      icon: <TreeDeciduous className="w-12 h-12 text-orange-700" />,
      ingredients: "Orange • Grapefruit • Ginger • Turmeric"
    },
    { 
      id: "berry", 
      name: "BERRY EARTH", 
      color: "from-purple-600 to-red-700", 
      bg: "bg-purple-50", 
      icon: <TreePalm className="w-12 h-12 text-purple-700" />,
      ingredients: "Blueberry • Blackberry • Beet • Mint"
    }
  ];

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-amber-50 via-green-50 to-orange-50 text-stone-800 overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Natural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-24 h-24 rounded-full bg-green-200 opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-amber-200 opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-24 w-20 h-20 rounded-full bg-orange-200 opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col gap-4">
          {["main", "flavors", "story"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-3 h-8 rounded-full transform transition-all duration-700 ${
                activeSection === section 
                  ? 'bg-green-600 shadow-lg' 
                  : 'bg-stone-300 hover:bg-green-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Section */}
      {activeSection === "main" && (
        <div className="relative z-20 h-full flex items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-xl">
                  <Leaf className="w-12 h-12 text-cream" />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4 text-stone-800 leading-tight">
                <span className="block font-serif">Pure</span>
                <span className="block text-green-700 font-serif">Nature</span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto mb-6 rounded-full"></div>
            </div>
            
            <p className="text-xl text-stone-600 mb-12 font-medium leading-relaxed">
              Cold-pressed from <span className="text-green-700 font-semibold">organic farms</span> to your table
              <br />
              <span className="text-amber-700 italic">No preservatives. No shortcuts. Just pure goodness.</span>
            </p>
            
            <div className="flex gap-6 justify-center mb-16">
              <button 
                onClick={() => setActiveSection("flavors")}
                className="bg-green-700 text-cream px-8 py-4 rounded-full font-semibold text-lg 
                         transform hover:scale-105 transition-all duration-500 
                         shadow-lg hover:shadow-xl hover:bg-green-800">
                Taste Earth's Bounty
              </button>
              <button 
                onClick={() => setActiveSection("story")}
                className="bg-transparent border-2 border-green-700 text-green-700 px-8 py-4 rounded-full font-semibold text-lg 
                         hover:bg-green-50 transform hover:scale-105 
                         transition-all duration-500">
                Our Story
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
              <div className="group cursor-pointer">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌱</div>
                <span className="text-sm text-stone-600 font-medium">Organic</span>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">❄️</div>
                <span className="text-sm text-stone-600 font-medium">Cold-Pressed</span>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌍</div>
                <span className="text-sm text-stone-600 font-medium">Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flavors Section */}
      {activeSection === "flavors" && (
        <div className="relative z-20 h-full flex items-center justify-center p-8">
          <div className="text-center max-w-6xl">
            <h2 className="text-5xl font-bold mb-4 text-stone-800 font-serif">
              Nature's Palette
            </h2>
            <p className="text-stone-600 mb-12 text-lg">Handcrafted blends from premium organic ingredients</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {flavors.map((flavor) => (
                <div
                  key={flavor.id}
                  onClick={() => setSelectedFlavor(selectedFlavor === flavor.id ? null : flavor.id)}
                  className={`${flavor.bg} rounded-2xl p-8 cursor-pointer group 
                            transform transition-all duration-700 hover:scale-105
                            shadow-lg hover:shadow-xl border border-stone-200
                            ${selectedFlavor === flavor.id ? 'scale-105 ring-2 ring-green-600' : ''}`}
                >
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {flavor.icon}
                  </div>
                  
                  <div className={`w-12 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-b ${flavor.color} 
                                 transform group-hover:rotate-3 transition-transform duration-500
                                 shadow-md relative`}>
                    <div className="absolute inset-1 bg-white bg-opacity-30 rounded-lg"></div>
                    <div className="absolute top-1 left-1 right-1 h-2 bg-white bg-opacity-50 rounded-t-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-700 mb-2 font-serif">
                    {flavor.name}
                  </h3>
                  
                  <p className="text-sm text-stone-500 italic">
                    {flavor.ingredients}
                  </p>
                  
                  {selectedFlavor === flavor.id && (
                    <div className="mt-4 text-green-700 font-medium text-sm border-t border-stone-200 pt-4">
                      ✓ Certified Organic • Cold-Pressed • Farm Fresh
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Story Section */}
      {activeSection === "story" && (
        <div className="relative z-20 h-full flex items-center justify-center p-8">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <TreeDeciduous className="mx-auto w-16 h-16 text-green-700 mb-4" />
              <h2 className="text-5xl font-bold mb-6 text-stone-800 font-serif">
                Rooted in Purpose
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-2xl font-bold text-green-700 mb-4 font-serif">Farm Partners</h3>
                <p className="text-stone-600 leading-relaxed">
                  We work directly with organic farmers who share our commitment to sustainable, 
                  chemical-free agriculture. Every bottle supports regenerative farming practices.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-500">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4 font-serif">Earth First</h3>
                <p className="text-stone-600 leading-relaxed">
                  From compostable packaging to carbon-neutral delivery, 
                  every choice we make considers our planet's wellbeing first.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-700 to-amber-700 text-cream rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-4 font-serif">"Nourishing people, nurturing earth"</h4>
              <p className="text-green-100 italic">
                Our mission goes beyond juice. We're cultivating a community that values 
                health, sustainability, and the pure goodness that nature provides.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      {activeSection !== "main" && (
        <button
          onClick={() => setActiveSection("main")}
          className="absolute top-8 right-8 z-30 bg-white text-green-700 p-3 rounded-full
                   hover:bg-green-50 transform hover:scale-110 transition-all duration-500
                   shadow-lg border border-green-200"
        >
          <Leaf className="w-6 h-6" />
        </button>
      )}

      {/* Floating Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-600">
        <Leaf className="w-8 h-8 animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
