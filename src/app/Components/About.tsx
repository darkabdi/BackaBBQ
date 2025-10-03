
export default function About() {
  return (
<section id="about" className="flex flex-col md:flex-row items-center px-6 py-16 gap-10 md:gap-16">
  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/jos-rub.jpg"
      alt="Spices"
      className="rounded-3xl w-full max-w-md shadow-lg object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
    <h2 className="text-4xl font-semibold mb-6 text-gray-900">About Backa BBQ</h2>
    <p className="text-lg text-gray-700 max-w-lg">
      We source the finest spices from around the world, bringing authentic flavors directly to your kitchen. 
      Every spice is carefully selected to ensure quality, aroma, and freshness.
    </p>
  </div>
</section>

  )
}
