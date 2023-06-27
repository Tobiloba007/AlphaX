import HomeSection1 from '../components/home/HomeSection1'
import HomeSection2 from '../components/home/HomeSection2'
import HomeSection3 from '../components/home/HomeSection3'
import HomeSection4 from '../components/home/HomeSection4'
import HomeTestimonials from '../components/home/HomeTestimonials'
import Navbar from '../components/general/Navbar'
import Section1Footer from '../components/home/Section1Footer'
import HomeFaq from '../components/home/HomeFaq'
import Contact from '../components/general/Contact'
import Footer from '../components/general/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="home">
        <Navbar />
        <HomeSection1 />
        <Section1Footer />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeTestimonials />
        <HomeFaq />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home