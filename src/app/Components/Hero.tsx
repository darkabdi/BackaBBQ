import { client } from "@/sanity/lib/client"


export default async function Hero() {
  const hero = await client.fetch(`
    *[_type == 'hero'][0]{
    tagline,
    mainHeading,
    subHeading,
    description,
    primaryButtonText
    } `)
  return (
    <>
    <div className="flex flex-col md:flex-row w-full h-auto md:h-screen font-serif pb-0 my-3">
  {/* Left Image */}
  <section
    className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center"
    style={{ backgroundImage: "url('/ai-generatedbbq.jpg')" }}
  ></section>

  {/* Middle Content */}
  <section className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-6 py-10">
    {/* Tagline */}
    <h4 className="italic text-lg text-white mb-3">
      {hero?.tagline || 'A perfect day starts with the smell of barbecue!'} 
    </h4>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide mb-3">
     {hero?.mainHeading || 'BEST BARBECUE SHOP'} 
    </h1>

    {/* Subheading */}
    <h2 className="text-2xl md:text-3xl text-orange-600 font-semibold mb-8">
     {hero?.subHeading || 'Authentic Flavors'} 
    </h2>

    {/* Paragraph */}
    <p className="text-gray-300 leading-relaxed max-w-md mb-10">
      {hero?.description || ' We bring everything you need for the ultimate grill experience from premium smoked meats and handmade sauces to the finest BBQ rubs and accessories. Share the passion, invite your friends, and let’s fire up the grill!'}</p>

    {/* Buttons */}
    <div className="flex gap-6 flex-col sm:flex-row">
      {/* Wider orange button */}
      <a
        href="#details"
        className="px-10 py-3 border-2 border-orange-500 text-orange-500 font-semibold tracking-wide hover:bg-orange-500 hover:text-white transition text-center"
      >
      {hero?.primaryButtonText || 'MORE DETAILS'}
      </a>

     
    </div>
  </section>

  {/* Right Image */}
  <section
    className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center"
    style={{ backgroundImage: "url('/bbq-coals.jpg')" }}
  ></section>
</div>

 

</>

  )
}