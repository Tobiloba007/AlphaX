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

const Home = () => {
  return (
    <div>
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