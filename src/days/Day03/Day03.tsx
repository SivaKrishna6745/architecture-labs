import { useEffect, useState } from 'react';
import EventEmitter from './EventEmitter';

const DisplayScreen = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [showDisplay, setShowDisplay] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = EventEmitter.subscribe('notification', (data: string) => {
            setLogs((prev) => [...prev, data]);
        });

        return () => {
            console.log('cleaning up listener...');
            unsubscribe();
        };
    }, []);

    return (
        <>
            <button
                className="btn py-2 px-6 cursor-pointer bg-green-500 rounded-sm active:scale-95"
                onClick={() => setShowDisplay(!showDisplay)}
            >
                {showDisplay ? 'Turn Monitor OFF' : 'Turn Monitor ON'}
            </button>
            {showDisplay ? (
                <div className="bg-gray-900 text-green-400 p-4 rounded-md h-64 overflow-y-auto font-mono border border-green-700 w-full">
                    <h3 className="text-md text-gray-500 border-b border-gray-700 pb-1">LOGS</h3>
                    <ul className="list-none space-y-1">
                        {logs.length === 0 && <li className="opacity-1 italic">Waiting for Signal...</li>}
                        {logs.map((log, index) => {
                            return (
                                <li key={index} className="text-green-600 mr-2">
                                    {log}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <p className="text-center text-gray-400 italic text-md">
                    Monitor is off. Messages are being sent into the void...
                </p>
            )}
        </>
    );
};

const ControlPanel = () => {
    const [text, setText] = useState<string>('');

    const emitMessage = () => {
        EventEmitter.emit('notification', text);
        setText('');
    };

    return (
        <>
            <input
                type="text"
                name=""
                id=""
                className="border border-green-300 py-2 px-1 text-lg rounded-sm outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="btn py-2 px-6 cursor-pointer bg-green-500 rounded-sm active:scale-95"
                onClick={emitMessage}
            >
                Send
            </button>
        </>
    );
};

const Day03 = () => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl">Event Emitter</h2>
            <DisplayScreen />
            <ControlPanel />
        </div>
    );
};

export default Day03;
