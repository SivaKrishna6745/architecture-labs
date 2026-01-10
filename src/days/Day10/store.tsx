import { createContext, useContext, useEffect, useReducer } from 'react';

type Theme = 'light' | 'dark';

interface GlobalState {
    theme: Theme;
    user: {
        name: string;
        isLoggedIn: boolean;
    };
}

type Action = { type: 'TOGGLE_THEME' } | { type: 'LOGIN'; payload: string } | { type: 'LOGOUT' };

type GlobalContextType = {
    state: GlobalState;
    dispatch: React.Dispatch<Action>;
};

const initialState: GlobalState = {
    theme: 'light',
    user: {
        name: 'Siva',
        isLoggedIn: false,
    },
};

const globalReducer = (state: GlobalState, action: Action): GlobalState => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        case 'LOGIN':
            return {
                ...state,
                user: {
                    isLoggedIn: true,
                    name: action.payload,
                },
            };
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    isLoggedIn: false,
                    name: '',
                },
            };
        default:
            return state;
    }
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStore = () => {
    const context = useContext(GlobalContext);
    if (!context) throw new Error('useGlobalStore must be used within a GlobalProvider');
    return context;
};
