import { useState } from 'react';
import useDebounce from './useDebounce';

const Day01 = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const debouncedValue = useDebounce(inputValue, 500);

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-3xl">Use Debounce Hook</h2>
            <input
                type="text"
                name="text"
                placeholder="type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border p-2 rounded"
            />
            <span>{debouncedValue}</span>
        </div>
    );
};

export default Day01;
