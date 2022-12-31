import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Personagem } from './components/Personagem'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/personagem/:id' element={ <Personagem /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
