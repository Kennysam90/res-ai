import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Index from "./Pages/Home/Index"
import About from './Pages/About-Page/About'
import Api from './Pages/Api-Docs/1st-Api'
import ApiHomePage from './Pages/Api-Docs/Api-Home-page'
import { Cards } from './Pages/Api-Docs/Cardsdata'
import DocPage from './Pages/Api-Docs/Docpage'

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/apidoc' element={<Api />} />
          <Route path='/apihome' element={<ApiHomePage />} />
          <Route path="cardsdata" element={<Cards />} />
          <Route path='/docpage' element={<DocPage />} />
        </Routes>
       </Router>
    </>
  )
}

export default App
 