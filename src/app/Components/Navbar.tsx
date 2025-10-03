export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-4 sticky top-0 z-50">
      <h1 className="text-3xl text-orange-600 font-bold">BackaBBQ</h1>
     
      <a
        href="#shop"
        className="hidden text-2xl md:block bg-yellow-600 text-white px-4 py-2 g hover:bg-yellow-700 transition"
      >
        Join Us
      </a>
    </nav>
  )
}