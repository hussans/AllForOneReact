import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";

const AskQuestions = () => {
    const [name, setName] = useState('');
    const [wakeTime, setWakeTime] = useState('');
    const [message, setMessage] = useState('Answer the questions!');

    const getAnswer = async () => {
        if (!name.trim() || !wakeTime.trim()) {
            setMessage("Please fill in both fields!");
            return;
        }

        try {
            const response = await fetch(`https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/TwoQuestion/TwoQuestions/${name}/${wakeTime}`);
            const text = await response.text();
            setMessage(text);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to get answer");
        }
    };

    return (
        <div className="bg-[url('./assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Asking Questions </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium">{message}</p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="space-y-2">
                        <p className="text-white"> What's your name? </p>
                        <input type="text" placeholder="Enter name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">What time did you wake up?</p>
                        <input type="text" placeholder="Enter wake up time" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && getAnswer()} />
                    </div>
                    <button className="px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-[#ffffff] hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={getAnswer}>
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AskQuestions;