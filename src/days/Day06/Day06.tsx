import { useEffect, useRef, useState } from 'react';

type Item = string;

const Day06 = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const observerTarget = useRef(null);

    const fetchData = async (page: number): Promise<string[]> => {
        return new Promise((resolve) => {
            const items = Array.from({ length: 10 }, (_, index) => `Infinite Feed Item ${page * 10 + index}`);
            setTimeout(() => {
                resolve(items);
            }, 500);
        });
    };

    useEffect(() => {
        let ignore = false;

        const loadMore = async () => {
            setIsLoading(true);
            try {
                const newItems = await fetchData(page);
                if (!ignore) setItems((prevItems) => [...prevItems, ...newItems]);
                if (page >= 4) setHasMore(false);
            } catch (error) {
                console.error(`Error while Fetching data... ${error}`);
            } finally {
                if (!ignore) setIsLoading(false);
            }
        };

        loadMore();

        return () => {
            ignore = true;
        };
    }, [page]);

    useEffect(() => {
        if (isLoading || !hasMore) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) setPage((prev) => prev + 1);
        });

        if (observerTarget.current) observer.observe(observerTarget.current);

        return () => observer.disconnect();
    }, [isLoading, hasMore]);

    return (
        <div className="flex flex-col items-center max-w-xl w-full mx-auto">
            <h2 className="text-3xl my-4">Infinite Feed</h2>
            <div className="w-full bg-slate-900 flex flex-col justify-center p-4">
                <div>
                    <ul className="list-none p-0 flex flex-col gap-4">
                        {items.map((item) => (
                            <li
                                key={item}
                                className="bg-slate-700 rounded-md shadow-sm border-gray-700 py-3 px-6 text-lg font-semibold hover:-translate-y-1 hover:shadow-md hover:shadow-white/20"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    {isLoading && (
                        <h3 className="text-center text-green-400 text-lg animate-pulse my-2">
                            Loading data! Please wait...
                        </h3>
                    )}
                    {!hasMore && (
                        <h3 className="text-center text-gray-400 text-lg font-bold my-2">You are all caught up!!</h3>
                    )}
                    <div ref={observerTarget} className="h-10"></div>
                </div>
            </div>
        </div>
    );
};

export default Day06;
