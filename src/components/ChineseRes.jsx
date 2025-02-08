import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from "./NavbarComponent";
import { getChineseRestaurant } from '../services/DataService';

const ChineseRes = () => {
    const [message, setMessage] = useState('Click the button to get a Chinese restaurant!');

    const handleGetRestaurant = async () => {
        try {
            const result = await getChineseRestaurant();
            setMessage(result);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to get restaurant suggestion");
        }
    };

    return (
        <div className="bg-[url('../public/assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Chinese Restaurant </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <button className="w-full px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-white hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={handleGetRestaurant}>
                        GET RESTAURANT
                    </button>
                    <Link to="/restaurant-picker" className="w-full">
                        <button className="w-full px-8 py-2 bg-white text-black text-md font-semibold rounded-lg hover:bg-black hover:text-white active:bg-white active:text-black">
                            BACK
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChineseRes;