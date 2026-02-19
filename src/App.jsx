import { useState } from 'react'
import './App.css'
import Individual from './views/Individual'
import Equipos from './views/Equipos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Individual />  } />
        <Route path='/equipos' element={<Equipos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
