import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import { getEightBallAnswer } from '../services/DataService';

const EightBall = () => {
    const [question, setQuestion] = useState('');
    const [message, setMessage] = useState('Ask me anything!');

    const handleGetAnswer = async () => {
        const userQuestion = question.trim();
        
        if (!userQuestion) {
            setMessage("Please enter a question!");
            return;
        }

        try {
            const answer = await getEightBallAnswer(userQuestion);
            setMessage(answer);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to get answer");
        }
    };

    return (
        <div className="bg-[url('../public/assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-4xl font-bold mb-8"> Eight Ball </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-md">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <input type="text" placeholder="Enter your question" className="px-4 py-2 rounded-lg focus:outline-none border-none" value={question} onChange={(e) => setQuestion(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleGetAnswer()} />
                    <button className="px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-white hover:text-[#E93635] active:bg-[#E93635] active:text-white" onClick={handleGetAnswer}>
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EightBall;