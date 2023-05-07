import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import NavbarComponent from "./components/NavbarComponent"

function App() {
  return (
      <BrowserRouter>
       <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
