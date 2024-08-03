import AOS from 'aos';
import { useEffect } from 'react';
import { useRef } from 'react';

import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Video } from "./components/Video.tsx";
import { Clients } from './components/Clients.tsx';
// import { Portfolio } from "./components/Portfolio.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { Services } from './components/Services.tsx';
import { About } from "./components/About.tsx";
import { Counts } from "./components/Counts.tsx";
import { CalltoAction } from './components/CalltoAction.tsx';
import { Team } from "./components/Team.tsx";
import { Pricing } from './components/Pricing.tsx';
import { Faq } from "./components/Faq.tsx";
import { Contact } from './components/Contact.tsx';



function App() {
  const preloader = useRef<HTMLDivElement>(null);

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  useEffect(() => {
    if (preloader.current) preloader.current.remove();
  }, []);

  return (
    <>
      <Header/>

      <Hero />

      <main id="main">

        <About />

        <Counts />

        <Video />

        <Clients />

        <Testimonials />

        <Services />

        <CalltoAction />

        {/* <Portfolio /> */}

        <Team />

        <Pricing />

        <Faq />

        <Contact />

      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>OnePage</h3>
                <p>
                  A108 Adam Street <br/>
                  New York, NY 535022<br/>
                  United States <br/><br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="#" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>OnePage</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. --> */}
              {/* <!-- You can delete the links only if you purchased the pro version. --> */}
              {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
              {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <div id="preloader" ref={preloader}></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


      <script src="./assets/js/main.js"></script>
    </>
  )
}

export default App
