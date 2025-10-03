export default function Hero() {
  return (
    <div className="flex w-full h-screen font-serif my-3">
      {/* Left Image */}
      <section
        className="w-1/3 bg-cover bg-center"
        style={{ backgroundImage: "url('/ai-generatedbbq.jpg')" }}
      ></section>

      {/* Middle Content */}
      <section className="w-1/3 flex flex-col justify-center items-center text-center px-12">
        {/* Tagline */}
        <h4 className="italic text-lg text-white mb-3">
          A perfect day starts with the smell of barbecue!
        </h4>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl text-white font-bold tracking-wide mb-3">
          BEST BARBECUE SHOP
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl text-orange-600 font-semibold mb-8">
          Authentic Flavors
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed max-w-md mb-10">
          We bring everything you need for the ultimate grill experience —
          from premium smoked meats and handmade sauces to the finest BBQ
          rubs and accessories. Share the passion, invite your friends, and
          let’s fire up the grill!
        </p>

        {/* Buttons */}
       <div className="flex gap-6">
  {/* Wider orange button */}
  <a
    href="#details"
    className="px-10 py-3 border-2 border-orange-500 text-orange-500 font-semibold tracking-wide hover:bg-orange-500 hover:text-white transition"
  >
    MORE DETAILS
  </a>

  {/* Slightly narrower black button */}
  <a
    href="#shop"
    className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition"
  >
    SHOP NOW
  </a>
</div>
      </section>

      {/* Right Image */}
      <section
        className="w-1/3 bg-cover bg-center"
        style={{ backgroundImage: "url('/bbq-coals.jpg')" }}
      ></section>
    </div>
  )
}