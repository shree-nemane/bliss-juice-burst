
const ProductShowcase = () => {
  const products = [
    {
      name: "Tropical Burst",
      flavor: "Mango • Pineapple • Passion Fruit",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-100 to-orange-100",
    },
    {
      name: "Berry Fusion",
      flavor: "Strawberry • Blueberry • Raspberry",
      color: "from-pink-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
    },
    {
      name: "Green Goddess",
      flavor: "Kale • Apple • Cucumber • Lime",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
    },
    {
      name: "Citrus Spark",
      flavor: "Orange • Lemon • Grapefruit",
      color: "from-orange-400 to-yellow-500",
      bgColor: "bg-gradient-to-br from-orange-100 to-yellow-100",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Flavors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each bottle is crafted with love, packed with nutrients, and bursting with flavor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
            >
              {/* Product bottle mockup */}
              <div className={`w-20 h-32 mx-auto mb-6 rounded-full bg-gradient-to-b ${product.color} relative shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-300 rounded-t-lg"></div>
                <div className="absolute inset-4 bg-white bg-opacity-20 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {product.flavor}
              </p>
              
              {/* Floating background element */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${product.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
