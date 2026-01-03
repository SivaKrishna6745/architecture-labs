import { useContext } from 'react';
import ItemContext from './ItemContext';

const useItemContext = () => {
    const itemContext = useContext(ItemContext);
    if (!itemContext) throw new Error('Accordion components must be wrapped in Accordion.Item');
    return itemContext;
};

export default useItemContext;
