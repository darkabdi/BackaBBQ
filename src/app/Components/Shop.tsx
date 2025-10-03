import tumeric from '../Public/tumeric.webp'

const products = [
  { name: "Turmeric Powder", price: "79 kr", img: '/tumeric.webp' },
  { name: "Cinnamon Sticks", price: "59 kr", img: "/cinammon.webp" },
  { name: "Chili Flakes", price: "49 kr", img: "/chiliflakes-D14I7425.webp" },
  { name: "Cardamom Pods", price: "89 kr", img: "/cardamon.webp" },
  { name: "Cumin Seeds", price: "69 kr", img: "/Cumin-Spice.webp" },
  { name: "Black Pepper", price: "69 kr", img: "/images/blackpepper.jpg" },
]

export default function Shop() {
  return (
    <section id="shop" className="px-6 py-16">
      <h3 className="text-3xl font-semibold text-center mb-10">Our Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.name} className="bg-gray-100 rounded-xl shadow-md p-4 text-center">
            <img src={item.img} alt={item.name} className="rounded-lg mb-3 aspect-square w-full object-cover"/>
            <h4 className="text-xl font-semibold">{item.name}</h4>
            <p className="text-gray-700 mb-2">{item.price}</p>
            <a
              href="#contact"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
