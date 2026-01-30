import { createContext } from 'react';

type ToastContextType = {
    addToast: (message: string, type: 'success' | 'error') => void;
    removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
