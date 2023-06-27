import { useEffect } from "react"
import DataContents from "../components/dataSolutions/DataContents"
import Contact from "../components/general/Contact"
import ContactUs from "../components/general/ContactUs"
import Footer from "../components/general/Footer"
import GetStarted from "../components/general/GetStarted"
import Navbar from "../components/general/Navbar"
import { useLocation } from "react-router-dom"

const DataSolutions = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="data">
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