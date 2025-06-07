
const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-pulse">🌱</div>
            <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">
              Farm to Bottle
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Fresh. Pure. Delicious. Every bottle is cold-pressed within hours of harvest.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🌿", text: "100% Organic", color: "green" },
                { icon: "❄️", text: "Cold-Pressed", color: "purple" },
                { icon: "🚫", text: "No Additives", color: "orange" }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`text-4xl mb-2 group-hover:scale-125 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className={`font-medium group-hover:text-${item.color}-500 transition-colors duration-300`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
