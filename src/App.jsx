import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Pokemons from './views/Pokemons'
import Home from './views/Home'
import Menu from './components/Menu'
import Details from './views/Details'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
    <Menu />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons/" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<Details />} />
    </Routes>
  </div>
  )
}

export default App