import { useRef, useState } from 'react';

const Day19 = () => {
    const [userName, setUserName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const passwordRef = useRef<HTMLInputElement>(null);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserName(value);
        if (value.length < 3) setError('Username must be at least 3 characters');
        else setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`{
            username: ${userName}
            password: ${passwordRef?.current?.value}
        }`);
    };

    return (
        <form className="flex flex-col gap-6 items-center" onSubmit={handleSubmit}>
            <div className="flex gap-4 items-center">
                <label htmlFor="username" className="text-lg">
                    Username:
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="username"
                        placeholder="Something..."
                        autoComplete="false"
                        className="border border-slate-100 py-2 px-1 rounded-sm min-w-80"
                        value={userName}
                        onChange={handleUsernameChange}
                    />
                    {error && <div className="absolute text-red-400 text-sm">{error}</div>}
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <label htmlFor="password" className="text-lg">
                    Password:
                </label>
                <input
                    ref={passwordRef}
                    type="password"
                    id="password"
                    className="border border-slate-100 py-2 px-1 rounded-sm min-w-80"
                />
            </div>
            <button
                type="submit"
                className="cursor-pointer px-6 py-2 rounded-md text-lg bg-blue-500 hover:bg-blue-400 hover:shadow-[0_0_0_2px_rgba(256,256,256,0.5)] active:scale-95 active:shadow-[0_0_0_2px_rgba(256,256,256,0.7)]"
            >
                Submit
            </button>
        </form>
    );
};

export default Day19;
