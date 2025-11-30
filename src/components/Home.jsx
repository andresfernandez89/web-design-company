import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { Clients } from './sections/clients'
import { Contact } from './sections/contact'
import { Hero } from './sections/hero'
import { Services } from './sections/services'

export default function Home({ lang, dict }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header lang={lang} dict={dict} />
      <main className='flex-grow'>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Clients dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  )
}
