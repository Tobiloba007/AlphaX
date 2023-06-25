import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import WhoSection1 from "../components/whoWeAre/WhoSection1"
import WhoSection2 from "../components/whoWeAre/WhoSection2"
import WhoSection3 from "../components/whoWeAre/WhoSection3"

const WhoWeAre = () => {
  return (
    <div>
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