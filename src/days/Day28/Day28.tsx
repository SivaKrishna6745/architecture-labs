import React from 'react';
import ToastProvider from './ToastProvider';
import useToast from './useToast';

const Button = () => {
    const { addToast } = useToast();

    return (
        <button
            type="button"
            className="cursor-pointer px-4 py-1 bg-blue-500 rounded-sm hover:bg-blue-400 active:scale-95"
            onClick={() => addToast('Login Successful', 'success')}
        >
            Click
        </button>
    );
};

const Day28 = () => {
    return (
        <ToastProvider>
            <Button />
        </ToastProvider>
    );
};

export default Day28;
