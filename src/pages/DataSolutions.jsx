import DataContents from "../components/dataSolutions/DataContents"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"

const DataSolutions = () => {
  return (
    <div>
        <Navbar />
        <DataContents />
        <GetStarted />
        <ContactUs />
        <Contact />
        <Footer />
    </div>
  )
}

export default DataSolutions