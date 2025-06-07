
const FloatingFruit = () => {
  const fruits = [
    { emoji: "🍊", top: "20%", left: "15%", delay: "0s", duration: "6s" },
    { emoji: "🍎", top: "70%", left: "85%", delay: "1s", duration: "8s" },
    { emoji: "🍓", top: "40%", left: "90%", delay: "2s", duration: "7s" },
    { emoji: "🥝", top: "80%", left: "10%", delay: "3s", duration: "9s" },
    { emoji: "🍌", top: "15%", left: "80%", delay: "1.5s", duration: "6.5s" },
    { emoji: "🍇", top: "60%", left: "5%", delay: "2.5s", duration: "7.5s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {fruits.map((fruit, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          style={{
            top: fruit.top,
            left: fruit.left,
            animation: `float ${fruit.duration} ease-in-out infinite`,
            animationDelay: fruit.delay,
          }}
        >
          {fruit.emoji}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingFruit;
