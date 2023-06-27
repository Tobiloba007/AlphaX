import { useLocation } from "react-router-dom"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"
import Partners from "../components/whatWeDo/Partners"
import WhatSection1 from "../components/whatWeDo/WhatSection1"
import WhatSection2 from "../components/whatWeDo/WhatSection2"
import { useEffect } from "react"

const WhatWeDo = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="what">
        <Navbar />
        <WhatSection1 />
        <WhatSection2 />
        <Partners />
        <GetStarted />
        <div id='contactUs'>
           <ContactUs />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default WhatWeDo