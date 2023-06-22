import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WhatWeDo from "./pages/WhatWeDo"
import WhoWeAre from "./pages/WhoWeAre"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/what-we-do' element={<WhatWeDo />} />
      <Route path='/who-we-are' element={<WhoWeAre />} />
    </Routes>
  )
}

export default App
