import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router'

import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Layout from './assets/components/Layout'
import Vans from './assets/pages/Vans'
import VanDetail from './assets/pages/VanDetail'
import NotFound from './assets/pages/NotFound'

import { LocationContextProvider } from './assets/context/LocationContext'


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
