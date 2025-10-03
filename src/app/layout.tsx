import './globals.css'
import { Merriweather, Bebas_Neue } from "next/font/google"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
  variable: "--font-merriweather",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})


import Navbar from '../app/Components/Navbar'
import Footer from '../app/Components/Footer'
import TopHero from './Components/TopHero'

export const metadata = {
  title: 'Backa BBQ',
  description: 'Backa bbq grill',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"className={`${merriweather.variable} ${bebas.variable}`}>
      <body className="font-serif">
         <TopHero/>
 
        {children}
        <Footer />
      </body>
    </html>
  )
}