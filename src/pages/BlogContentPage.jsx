import BlogContent from "../components/blog/BlogContent"
import Contact from "../components/general/Contact"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"

const BlogContentPage = () => {
  return (
    <div>
        <Navbar />
        <BlogContent />
        <Contact />
        <Footer />
    </div>
  )
}

export default BlogContentPage