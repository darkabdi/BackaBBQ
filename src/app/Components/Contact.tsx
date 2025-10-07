export default function Contact() {
  return (
    <section id="contact" className="flex flex-col md:flex-row-reverse items-center px-6 py-16 gap-10 md:gap-16">
      <div className="md:w-1/2 flex justify-center">
        <img src="/LNS03730.JPG" 
        alt="" 
        className="rounded-3xl w-full max-w-md shadow-lg object-cover" />
      </div>

      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
       <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
      <p className="text-lg text-gray-700 mb-6">
        Questions, bulk orders, or special requests? Reach out to us!
      </p>
     <a
      href="mailto:info@spicehaven.se"
      className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-700 transition 
             w-1/2 mx-auto md:mx-0 md:self-center"
      >
      Email Us
        </a>
      </div>
     
    </section>
  )
}