import DataFetcher from './DataFetcher';

const Day17 = () => {
    return (
        <div>
            <DataFetcher url="https://jsonplaceholder.typicode.com/posts/1">
                {(apiData, loading, error) => {
                    if (loading) {
                        return (
                            <h3 className="bg-gray-600 px-4 py-2 text-blue-400 rounded-sm font-bold text-xl">
                                Loading data, please wait...
                            </h3>
                        );
                    }
                    if (error) {
                        return (
                            <h3 className="bg-gray-600 px-4 py-2 text-red-400 rounded-sm font-bold text-xl">
                                Error while fetching data... ${error}
                            </h3>
                        );
                    }
                    return (
                        <div className="bg-gray-600 px-4 py-2 rounded-md flex flex-col gap-4">
                            <h2 className="text-2xl text-blue-400">{apiData?.title}</h2>
                            <hr />
                            <p className="text-lg text-blue-300">{apiData?.body}</p>
                        </div>
                    );
                }}
            </DataFetcher>
        </div>
    );
};

export default Day17;
