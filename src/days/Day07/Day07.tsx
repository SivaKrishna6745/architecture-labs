import { useRef, useState } from 'react';

const slides = [
    {
        id: 1,
        // Misty Mountains
        image: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Misty Mountains',
    },
    {
        id: 2,
        // Foggy Forests
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Foggy Forests',
    },
    {
        id: 3,
        // Sunlit Valley
        image: 'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Sunlit Valley',
    },
    {
        id: 4,
        // Autumn River
        image: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Autumn River',
    },
    {
        id: 5,
        // Snowy Peaks
        image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Snowy Peaks',
    },
];

const Day07 = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startPos, setStartPos] = useState<number>(0);
    const [currentTranslate, setCurrentTranslate] = useState<number>(0);
    const [prevTranslate, setPrevTranslate] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setStartPos(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const containerWidth = containerRef.current?.offsetWidth;
        const trackWidth = trackRef.current?.scrollWidth;
        const minTranslate = containerWidth! - trackWidth!;
        const currentPos = e.clientX;
        const distanceMoved = currentPos - startPos;
        const newTranslate = Math.max(minTranslate, Math.min(prevTranslate + distanceMoved, 0));
        setCurrentTranslate(newTranslate);
    };

    const handleEndDrag = () => {
        setIsDragging(false);

        const containerWidth = containerRef.current?.offsetWidth || 0;
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const slideWidth = trackRef.current?.children[0].clientWidth || 0;

        const currPos = currentTranslate;
        const wallSnap = containerWidth - trackWidth;
        const gridSnap = Math.round(currentTranslate / slideWidth) * slideWidth;

        const distToGrid = Math.abs(currPos - gridSnap);
        const distToWall = Math.abs(currPos - wallSnap);

        let winner = 0;
        if (distToWall < distToGrid) winner = wallSnap;
        else winner = gridSnap;

        const clampedTranslate = Math.max(wallSnap, Math.min(winner, 0));

        setCurrentTranslate(clampedTranslate);
        setPrevTranslate(clampedTranslate);
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-4">The Draggable Slider</h2>
            <div
                ref={containerRef}
                className="overflow-hidden max-w-4xl mx-auto"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleEndDrag}
                onMouseLeave={handleEndDrag}
            >
                <div
                    ref={trackRef}
                    className={`flex ${
                        isDragging
                            ? 'cursor-grabbing transform-none'
                            : 'cursor-grab transition-transform duration-300 ease-out'
                    }`}
                    style={{ transform: `translateX(${currentTranslate}px)` }}
                >
                    {slides.map((slide) => {
                        return (
                            <div key={slide.id} className="min-w-75 mx-2 rounded-md">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-96 w-full object-cover pointer-events-none select-none rounded-md"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Day07;
