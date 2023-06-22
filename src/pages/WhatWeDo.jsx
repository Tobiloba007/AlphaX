import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"
import Partners from "../components/whatWeDo/Partners"
import WhatSection1 from "../components/whatWeDo/WhatSection1"
import WhatSection2 from "../components/whatWeDo/WhatSection2"

const WhatWeDo = () => {
  return (
    <div>
        <Navbar />
        <WhatSection1 />
        <WhatSection2 />
        <Partners />
        <GetStarted />
        <ContactUs />
        <Contact />
        <Footer />
    </div>
  )
}

export default WhatWeDo