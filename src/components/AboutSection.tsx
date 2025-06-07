
const AboutSection = () => {
  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-orange-200 to-transparent rounded-full opacity-50 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-green-200 to-transparent rounded-full opacity-50 transform -translate-x-24 translate-y-24"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-gray-800 mb-6">
                From Farm to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">Bottle</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that the best juice comes from the best fruit. That's why we work directly with local farms, 
                selecting only the ripest, most flavorful produce for our blends.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every bottle is cold-pressed within hours of harvest, preserving maximum nutrition and that 
                incredible fresh-picked taste you can actually feel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">100% Organic Fruits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Cold-Pressed Fresh Daily</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">No Added Sugars or Preservatives</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 transform -rotate-1">
                  <div className="text-6xl mb-4 text-center">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">Our Promise</h3>
                  <p className="text-gray-600 text-center">
                    Every sip supports sustainable farming and brings you closer to nature's pure goodness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
