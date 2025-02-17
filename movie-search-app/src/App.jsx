import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>
    
   
  )
}

export default App

