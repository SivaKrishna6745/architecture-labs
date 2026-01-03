/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import ItemContext from './ItemContext';
import useItemContext from './useItemContext';
import useAccordionContext from './useAccordionContext';

interface AccordionItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
}

interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
}

interface AccordionRootProps {
    children: React.ReactNode;
    className?: string;
}

const Item = ({ value, children, className }: AccordionItemProps) => {
    return (
        <div className={className}>
            <ItemContext.Provider value={{ id: value }}>{children}</ItemContext.Provider>
        </div>
    );
};

const Trigger = ({ className, children }: AccordionTriggerProps) => {
    const itemContext = useItemContext();
    const accContext = useAccordionContext();
    const { id } = itemContext;
    const { toggleItem } = accContext;

    return (
        <button type="button" onClick={() => toggleItem(id)} className={className}>
            {children}
        </button>
    );
};

const Content = ({ children, className }: AccordionContentProps) => {
    const itemContext = useItemContext();
    const accContext = useAccordionContext();
    const { id } = itemContext;
    const { activeItem } = accContext;
    const isOpen = activeItem === id;

    return <>{isOpen ? <div className={className}>{children}</div> : null}</>;
};

const Root = ({ children, className }: AccordionRootProps) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        if (id === activeItem) setActiveItem(null);
        else setActiveItem(id);
    };

    return (
        <div className={className}>
            <AccordionContext.Provider value={{ activeItem, toggleItem }}>{children}</AccordionContext.Provider>
        </div>
    );
};

export const Accordion = { Item, Trigger, Content, Root };
