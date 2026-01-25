import { useState } from 'react';

function BuggyCounter() {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => setCount((prevCount) => prevCount + 1);

    if (count >= 5) throw new Error('I crashed');
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl">Counter</h1>
            <div className="flex flex-col gap-2 items-center">
                <div className="text-lg">Count: {count}</div>
                <button
                    onClick={handleIncrement}
                    className="cursor-pointer px-6 py-2 bg-orange-400 rounded-sm hover:bg-orange-400/90 active:scale-95"
                >
                    Increment
                </button>
            </div>
        </div>
    );
}

export default BuggyCounter;
