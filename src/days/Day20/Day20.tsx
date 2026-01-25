import { useState } from 'react';

const DATA = Array.from({ length: 10000 }, (_, index) => `Item ${index}`);
const ITEM_HEIGHT = 35;
const WINDOW_HEIGHT = 500;
const ITEM_COUNT = DATA.length;

const Day20 = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);

    const totalHeight = ITEM_COUNT * ITEM_HEIGHT;
    const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
    const endIndex = startIndex + WINDOW_HEIGHT / ITEM_HEIGHT + 10;
    const visibleItems = DATA.slice(startIndex, endIndex);

    return (
        <div
            className="overflow-auto relative"
            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
            style={{ height: `${WINDOW_HEIGHT}px` }}
        >
            <div style={{ height: `${totalHeight}px` }}>
                {visibleItems.map((item, index) => {
                    return (
                        <div
                            key={startIndex + index}
                            className="absolute"
                            style={{ top: `${(startIndex + index) * ITEM_HEIGHT}px`, height: `${ITEM_HEIGHT}px` }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Day20;
