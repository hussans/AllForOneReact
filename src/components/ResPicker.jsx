import NavbarComponent from "./NavbarComponent";
import { Link } from "react-router-dom";

const ResPicker = () => {
    return (
        <div className="bg-[url('./assets/home.png')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col">
            <NavbarComponent />
            
            <div className="flex-1 flex flex-col items-center justify-center px-4 min-h-[60vh]">
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-2"> Restaurant Picker </h1>
                    <p className="text-white text-lg md:text-xl"> Choose a Restaurant: </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-[600px]">
                    <Link to="/italian-restaurant">
                    <button className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-2xl hover:bg-[#dadada] active:bg-[#bebebe] shadow-md transition-colors duration-200 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-semibold"> Italian </span>
                    </button>
                    </Link>
                    <Link to="/chinese-restaurant">
                    <button className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-2xl hover:bg-[#dadada] active:bg-[#bebebe] shadow-md transition-colors duration-200 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-semibold"> Chinese </span>
                    </button>
                    </Link>
                    <Link to="/mexican-restaurant">
                    <button className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-2xl hover:bg-[#dadada] active:bg-[#bebebe] shadow-md transition-colors duration-200 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-semibold"> Mexican </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResPicker;