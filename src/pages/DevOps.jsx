import DevOpsContent from "../components/devOps/DevOpsContent"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"

const DevOps = () => {
  return (
    <div>
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