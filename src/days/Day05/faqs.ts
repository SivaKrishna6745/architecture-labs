const faqs = [
    {
        id: '1',
        question: 'What is the Virtual DOM?',
        answer: 'The Virtual DOM is a lightweight copy of the real DOM. React uses it to compare changes (diffing) and updates only the necessary parts of the real DOM, improving performance.',
    },
    {
        id: '2',
        question: 'What is the difference between State and Props?',
        answer: 'Props are read-only inputs passed from a parent to a child. State is mutable data managed within the component itself. Props are like function arguments; State is like local variables.',
    },
    {
        id: '3',
        question: "Why can't I update state directly?",
        answer: "React needs to know when data changes to trigger a re-render. If you mutate state directly (e.g., state.value = 5), React won't know it changed and the UI won't update. Always use the setter function.",
    },
    {
        id: '4',
        question: "What is the 'key' prop used for?",
        answer: "The 'key' prop helps React identify which items have changed, been added, or been removed in a list. It must be unique among siblings to ensure efficient updates.",
    },
];

export default faqs;
