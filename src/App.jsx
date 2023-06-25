import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WhatWeDo from "./pages/WhatWeDo"
import WhoWeAre from "./pages/WhoWeAre"
import CyberSecurity from "./pages/CyberSecurity"
import DevOps from "./pages/DevOps"
import DataSolutions from "./pages/DataSolutions"
import Blog from "./pages/Blog"
import BlogContentPage from "./pages/BlogContentPage"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/what-we-do' element={<WhatWeDo />} />
      <Route path='/who-we-are' element={<WhoWeAre />} />
      <Route path='/cyber-security' element={<CyberSecurity />} />
      <Route path='/dev-ops' element={<DevOps />} />
      <Route path='/data-solutions' element={<DataSolutions />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog-content/:id' element={<BlogContentPage />} />
    </Routes>
  )
}

export default App
