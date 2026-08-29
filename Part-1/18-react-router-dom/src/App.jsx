import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx'
import Error from './pages/Error.jsx'
import MenCollection from './pages/MenCollection.jsx'
import WomenCollection from './pages/WomenCollection.jsx'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/Men' element={<MenCollection />}/>
        <Route path='/Product/Women' element={<WomenCollection />}/>  
        
        <Route path='*' element={<Error />}></Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
