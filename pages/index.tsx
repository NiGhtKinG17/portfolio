import About from '@/components/About'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-[#06283D] text-[#DFF6FF] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-[#061f3d] scrollbar-thumb-[#47B5FF]">
      <Head>
        <title>Hritik's Portfolio</title>
      </Head>
      <Header />
      <section id="landing" className="snap-center">
        <Landing />
      </section>
      <section id="intro" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="education" className="snap-center">
        <Education />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="certificates" className="snap-center">
        <Certificates />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  )
}
