import Day01 from './days/Day01/Day01';
import Day02 from './days/Day02/Day02';
import Day03 from './days/Day03/Day03';
import Day04 from './days/Day04/Day04';
import Day05 from './days/Day05/Day05';
import Day06 from './days/Day06/Day06';

export type Challenge = keyof typeof challenges;

const challenges = {
    'Day 01: Use Debounce': Day01,
    'Day 02: Promise Polyfill': Day02,
    'Day 03: Event Emitter': Day03,
    'Day 04: File Explorer': Day04,
    'Day 05: Accordion': Day05,
    'Day 06: Intersection Observer': Day06,
};

export default challenges;
