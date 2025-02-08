import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import { greetUser } from '../services/DataService';

const SayHello = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('Please enter a name!');

    const getGreeting = async () => {
        if (!name.trim()) {
            setMessage("Please enter a valid name!");
            return;
        }

        try {
            const result = await greetUser(name);
            setMessage(result);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to get greeting");
        }
    };

    return (
        <div className="bg-[url('../public/assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Hello, World </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <input type="text" placeholder="Enter name" className="px-4 py-2 rounded-lg focus:outline-none border-none"
                        value={name} onChange={(e) => setName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && getGreeting()} />
                    <button className="px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-[#ffffff] hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={getGreeting}>
                        Enter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SayHello;