import { useContext } from 'react';
import AccordionContext from './AccordionContext';

const useAccordionContext = () => {
    const accContext = useContext(AccordionContext);
    if (!accContext) throw new Error('Accordion components must be wrapped in Accordion.Root');
    return accContext;
};

export default useAccordionContext;
