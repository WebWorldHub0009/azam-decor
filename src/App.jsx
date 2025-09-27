// [22/09/2025 12:41] MOHD ASIF: #D99021 yello
// [22/09/2025 12:42] MOHD ASIF: #172D20 Green
// [22/09/2025 12:42] MOHD ASIF: #171512 dark

import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Certificate from "./components/Certificate";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import Contact from "./components/Contact";
import ServiceDetail from "./components/ServiceComponents/ServiceDetail";
import ScrollToTop from "./ScrollToTop";




function App() {
  return (
    <>
    <Routes>
        <Route element={<Layout />}>
          <Route element={<ScrollToTop/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
