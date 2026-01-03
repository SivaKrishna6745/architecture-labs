import { createContext } from 'react';

interface AccordionContextType {
    activeItem: string | null;
    toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export default AccordionContext;
