import { useEffect } from "react"
import DevOpsContent from "../components/devOps/DevOpsContent"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"
import { useLocation } from "react-router-dom"

const DevOps = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="dev">
        <Navbar />
        <DevOpsContent />
        <GetStarted />
        <ContactUs />
        <Contact />
        <Footer />
    </div>
  )
}

export default DevOps