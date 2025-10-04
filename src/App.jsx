import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import FAQs from './pages/FAQs'
import Footer from './components/Footer'
import About from './pages/About'
import RequestDemo from './pages/RequestDemo'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about' element={<About />} />
        <Route path='/request-demo' element={<RequestDemo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App