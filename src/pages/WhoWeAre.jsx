import { useLocation } from "react-router-dom"
import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import WhoSection1 from "../components/whoWeAre/WhoSection1"
import WhoSection2 from "../components/whoWeAre/WhoSection2"
import WhoSection3 from "../components/whoWeAre/WhoSection3"
import { useEffect } from "react"

const WhoWeAre = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="who">
        <Navbar />
        <WhoSection1 />
        <WhoSection2 />
        <WhoSection3 />
        <Contact />
        <Footer />
    </div>
  )
}

export default WhoWeAre