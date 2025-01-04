import './App.css'
import AsteroidPage from './pages/AsteroidPage'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/asteroid' element={<AsteroidPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
