import React from 'react'
import Header from './component/Header'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './component/Home'
import About from './component/About'
import Blog from './component/Blog'
import Login from './component/Login'
import "./App.css"


function App() {
  return (
    <div>
      <Router>
        <Header/>
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/login" element={<Login/>} />


            </Routes>
      </Router>

    </div>
  )
}

export default App
