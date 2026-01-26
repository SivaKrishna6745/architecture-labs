import { useState, memo, useCallback, useMemo } from 'react';

type ExpensiveListProps = {
    items: string[];
    onItemClick: (item: string) => void;
};

const ExpensiveList = memo(({ items, onItemClick }: ExpensiveListProps) => {
    const performHeavyCalculation = () => {
        console.log('⚠️ Child Rendering (Lagging)...');
        let result = 0;
        // Loop 100 million times (adjust zeroes if too fast/slow for your PC)
        for (let i = 0; i < 100000000; i++) {
            result += Math.sqrt(i);
        }
        return result;
    };

    performHeavyCalculation();

    return (
        <ul className="list-none grid grid-cols-2 gap-4">
            {items.map((item: string, index: number) => (
                <li
                    key={index}
                    className="px-10 py-2 bg-amber-500 rounded-sm text-center text-lg"
                    onClick={() => onItemClick(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
});

const Day22 = () => {
    const arrayItems = useMemo(() => {
        return Array.from({ length: 10 }, (_, index) => `Item ${index}`);
    }, []);
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState<string[]>(arrayItems);

    const handleClick = useCallback((item: string) => {
        console.log('clicked:', item);
    }, []);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-8">
                <button
                    type="button"
                    className="cursor-pointer px-6 py-2 bg-blue-500 rounded-sm text-lg hover:bg-blue-400 active:scale-95 active:shadow-lg"
                    onClick={() => {
                        setCount((prevCount) => prevCount + 1);
                        setItems(arrayItems);
                    }}
                >
                    Increment
                </button>
                <p className="text-2xl font-bold">{count}</p>
            </div>
            <ExpensiveList items={items} onItemClick={handleClick} />
        </div>
    );
};

export default Day22;
