
import { useState } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    { name: "Sarah M.", text: "Juicy Bliss changed my mornings!", emoji: "⭐" },
    { name: "Mike R.", text: "Finally, real fruit taste!", emoji: "💚" },
    { name: "Emma L.", text: "Pure, clean, delicious!", emoji: "🍎" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">
          What People Say
        </h2>

        <div className="bg-gradient-to-r from-orange-100 to-purple-100 rounded-3xl p-12 hover:scale-105 transition-all duration-500">
          <div className="text-6xl mb-6">{testimonials[activeIndex].emoji}</div>
          <p className="text-2xl text-gray-700 mb-6 italic">
            "{testimonials[activeIndex].text}"
          </p>
          <p className="font-bold text-purple-600">{testimonials[activeIndex].name}</p>
          
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-300 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
