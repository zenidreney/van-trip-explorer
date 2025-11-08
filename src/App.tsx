import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import NotFound from './pages/NotFound'

import { LocationContextProvider } from './context/LocationContext'


function App() {

  return (
    <LocationContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:vanId" element={<VanDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocationContextProvider>
  )
}

export default App
