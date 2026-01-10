import { useEffect, useRef, useState } from 'react';

const Day12 = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleModalToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!showModal) return;
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            )
                setShowModal(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className="flex flex-col items-center gap-8">
            <button
                ref={buttonRef}
                className="px-4 py-2 bg-blue-600 rounded-sm cursor-pointer transition-all duration-200 hover:bg-blue-500 active:scale-95"
                onClick={handleModalToggle}
            >
                Open Modal
            </button>
            {showModal && (
                <div ref={modalRef} className="h-80 w-120 bg-slate-600 rounded-sm flex justify-center items-center">
                    <h2 className="text-2xl">This is the Modal</h2>
                </div>
            )}
        </div>
    );
};

export default Day12;
