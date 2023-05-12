import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import Layout from './components/Layout';
import Income from './pages/host/Income';
import Dashboard from './pages/host/Dashboard';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import UserVans from './pages/host/UserVans';

function App() {
  return (
    //relative path
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetails />} />

        <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<UserVans />} />
        </Route>

        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
