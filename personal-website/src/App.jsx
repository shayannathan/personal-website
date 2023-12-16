import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gradient-to-tr from-[#60072C]
    via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path='/' exact element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        {/* <Hero/>
        <About />
        <Contact /> */}
      </div>
    </BrowserRouter>
  )
}

export default App