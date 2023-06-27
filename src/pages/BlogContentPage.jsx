import { useLocation } from "react-router-dom"
import BlogContent from "../components/blog/BlogContent"
import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import { useEffect } from "react"

const BlogContentPage = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);
  return (
    <div id="blog-content">
        <Navbar />
        <BlogContent />
        <Contact />
        <Footer />
    </div>
  )
}

export default BlogContentPage