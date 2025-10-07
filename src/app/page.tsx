import Hero from '../app/Components/Hero'
import Shop from '../app/Components/Shop'
import About from '../app/Components/About'
import Contact from '../app/Components/Contact'
import Paralax from './Components/Paralax'
import DynamicShop from './Components/DynamicShop'


export default function HomePage() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-slate-900 via-red-900 to-amber-500">
     
      <Hero />
      <Shop />
      <DynamicShop/>
      <About />
      <Contact />
    </main>
  )
}