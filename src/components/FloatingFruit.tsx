
const FloatingFruit = () => {
  const fruits = [
    { emoji: "🍊", top: "20%", left: "15%", delay: "0s", duration: "6s" },
    { emoji: "🍎", top: "70%", left: "85%", delay: "1s", duration: "8s" },
    { emoji: "🍓", top: "40%", left: "90%", delay: "2s", duration: "7s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {fruits.map((fruit, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300 animate-bounce"
          style={{
            top: fruit.top,
            left: fruit.left,
            animationDelay: fruit.delay,
            animationDuration: fruit.duration,
          }}
        >
          {fruit.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingFruit;
