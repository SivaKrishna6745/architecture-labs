import './App.css';
import Day01 from './days/Day01/Day01';
import Day02 from './days/Day02/Day02';
import Day03 from './days/Day03/Day03';
import Day04 from './days/Day04/Day04';
import Day05 from './days/Day05/Day05';
import Day06 from './days/Day06/Day06';

function App() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-center">Architecture Labs</h1>
            <Day01 />
            <hr className="my-12 border-gray-300 w-full" />
            <Day02 />
            <hr className="my-12 border-gray-300 w-full" />
            <Day03 />
            <hr className="my-12 border-gray-300 w-full" />
            <Day04 />
            <hr className="my-12 border-gray-300 w-full" />
            <Day05 />
            <hr className="my-12 border-gray-300 w-full" />
            <Day06 />
            <hr className="my-12 border-gray-300 w-full" />
        </>
    );
}

export default App;
