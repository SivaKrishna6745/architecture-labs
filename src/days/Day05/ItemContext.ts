import { createContext } from 'react';

interface ItemContextType {
    id: string;
}

const ItemContext = createContext<ItemContextType | null>(null);

export default ItemContext;
