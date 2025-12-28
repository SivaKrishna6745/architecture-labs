import { useState } from 'react';
import MyPromise from './MyPromise';

const Day02 = () => {
    const [status, setStatus] = useState<string>('Waiting for action...');

    const handleSuccess = () => {
        new MyPromise<string>((resolve) => {
            setTimeout(() => {
                resolve('Data loaded!!');
            }, 1000);
        }).then((data) => setStatus(data));
    };

    const handleFailure = () => {
        new MyPromise<string>((_resolve, reject) => {
            setTimeout(() => {
                reject('Data not loaded!!');
            }, 1000);
        }).then(
            (data) => setStatus(data),
            (err) => setStatus(String(err))
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-3xl">Promise Polyfill</h2>
            <span className="text-xl">Status: {status}</span>
            <div className="flex gap-4 justify-center">
                <button
                    type="button"
                    className="cursor-pointer px-6 py-2 bg-green-500 rounded-md active:scale-95"
                    onClick={handleSuccess}
                >
                    Test Resolve
                </button>
                <button
                    type="button"
                    className="cursor-pointer px-6 py-2 bg-red-500 rounded-md active:scale-95"
                    onClick={handleFailure}
                >
                    Test Reject
                </button>
            </div>
        </div>
    );
};

export default Day02;
