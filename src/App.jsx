import React from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import About from './Section/About'
import Project from './Section/Project'
import Clients from './Section/Client'
import Contact  from './Section/Contact'
import Footer from './Section/Footer'
import Experience from './Section/Experience'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="max-w-8xl mx-auto relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App