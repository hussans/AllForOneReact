import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent.jsx'
import MenuPage from './components/MenuPage.jsx'
import SayHello from './components/SayHello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/menu-page" element={ <MenuPage /> } />
        <Route path="/say-hello" element={ <SayHello /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
