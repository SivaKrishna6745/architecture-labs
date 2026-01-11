import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Day13 = () => {
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
        <div className="p-4 border-2 border-red-500 h-32 overflow-hidden relative">
            <h1 className="mb-4">I am a restrictive box</h1>
            <button
                ref={buttonRef}
                className="px-4 py-2 bg-blue-600 rounded-sm cursor-pointer transition-all duration-200 hover:bg-blue-500 active:scale-95"
                onClick={handleModalToggle}
            >
                Open Modal
            </button>
            {showModal &&
                createPortal(
                    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
                        <div
                            ref={modalRef}
                            className="h-80 w-120 bg-slate-600 rounded-sm flex flex-col justify-center items-center"
                        >
                            <h2 className="text-2xl mb-4">This is the Modal</h2>
                            <p className="text-lg">I am free from the red box</p>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default Day13;
