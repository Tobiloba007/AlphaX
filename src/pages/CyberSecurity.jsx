import { useLocation } from "react-router-dom"
import CyberContent from "../components/cyberSecurity/CyberContent"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"
import { useEffect } from "react"

const CyberSecurity = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="cyber">
        <Navbar />
        <CyberContent />
        <GetStarted />
        <ContactUs />
        <Contact />
        <Footer />
    </div>
  )
}

export default CyberSecurity