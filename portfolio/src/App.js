import React from 'react'
import Header from './component/Header'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.css"
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
