import BlogSection1 from "../components/blog/BlogSection1"
import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"

const Blog = () => {
  return (
    <div>
        <Navbar />
        <BlogSection1 />
        <Contact />
        <Footer />
    </div>
  )
}

export default Blog