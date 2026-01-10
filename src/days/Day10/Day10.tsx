import { useEffect, useState } from 'react';
import { GlobalProvider, useGlobalStore } from './store';

type ControlsProps = {
    toast: string | null;
    setToast: (msg: string | null) => void;
};

const Header = () => {
    const { state } = useGlobalStore();
    return (
        <div
            className={`${
                state.theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
            } text-center py-2 rounded-sm`}
        >
            {state.user.isLoggedIn ? state.user.name : 'Guest'}
        </div>
    );
};

const Controls = ({ toast, setToast }: ControlsProps) => {
    const { state, dispatch } = useGlobalStore();
    const [username, setUsername] = useState('');

    const handleLogInLogOut = () => {
        if (state.user.isLoggedIn) {
            dispatch({ type: 'LOGOUT' });
            setToast('You have been logged out');
        } else {
            dispatch({ type: 'LOGIN', payload: username });
            setToast('Welcome back, ' + username);
        }
        setUsername('');
    };

    const handleThemeToggle = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    useEffect(() => {
        if (!toast) return;

        const toastTimeout = setTimeout(() => {
            setToast(null);
        }, 3000);

        return () => clearTimeout(toastTimeout);
    }, [setToast, toast]);

    return (
        <>
            <div className="flex justify-center gap-8">
                <div className="flex gap-4">
                    {!state.user.isLoggedIn && (
                        <input
                            type="text"
                            placeholder="Austhosh Chakravarty"
                            className="outline-none border border-slate-400 px-1 py-2 rounded-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    )}
                    <button
                        onClick={handleLogInLogOut}
                        className={`px-4 py-2 bg-blue-600 rounded-sm cursor-pointer active:scale-95 hover:bg-blue-700 ${
                            username === '' && !state.user.isLoggedIn
                                ? 'opacity-50 pointer-events-none cursor-not-allowed'
                                : ''
                        }`}
                    >
                        {state.user.isLoggedIn ? 'Log Out' : 'Log In'}
                    </button>
                </div>
                <button
                    onClick={handleThemeToggle}
                    className="px-4 py-2 bg-slate-600 rounded-sm cursor-pointer active:scale-95 hover:bg-slate-700"
                >
                    Toggle Theme
                </button>
            </div>
            {toast && (
                <div
                    className={`absolute bottom-0 right-0 bg-green-500 text-white py-1 px-3 rounded-sm left-1/2 -translate-x-1/2 transition-all duration-200 ease-out transform ${
                        toast ? '-translate-y-5 opacity-100' : 'translate-y-0 opacity-0'
                    }`}
                >
                    {toast}
                </div>
            )}
        </>
    );
};

const Day10 = () => {
    const [toast, setToast] = useState<string | null>(null);
    return (
        <GlobalProvider>
            <div className="relative flex flex-col gap-6 p-4 max-w-lg mx-auto border border-slate-700 rounded-lg mt-10 bg-slate-800 min-h-52">
                <Header />
                <Controls toast={toast} setToast={setToast} />
            </div>
        </GlobalProvider>
    );
};

export default Day10;
