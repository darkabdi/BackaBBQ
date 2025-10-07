import Hero from '../app/Components/Hero'
import Shop from '../app/Components/Shop'
import About from '../app/Components/About'
import Contact from '../app/Components/Contact'
import Paralax from './Components/Paralax'
import DynamicShop from './Components/DynamicShop'


export default function HomePage() {
  return (
        <>
      <title>Backa BBQ – Best Barbecue Shop</title>
      <meta name="description" content="Premium barbecue spices and rubs delivered to your kitchen." />
      <link rel="icon" href="/logo.png" />      {/* local */}
      {/* OR external */}
      {/* <link rel="icon" href="https://example.com/myfavicon.png" type="image/png" /> */}
   
    <main className="flex flex-col bg-gradient-to-b from-slate-900 via-red-900 to-amber-500">
     
      <Hero />
      <Shop />
      <DynamicShop/>
      <About />
      <Contact />
    </main>
     </>
  )
}