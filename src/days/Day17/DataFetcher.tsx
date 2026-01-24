import { useEffect, useState, type ReactNode } from 'react';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type DataFetcherProps = {
    url: string;
    children: (data: Post | null, loading: boolean, error: string | null) => ReactNode;
};

const DataFetcher = ({ url, children }: DataFetcherProps) => {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (err) {
                setLoading(false);
                setError(err instanceof Error ? err.message : 'Unknown Error');
                throw new Error(`Error while fetching data: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return <>{children(data, loading, error)}</>;
};

export default DataFetcher;
