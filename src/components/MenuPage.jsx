import NavbarComponent from "./NavbarComponent"
import { Link } from "react-router-dom"

const MenuPage = () => {

    return (
        <>
            <div className="bg-[url('../public/assets/home.png')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col">
            <NavbarComponent />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-[700px] mx-auto mt-20 md:mt-32 lg:mt-52 p-4">
                    <Link to="/say-hello">
                    <button className="bg-white rounded-2xl p-10  hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/say-hello.png" alt="Black Quotation Marks Icon" />
                    </button>
                    </Link>
                    <Link to="/ask-questions">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/asking-questions.png" alt="Black Question Text Box Icon" />
                    </button>
                    </Link>
                    <Link to="/add-numbers">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/add-numbers.png" alt="Black Mathematical Plus Icon" /> 
                    </button>
                    </Link>
                    <Link to="/mad-lib">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/madlib.png" alt="Black Open Book Icon" /> 
                    </button>
                    </Link>
                    <Link to="/odd-even">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/odd-even.png" alt="Black Scale Icon" />
                    </button>
                    </Link>
                    <Link to="/reverse-it">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/reverse-it.png" alt="Black Reverse Icon" />
                    </button>
                    </Link>
                    <Link to="/reverse-numbers">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/reverse-numbers.png" alt="Black Reverse Icon with Numbers" />
                    </button>
                    </Link>
                    <Link to="/eight-ball">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/magic-eightball.png" alt="Black Magic Eight Ball Icon" />
                    </button>
                    </Link>
                    <Link to="/greater-less">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/question-sign.png" alt="Black Question Mark Icon" />
                    </button>
                    </Link>
                    <Link to="/restaurant-picker">
                    <button className="bg-white rounded-2xl p-10 hover:bg-[#dadada] active:bg-[#bebebe] flex justify-center items-center shadow-md md:col-start-2 lg:col-auto">
                        <img className="min-w-[50px] drop-shadow-md" src="./assets/restaurant-picker.png" alt="Black Serving Plate icon" />
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MenuPage