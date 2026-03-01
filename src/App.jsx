import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Arkiruoka from './pages/Arkiruoka'
import Kasvis from './pages/Kasvis'
import Makeat from './pages/Makeat'
import Contact from './pages/Contact'
import logo from './assets/favicon.png'
import Footer from "./components/Footer"
import Pasta from "./pages/Pasta"
import Tortilla from "./pages/Tortilla"
import Wokki from "./pages/Wokki"
import Leipajuusto from "./pages/Leipajuusto"
import Fetaleipa from "./pages/Fetaleipa"
import Chana from "./pages/Chana"
import Muffinit from "./pages/Muffinit"
import Browniet from "./pages/Browniet"
import Pannarit from "./pages/Pannarit"
import ScrollToTop from "./components/ScrollToTop"



export default function App() {
  const location = useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <img 
              src= {logo}
              alt="logo" 
              width="35" 
              height="35" 
            />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
              <Link 
  className={`nav-link navbar-font ${location.pathname === "/" ? "active-link" : ""}`} 
  to="/"
>
  Home
</Link>
              </li>

              <li className="nav-item">
              <Link 
  className={`nav-link navbar-font ${
    location.pathname.startsWith("/arkiruoka") ||
    location.pathname.startsWith("/resepti/pasta") ||
    location.pathname.startsWith("/resepti/tortilla") ||
    location.pathname.startsWith("/resepti/wokki")
      ? "active-link"
      : ""
  }`} 
  to="/arkiruoka"
>
  Arkiruoka
</Link>

              </li>

              <li className="nav-item">
              <Link 
  className={`nav-link navbar-font ${
    location.pathname.startsWith("/kasvis") ||
    location.pathname.startsWith("/resepti/intialainen") ||
    location.pathname.startsWith("/resepti/kurkkuleipa") ||
    location.pathname.startsWith("/resepti/kikherne")
      ? "active-link"
      : ""
  }`} 
  to="/kasvis"
>
  Kasvis
</Link>

              </li>

              <li className="nav-item">
              <Link 
  className={`nav-link navbar-font ${
    location.pathname.startsWith("/makeat") ||
    location.pathname.startsWith("/resepti/muffinit") ||
    location.pathname.startsWith("/resepti/browniet") ||
    location.pathname.startsWith("/resepti/pannarit")
      ? "active-link"
      : ""
  }`} 
  to="/makeat"
>
  Makeat
</Link>

              </li>
              </ul>
              <ul className= "navbar-nav ms-auto">

              <li className="nav-item">
              <Link 
  className={`nav-link navbar-font ${location.pathname === "/contact" ? "active-link" : ""}`} 
  to="/contact"
>
  Contact
</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div style={{ padding: "80px 20px" }}>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arkiruoka" element={<Arkiruoka />} />
          <Route path="/kasvis" element={<Kasvis />} />
          <Route path="/makeat" element={<Makeat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resepti/pasta" element={<Pasta />} />
          <Route path="/resepti/tortilla" element={<Tortilla />} />
          <Route path="/resepti/wokki" element={<Wokki />} />
          <Route path="/resepti/intialainen" element={<Leipajuusto />} />
          <Route path="/resepti/kurkkuleipa" element={<Fetaleipa />} />
          <Route path="/resepti/kikherne" element={<Chana />} />
          <Route path="/resepti/muffinit" element={<Muffinit />} />
          <Route path="/resepti/browniet" element={<Browniet />} />
          <Route path="/resepti/pannarit" element={<Pannarit />} />



        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
