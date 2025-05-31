import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Private } from './pages/private'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home></Home>}></Route>
      <Route path='/private' element={<Private></Private>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
