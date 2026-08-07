import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

function App() {
  return (
    <div className='bg-black text-white h-screen min-h-[100]  '>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
