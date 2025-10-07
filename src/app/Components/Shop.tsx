"use client";

const products = [
  {
    name: "Turmeric Powder",
    img: "/tumeric.webp",
    description: "Golden spice with a rich, earthy aroma — perfect for marinades and rubs.",
  },
  {
    name: "Cinnamon Sticks",
    img: "/cinammon.webp",
    description: "Sweet and aromatic, ideal for BBQ sauces and slow-cooked dishes.",
  },
  {
    name: "Chili Flakes",
    img: "/chiliflakes-D14I7425.webp",
    description: "Add a fiery kick and depth to your grilled meats and vegetables.",
  },
  {
    name: "Cardamom Pods",
    img: "/cardamon.webp",
    description: "Warm, citrusy, and slightly sweet — elevates your spice blends.",
  },
  {
    name: "Cumin Seeds",
    img: "/Cumin-Spice.webp",
    description: "Smoky and nutty, a BBQ essential for rich flavor.",
  },
  {
    name: "Black Pepper",
    img: "/images/blackpepper.jpg",
    description: "Freshly cracked, bold and aromatic — the heart of good seasoning.",
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="px-6 py-20 bg-gradient-to-b from-slate-900 via-red-900 to-amber-600 text-white"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 font-serif tracking-wide">
        Our Signature Spices
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.name}
            className="bg-black/30 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-lg p-5 text-center hover:scale-105 hover:shadow-orange-600/40 transition-all duration-300"
          >
            <div className="aspect-square w-full mb-4 overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h4 className="text-2xl font-semibold text-orange-400 mb-2 font-serif">
              {item.name}
            </h4>

            <p className="text-gray-200 text-sm mb-5 max-w-sm mx-auto leading-relaxed">
              {item.description}
            </p>

            <a
              href={`mailto:info@backabbq.com?subject=Product Inquiry: ${encodeURIComponent(item.name)}`}
              className="inline-block border border-orange-500 text-orange-400 font-semibold px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all"
            >
              Contact for Order
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}