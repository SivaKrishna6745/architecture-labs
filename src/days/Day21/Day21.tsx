import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

const Day21 = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="flex flex-col items-center gap-8">
                <h2 className=" text-xl max-w-sm bg-gray-400 text-green-700 font-bold rounded-sm px-4 py-2">
                    This is the BuggyCounter wrapped inside an ErrorBoundary so app won't crash and instead shows error.
                </h2>
                <ErrorBoundary>
                    <BuggyCounter />
                </ErrorBoundary>
            </div>
            <hr className="border-r-5 border-white h-full w-1 place-self-center" />
            <div className="flex flex-col items-center gap-8">
                <h2 className=" text-xl max-w-sm bg-gray-400 text-red-700 font-bold rounded-sm px-4 py-2">
                    There is no ErrorBoundary wrapped here so the app will crash and you'll have to refresh to see UI.
                    again
                </h2>
                <BuggyCounter />
            </div>
        </div>
    );
};

export default Day21;
