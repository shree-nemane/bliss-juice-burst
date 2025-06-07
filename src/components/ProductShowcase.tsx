
const ProductShowcase = () => {
  const products = [
    {
      name: "Tropical",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-100",
      emoji: "🥭"
    },
    {
      name: "Berry",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-100",
      emoji: "🫐"
    },
    {
      name: "Green",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-100",
      emoji: "🥬"
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
          Our Flavors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-3xl p-8 cursor-pointer group hover:scale-110 transition-all duration-500 hover:shadow-2xl`}
              onClick={() => console.log(`Selected ${product.name}`)}
            >
              <div className="text-6xl mb-4 text-center group-hover:animate-spin transition-all duration-500">
                {product.emoji}
              </div>
              
              <div className={`w-16 h-24 mx-auto mb-6 rounded-full bg-gradient-to-b ${product.color} shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                <div className="absolute inset-2 bg-white bg-opacity-30 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-center group-hover:text-purple-600 transition-colors duration-300">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
