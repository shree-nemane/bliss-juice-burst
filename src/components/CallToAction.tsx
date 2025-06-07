
const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-orange-500 via-purple-600 to-green-500 rounded-3xl p-16 text-white text-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500">
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-6xl font-black mb-6 group-hover:scale-110 transition-transform duration-300">
              Ready for Your
              <br />
              Juice Journey?
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Join thousands who've made the switch to pure bliss.
            </p>
            
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              Find a Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
