import { useReducer } from 'react';

type Action<T> = { type: 'UNDO' } | { type: 'REDO' } | { type: 'SET'; payload: T };

interface undoRedoState<T> {
    past: Array<T>;
    present: T;
    future: Array<T>;
}

const undoRedoReducer = <T>(state: undoRedoState<T>, action: Action<T>): undoRedoState<T> => {
    switch (action.type) {
        case 'UNDO':
            if (state.past.length === 0) return state;
            return {
                ...state,
                future: [state.present, ...state.future],
                present: state.past[state.past.length - 1],
                past: state.past.slice(0, state.past.length - 1),
            };
        case 'REDO':
            if (state.future.length === 0) return state;
            return {
                ...state,
                past: [...state.past, state.present],
                present: state.future[0],
                future: state.future.slice(1),
            };
        case 'SET':
            return {
                ...state,
                past: [...state.past, state.present],
                present: action.payload,
                future: [],
            };
        default:
            return state;
    }
};

const useUndoRedo = <T>(initialValue: T) => {
    const [state, dispatch] = useReducer(undoRedoReducer, {
        past: [],
        present: initialValue,
        future: [],
    });

    return {
        value: state.present,
        history: state,
        set: (newVal: T) => dispatch({ type: 'SET', payload: newVal }),
        undo: () => dispatch({ type: 'UNDO' }),
        redo: () => dispatch({ type: 'REDO' }),
        canUndo: state.past.length > 0,
        canRedo: state.future.length > 0,
    };
};

export default useUndoRedo;
