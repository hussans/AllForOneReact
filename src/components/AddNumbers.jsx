import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";

const AddNumbers = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [message, setMessage] = useState('Enter two numbers!');

    const getSum = async () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setMessage("Please enter valid numbers!");
            return;
        }

        try {
            const response = await fetch(`https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/AddTwoNumbers/Sum/${number1}/${number2}`);
            const result = await response.text();
            setMessage(`${result}`);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to calculate sum");
        }
    };

    return (
        <div className="bg-[url('./assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Add Two Numbers </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="space-y-2">
                        <p className="text-white"> Enter the first number: </p>
                        <input type="text" placeholder="Enter number" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-white"> Enter the second number: </p>
                        <input type="text" placeholder="Enter number" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={num2} onChange={(e) => setNum2(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && getSum()} />
                    </div>
                    <button className="px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-[#ffffff] hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={getSum}>
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNumbers;