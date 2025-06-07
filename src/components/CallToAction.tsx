
const CallToAction = () => {
  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Floating background elements */}
          <div className="absolute top-4 right-8 w-24 h-24 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute bottom-8 left-12 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 right-16 w-16 h-16 bg-white bg-opacity-15 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready for Your
              <br />
              <span className="text-yellow-300">Juice Journey?</span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of juice lovers who've made the switch to pure, delicious, and nutritious Juicy Bliss.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
                Find a Store Near You
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Order Online
              </button>
            </div>
            
            <div className="mt-8">
              <p className="text-sm opacity-75">
                Free delivery on orders over $25 • 30-day satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-orange-200 to-transparent rounded-full opacity-30 transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-l from-purple-200 to-transparent rounded-full opacity-30 transform translate-x-24 translate-y-24"></div>
    </section>
  );
};

export default CallToAction;
