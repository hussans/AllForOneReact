import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="bg-[url('./public/assets/home.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col">
        <NavbarComponent />
        
        <div className="flex flex-col items-center justify-center flex-grow -mt-20 z-0">
          <img 
            src="../assets/homepage-text.png" 
            alt="All For One Image Text" 
            className="max-w-[600px] w-full filter drop-shadow-md xs:w-[80%]"
          />
          
          <Link to="/menu-page">
            <button className="bg-[#E93635] text-white font-semibold rounded-[25px] py-2 px-[50px] 
              shadow-md hover:bg-white hover:text-[#E93635] active:bg-[#E93635] active:text-white">
              MENU
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
