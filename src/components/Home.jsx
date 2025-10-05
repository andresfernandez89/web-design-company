import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { Clients } from './sections/clients'
import { Contact } from './sections/contact'
import { Hero } from './sections/hero'
import { Services } from './sections/services'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
