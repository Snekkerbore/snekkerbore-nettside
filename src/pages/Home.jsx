import { useEffect } from 'react'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import OurStory from '../components/OurStory'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Presse from '../components/Presse'
import Podcasts from '../components/Podcasts'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Social from '../components/Social'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    target?.scrollIntoView()
  }, [])

  return (
    <main>
      <Hero />
      <TrustedBrands />
      <OurStory />
      <Services />
      <Portfolio />
      <Presse />
      <Podcasts />
      <Testimonials />
      <Partners />
      <Social />
      <Contact />
    </main>
  )
}
