import CyberContent from "../components/cyberSecurity/CyberContent"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"

const CyberSecurity = () => {
  return (
    <div>
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