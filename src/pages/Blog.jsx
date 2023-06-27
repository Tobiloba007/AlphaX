import { useLocation } from "react-router-dom"
import BlogSection1 from "../components/blog/BlogSection1"
import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import { useEffect } from "react"

const Blog = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div id="blog">
        <Navbar />
        <BlogSection1 />
        <Contact />
        <Footer />
    </div>
  )
}

export default Blog