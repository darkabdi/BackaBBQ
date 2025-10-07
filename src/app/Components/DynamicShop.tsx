import { client } from '@/sanity/lib/client'
import Image from 'next/image'

interface Product{
  _id: string
  name: string
  price: string
  img: string
}

export default async function DynamicShop() {
 const products:Product[]= await client.fetch(
    `*[_type == "product"]{
    _id,
    name,
    price,
    "img": image.asset->url
  }`
 )
 
 
   return (
    <section id="shop" className="px-6 py-16">
      <h3 className="text-3xl font-semibold text-center mb-10">Our Products</h3>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found. Add some in Sanity Studio!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
            >
              <div className="aspect-square w-full mb-3 relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="text-gray-700 mb-3">{item.price}</p>

              <a
                href="#contact"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
