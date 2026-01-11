import { useState } from 'react';
import { flushSync } from 'react-dom';

const BTN_CLASS =
    'px-6 py-2 bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-500 active:scale-95 transition-all duration-200 ease-in-out';

const Day14 = () => {
    const [count, setCount] = useState<number>(0);
    console.log(' 🔥 Component Rendered');

    const handleClick = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };

    const handleAsyncClick = async () => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
        }, 500);
    };

    const handleAsyncFlushClick = async () => {
        setTimeout(() => {
            flushSync(() => {
                setCount((prev) => prev + 1);
            });
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
        }, 500);
    };

    return (
        <div className="flex gap-4 justify-center">
            <button onClick={handleClick} className={BTN_CLASS}>
                Add 1 button {count}
            </button>
            <button onClick={handleAsyncClick} className={BTN_CLASS}>
                Add 2 button {count}
            </button>
            <button onClick={handleAsyncFlushClick} className={BTN_CLASS}>
                Add 3 button {count}
            </button>
        </div>
    );
};

export default Day14;
