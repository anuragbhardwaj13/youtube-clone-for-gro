
import './App.css'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom"

import Player from './components/Player'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player/:postId' element={<Player />} />
      </Routes>
    </>
  )
}

export default App
