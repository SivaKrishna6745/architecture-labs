import React, { useEffect, useRef, useState } from 'react';

const Day24 = () => {
    const [inputNum, setInputNum] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);

    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('./fib.worker.ts', import.meta.url), { type: 'module' });

        workerRef.current.onmessage = (e) => {
            setResult(e.data);
            setIsCalculating(false);
        };

        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    const handleCalculate = (value: string) => {
        const num = Number(value);
        if (isNaN(num)) return;
        setIsCalculating(true);
        workerRef.current?.postMessage(num);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputNum(value);
        handleCalculate(value);
    };

    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-4 items-center">
                <label htmlFor="number">Type a Number: </label>
                <input
                    type="text"
                    id="number"
                    value={inputNum}
                    onChange={handleInputChange}
                    className="border border-green-400 px-1 py-2 rounded-sm"
                />
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="lag-input">Type here to test lag</label>
                <input type="text" id="lag-input" className="border border-green-400 px-1 py-2 rounded-sm" />
            </div>
            {isCalculating ? (
                <div className="text-lg font-semibold text-blue-500 bg-gray-300 px-8 py-3 rounded-sm">
                    Result is being Calculated!!
                </div>
            ) : (
                <div className="text-lg font-semibold text-blue-500 bg-gray-300 px-8 py-3 rounded-sm">
                    Result: <span className="font-bold text-green-400">{result}</span>
                </div>
            )}
        </div>
    );
};

export default Day24;
