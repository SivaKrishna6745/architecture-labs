import { lazy, Suspense, useState } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const Day23 = () => {
    const [showHeavy, setShowHeavy] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-8 items-center">
            <button
                type="button"
                className="cursor-pointer px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 active:scale-95"
                onClick={() => setShowHeavy((prev) => !prev)}
            >
                Load Heavy Component
            </button>
            <Suspense fallback={<div className="text-lg text-blue-500">Loading...</div>}>
                {showHeavy && <HeavyComponent />}
            </Suspense>
        </div>
    );
};

export default Day23;
