import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Stats from "./components/Stats";
import CampusSection from './components/CampusSection'
import AdmissionEnquiry from "./components/AdmissionEnquiry";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Notices from "./components/Notices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <Stats />
      <CampusSection />
      <AdmissionEnquiry />
      <About />
      <Facilities />
      <Gallery />
      <Notices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;