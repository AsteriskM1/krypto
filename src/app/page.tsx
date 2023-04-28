import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
