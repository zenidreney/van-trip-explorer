import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router'

import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Layout from './assets/components/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
