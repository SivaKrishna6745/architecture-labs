import Day01 from './days/Day01/Day01';
import Day02 from './days/Day02/Day02';
import Day03 from './days/Day03/Day03';
import Day04 from './days/Day04/Day04';
import Day05 from './days/Day05/Day05';
import Day06 from './days/Day06/Day06';
import Day07 from './days/Day07/Day07';
import Day08 from './days/Day08/Day08';
import Day09 from './days/Day09/Day09';
import Day10 from './days/Day10/Day10';
import Day11 from './days/Day11/Day11';
import Day12 from './days/Day12/Day12';
import Day13 from './days/Day13/Day13';
import Day14 from './days/Day14/Day14';
import Day15 from './days/Day15/Day15';
import Day16 from './days/Day16/Day16';
import Day17 from './days/Day17/Day17';
import Day18 from './days/Day18/Day18';

export type Challenge = keyof typeof challenges;

const challenges = {
    'Day 01: Use Debounce': Day01,
    'Day 02: Promise Polyfill': Day02,
    'Day 03: Event Emitter': Day03,
    'Day 04: File Explorer': Day04,
    'Day 05: Accordion': Day05,
    'Day 06: Intersection Observer': Day06,
    'Day 7: The Draggable Slider': Day07,
    'Day 8: The "Real-World" Fetch': Day08,
    'Day 9: The Infinite Scroll': Day09,
    'Day 10: The Custom State Manager': Day10,
    'Day 11: The Time Machine ⏳': Day11,
    'Day 12: Click Outside Logic 🖱️': Day12,
    'Day 13: The Portal Modal 🚪': Day13,
    'Day 14: Batching & Rendering Optimization': Day14,
    'Day 15: Compound Component Tabs': Day15,
    'Day 16: Polymorphic Components 🦎': Day16,
    'Day 17: Render Props 🎭': Day17,
    'Day 18: Higher-Order Components 🌯': Day18,
};

export default challenges;
