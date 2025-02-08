import { useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import { generateMadLib } from '../services/DataService';

const MadLib = () => {
    const [villageName, setVillageName] = useState('');
    const [characterAdj, setCharacterAdj] = useState('');
    const [classType, setClassType] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [year, setYear] = useState('');
    const [treasureName, setTreasureName] = useState('');
    const [mentorName, setMentorName] = useState('');
    const [companionName, setCompanionName] = useState('');
    const [villainName, setVillainName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [message, setMessage] = useState('Your story will appear here!');

    const generateStory = async () => {
        if (!villageName || !characterAdj || !classType || !characterName || 
            !year || !treasureName || !mentorName || !companionName ||  
            !villainName || !eventLocation) {
            setMessage("Please fill all fields before generating!");
            return;
        }

        try {
            const story = await generateMadLib(
                villageName,
                characterAdj,
                classType,
                characterName,
                year,
                treasureName,
                mentorName,
                companionName,
                villainName,
                eventLocation
            );
            setMessage(story);
        } catch (error) {
            console.error('Error:', error);
            setMessage("Failed to create story");
        }
    };

    return (
        <div className="bg-[url('../public/assets/home.png')] bg-cover min-h-screen flex flex-col">
            <NavbarComponent />

            <div className="flex-1 flex flex-col items-center p-4">
                <h1 className="text-white text-4xl font-bold my-8"> MadLib </h1>
                <div className="bg-white bg-opacity-50 rounded-lg p-6 mb-8 w-full max-w-4xl">
                    <p className="text-center text-xl font-medium"> {message} </p>
                </div>
                <div className="w-full max-w-4xl flex flex-wrap gap-4 justify-between">
                    <div className="flex-1 min-w-[300px] space-y-4">
                        <div className="space-y-2">
                            <p className="text-white"> Enter the village name: </p>
                            <input type="text" placeholder="Enter village name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={villageName} onChange={(e) => setVillageName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the character adjective: </p>
                            <input type="text" placeholder="Enter character adjective" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={characterAdj} onChange={(e) => setCharacterAdj(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the class type: </p>
                            <input type="text" placeholder="Enter class type" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={classType} onChange={(e) => setClassType(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the character name: </p>
                            <input type="text" placeholder="Enter character name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the year: </p>
                            <input type="text" placeholder="Enter year" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={year} onChange={(e) => setYear(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex-1 min-w-[300px] space-y-4">
                        <div className="space-y-2">
                            <p className="text-white"> Enter the treasure name: </p>
                            <input type="text" placeholder="Enter treasure name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={treasureName} onChange={(e) => setTreasureName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the mentor name: </p>
                            <input type="text" placeholder="Enter mentor name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={mentorName} onChange={(e) => setMentorName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the companion name: </p>
                            <input type="text" placeholder="Enter companion name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={companionName} onChange={(e) => setCompanionName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the villain name: </p>
                            <input type="text" placeholder="Enter villain name" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={villainName} onChange={(e) => setVillainName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white"> Enter the event location: </p>
                            <input type="text" placeholder="Enter event location" className="w-full px-4 py-2 rounded-lg focus:outline-none border-none" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && generateStory()} />
                        </div>
                    </div>
                </div>
                <button className="mt-8 px-8 py-2 bg-[#E93635] text-white text-md font-semibold rounded-lg hover:bg-white hover:text-[#E93635] transition-colors duration-200 w-full max-w-4xl" onClick={generateStory}>
                    ENTER
                </button>
            </div>
        </div>
    );
};

export default MadLib;