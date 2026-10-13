import { useContext } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import Register from '../Pages/Register'
import { ThemeContext } from '../Components/ThemeContext'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import { CartProvider } from './context/CartContext'

function App() {

  const { state } = useContext(ThemeContext)

  return (
    <div className={state}>
      <BrowserRouter>
       <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Products/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Route>
        </Routes>
        </CartProvider>
      </BrowserRouter> 
      <Register />
    </div>
  );
}

export default App
