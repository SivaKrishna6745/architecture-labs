import React, { useEffect, useState } from 'react';
import ToastContext from './ToastContext';

type Toast = {
    id: number;
    message: string;
    type: string;
};

type ToastProps = {
    children: React.ReactNode;
};

type ToastItemProps = {
    id: number;
    message: string;
    type: string;
    index: number;
    removeToast: (id: number) => void;
};

const ToastItem = ({ id, message, type, index, removeToast }: ToastItemProps) => {
    const [isToastExiting, setIsToastExiting] = useState<boolean>(false);

    const handleExit = () => {
        setIsToastExiting(true);
        setTimeout(() => {
            removeToast(id);
        }, 50);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleExit();
        }, 400000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            style={{
                transform: `translateY(-${index * 20}px) scale(${1 - index * 0.05})`,
                zIndex: 100 - index,
                opacity: index > 2 ? 0 : 1, // Hide the 4th+ toast to prevent clutter
            }}
            className={`absolute w-60 text-center mx-auto px-4 py-2 shadow-lg rounded-md text-white duration-300 transition-all transform ease-in-out ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} ${isToastExiting ? 'translate-y-100 opacity-0' : 'translate-y-20 opacity-100'}`}
        >
            <div className="font-bold capitalize">{type}</div>
            <div className="text-sm">{message}</div>
        </div>
    );
};

const ToastProvider = ({ children }: ToastProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: 'success' | 'error') => {
        const id = Date.now();
        const newToast = { id, message, type };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    };

    const removeToast = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="relative top-100 flex flex-col gap-4">
                {toasts.map((toast, index) => {
                    const reverseIndex = toasts.length - 1 - index;
                    return (
                        <ToastItem
                            key={toast.id}
                            id={toast.id}
                            message={toast.message}
                            type={toast.type}
                            index={reverseIndex}
                            removeToast={removeToast}
                        />
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
