export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 text-center">
      <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
      <p className="text-lg text-gray-700 mb-6">
        Questions, bulk orders, or special requests? Reach out to us!
      </p>
      <a
        href="mailto:info@spicehaven.se"
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-700 transition"
      >
        Email Us
      </a>
    </section>
  )
}