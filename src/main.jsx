import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent.jsx'
import MenuPage from './components/MenuPage.jsx'
import SayHello from './components/SayHello.jsx'
import AskQuestions from './components/AskQuestions.jsx'
import AddNumbers from './components/AddNumbers.jsx'
import MadLib from './components/MadLib.jsx'
import OddEven from './components/OddEven.jsx'
import ReverseIt from './components/ReverseIt.jsx'
import ReverseNumbers from './components/ReverseNumbers.jsx'
import EightBall from './components/EightBall.jsx'
import GreaterLessThan from './components/GreaterLessThan.jsx'
import ResPicker from './components/ResPicker.jsx'
import ItalianRes from './components/ItalianRes.jsx'
import ChineseRes from './components/ChineseRes.jsx'
import MexicanRes from './components/MexicanRes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/menu-page" element={ <MenuPage /> } />
        <Route path="/say-hello" element={ <SayHello /> } />
        <Route path="/ask-questions" element={ <AskQuestions /> } />
        <Route path="/add-numbers" element={ <AddNumbers /> } />
        <Route path="/mad-lib" element={ <MadLib /> } />
        <Route path="/odd-even" element={ <OddEven /> } />
        <Route path="/reverse-it" element={ <ReverseIt /> } />
        <Route path="/reverse-numbers" element={ <ReverseNumbers /> } />
        <Route path="/eight-ball" element={ <EightBall /> } />
        <Route path="/greater-less" element={ <GreaterLessThan /> } />
        <Route path="/restaurant-picker" element={ <ResPicker /> } />
        <Route path="/italian-restaurant" element={ <ItalianRes /> } />
        <Route path="/chinese-restaurant" element={ <ChineseRes /> } />
        <Route path="/mexican-restaurant" element={ <MexicanRes /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
