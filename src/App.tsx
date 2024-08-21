import AOS from 'aos';
import { useEffect } from 'react';
import { useRef } from 'react';

import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
// import { Video } from "./components/Video.tsx";
import { Clients } from './components/Clients.tsx';
// import { Portfolio } from "./components/Portfolio.tsx";
// import { Testimonials } from "./components/Testimonials.tsx";
import { Producto } from './components/Producto.tsx';
import { About } from "./components/About.tsx";
import { Problema_a_resolver } from "./components/Problema_a_resolver.tsx";
// import { CalltoAction } from './components/CalltoAction.tsx';
import { Team } from "./components/Team.tsx";
import { Pricing } from './components/Pricing.tsx';
import { Faq } from "./components/Faq.tsx";
import { Contact } from './components/Contact.tsx';
// import { Footer } from './components/Footer.tsx';


function App() {
  const preloader = useRef<HTMLDivElement>(null);

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false
  });

  useEffect(() => {
    const t = setTimeout(() => {
      if (preloader.current) preloader.current.remove();
    }, 500);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header/>

      <Hero />

      <main id="main">

        <About />

        <Team />

        <Problema_a_resolver />

        <Producto />

        <Pricing />

        <Clients />

        <Faq />

        <Contact />

      </main>
      {/* <!-- End #main --> */}

      {/* <Footer /> */}

      <div id="preloader" ref={preloader}></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


      <script src="./assets/js/main.js"></script>
    </>
  )
}

export default App
