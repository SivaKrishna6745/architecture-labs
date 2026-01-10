import { useState } from 'react';
import './App.css';
import challenges, { type Challenge } from './challenges';

function App() {
    const [currentChallenge, setCurrentChallenge] = useState<Challenge>('Day 01: Use Debounce');
    const ActiveComponent = challenges[currentChallenge];

    return (
        <div className="bg-slate-900">
            <div className="text-5xl py-3 text-center border-b-2 border-slate-800 font-mono font-bold">Frontend 30</div>
            <div className="grid grid-cols-[420px_1fr] h-[calc(100vh-10rem)] text-white">
                <div className="flex flex-col border-r-2 border-slate-800 py-4 h-full overflow-y-scroll">
                    {(Object.keys(challenges) as Challenge[]).map((challenge: Challenge) => {
                        return (
                            <button
                                key={challenge}
                                className={`cursor-pointer py-4 border border-slate-800 mx-3 my-2 rounded-md shadow-md shadow-white/20 active:shadow-lg active:-translate-y-0.5 active:bg-slate-700 ${
                                    challenge === currentChallenge && 'bg-slate-700 border-l-4 border-l-slate-950'
                                }`}
                                onClick={() => setCurrentChallenge(challenge)}
                            >
                                {challenge}
                            </button>
                        );
                    })}
                </div>
                <div className="w-full h-full overflow-y-scroll p-12">
                    <ActiveComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
