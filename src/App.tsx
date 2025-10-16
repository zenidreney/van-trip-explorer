import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router'

import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Layout from './assets/components/Layout'
import Vans from './assets/pages/Vans'
import NotFound from './assets/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
