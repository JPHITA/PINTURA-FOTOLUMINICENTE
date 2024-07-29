import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// CSS
// Favicons
import "./assets/img/favicon.png"
import "./assets/img/apple-touch-icon.png"

// Vendor CSS Files
import "aos/dist/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/remixicon/remixicon.css"
import "swiper/css/bundle"

// Template Main CSS File
import "./assets/css/style.css"

// JS
// Vendor JS Files
  import "./assets/vendor/purecounter/purecounter_vanilla.js"
  import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
  import "./assets/vendor/isotope-layout/isotope.pkgd.min.js"

  // Template Main JS File
  import "./assets/js/main.js"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
