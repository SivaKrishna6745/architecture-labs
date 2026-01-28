import { useEffect } from 'react';

const Day26 = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('sw.js')
                .then((registration) => {
                    console.log('SW Registrated Scope:', registration.scope);
                })
                .catch((error) => {
                    console.log('SW Registration Failed:', error);
                });
        }
    }, []);
    return <div>Day26</div>;
};

export default Day26;
