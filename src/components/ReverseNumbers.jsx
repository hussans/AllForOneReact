import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import { reverseNumbers } from '../services/DataService';

const ReverseNumbers = () => {
    const [numberInput, setNumberInput] = useState('');
    const [message, setMessage] = useState('Reverse numbers!');

    const handleReverse = async () => {
        const input = numberInput.trim();
        
        if (!input || isNaN(input)) {
            setMessage("Please enter a valid number!");
            return;
        }

        try {
            const result = await reverseNumbers(input);
            setMessage(`Reversed: ${result}`);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to reverse number");
        }
    };

    return (
        <div className="bg-[url('../public/assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Reverse Numbers </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <input type="text" placeholder="Enter number" className="px-4 py-2 rounded-lg focus:outline-none border-none" value={numberInput} onChange={(e) => setNumberInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleReverse()} />
                    <button className="px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-white hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={handleReverse}>
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReverseNumbers;