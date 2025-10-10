

import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description?: string;
  img: string;
}

export default async function DynamicShop() {
  const products: Product[] = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      description,
      "img": image.asset->url
    }`
  );
  console.log(products)

  return (
    <section
      id="shop"
      className="px-6 py-20 bg-gradient-to-b from-slate-900 via-red-900 to-amber-600 text-white"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 font-serif tracking-wide">
        Our Signature Spices
      </h3>

      {products.length === 0 ? (
        <p className="text-center text-gray-300">
          No products found. Add some in Sanity Studio!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-black/30 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-lg p-5 text-center hover:scale-105 hover:shadow-orange-600/40 transition-all duration-300"
            >
              <div className="aspect-square w-full mb-4 overflow-hidden rounded-xl relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h4 className="text-2xl font-semibold text-orange-400 mb-2 font-serif">
                {item.name}
              </h4>

              {item.description && (
                <p className="text-gray-200 text-sm mb-5 max-w-sm mx-auto leading-relaxed">
                  {item.description}
                </p>
              )}

              <a
                href={`mailto:info@backabbq.com?subject=Product Inquiry: ${encodeURIComponent(
                  item.name
                )}`}
                className="inline-block border border-orange-500 text-orange-400 font-semibold px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all"
              >
                Contact for Order
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
