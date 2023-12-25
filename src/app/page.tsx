import Navbar from '@/components/Navbar'
import Contact from '@/sections/Contact'
import Hero from '@/sections/Hero'
import Parallax from '@/sections/Parallax'
import Portfolio from '@/sections/Portfolio'
import Services from '@/sections/Services'

export default function Home() {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section >
        <Parallax type='services' />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}
