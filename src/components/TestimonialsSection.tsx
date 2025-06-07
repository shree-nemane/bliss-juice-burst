
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Juicy Bliss changed my morning routine! The Tropical Burst gives me energy that lasts all day.",
      avatar: "🌟",
      rating: 5,
    },
    {
      name: "Mike R.",
      text: "Finally, a juice that actually tastes like fresh fruit. The Green Goddess is my new obsession!",
      avatar: "💚",
      rating: 5,
    },
    {
      name: "Emma L.",
      text: "As a nutritionist, I recommend Juicy Bliss to all my clients. Pure, clean, and delicious!",
      avatar: "🍎",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-800 mb-6">
            What People Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Saying</span>
          </h2>
          <p className="text-xl text-gray-600">Real stories from real juice lovers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 text-center italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
