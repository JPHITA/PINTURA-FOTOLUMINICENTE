import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// CSS

// Vendor CSS Files
import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import "remixicon/fonts/remixicon.css"
import "swiper/css/bundle"

// Template Main CSS File
import "./assets/css/style.css"

// JS
// Vendor JS Files
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// import "./assets/vendor/isotope-layout/isotope.pkgd.min.js"

// Template Main JS File
import "./assets/js/main.js"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
