import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layout'
import Products from '../Pages/Products'

function App() {
  return (
  //  <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element = {<Layout />}>
      
  //     </Route>
  //   </Routes>
  //  </BrowserRouter>

  <Products />
  );
}

export default App
