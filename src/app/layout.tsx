import './globals.css'
import Navbar from '../app/Components/Navbar'
import Footer from '../app/Components/Footer'
import TopHero from './Components/TopHero'

export const metadata = {
  title: 'Backa BBQ',
  description: 'Backa bbq grill',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
         <TopHero/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}