import { useEffect, useRef, useState } from 'react';

interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
    login: {
        uuid: string;
    };
}

const Day09 = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(0);
    const observerRef = useRef<HTMLDivElement>(null);

    const fetchUsers = async () => {
        setLoading(true);

        try {
            const usersData = await fetch(`https://randomuser.me/api/?results=9&page=${page}`);
            const result = await usersData.json();
            setUsers((prevUsers) => [...prevUsers, ...result.results]);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [page]);

    useEffect(() => {
        if (loading) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) setPage((prev) => prev + 1);
        });

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [loading]);

    const placeholder = Array.from({ length: 9 }, (_, index) => index);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-4">Real World Fetch</h2>
            <div>
                {error && <h3 className="text-xl text-red-500">Error occured while fetching data!!</h3>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {!error &&
                        users.map((user) => {
                            return (
                                <div
                                    key={user.login.uuid}
                                    className="border border-slate-500 px-4 py-2 rounded-md flex gap-4 items-center bg-slate-800 hover:scale-105 shadow-lg"
                                >
                                    <img
                                        src={user.picture.large}
                                        alt={user.name.first}
                                        className="w-16 h-16 rounded-full border-2 border-blue-500"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{user.name.first}</h3>
                                        <p className="text-sm text-gray-400">{user.email}</p>
                                    </div>
                                </div>
                            );
                        })}
                    {loading &&
                        placeholder.map((_, index) => (
                            <div
                                key={index}
                                className="border border-slate-500 px-4 py-2 rounded-md flex gap-4 items-center bg-slate-800 shadow-lg w-86.75 animate-pulse"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-blue-500"></div>
                                <div className="flex flex-col gap-1">
                                    <div className="h-7 w-20 border border-slate-700 rounded-md"></div>
                                    <div className="h-5 w-40 border border-slate-700 rounded-md"></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="h-10" ref={observerRef}>
                Loading...
            </div>
        </div>
    );
};

export default Day09;
