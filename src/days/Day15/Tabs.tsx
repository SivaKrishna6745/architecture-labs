import { createContext, useContext, useState } from 'react';

type TabsContextType = {
    activeTab: string;
    setActiveTab: (id: string) => void;
};

type TabsRootType = {
    children: React.ReactNode;
    defaultValue: string;
};

type TabsListType = {
    children: React.ReactNode;
};

type TabsTriggerType = {
    value: string;
    children: React.ReactNode;
};

type TabsContentType = {
    value: string;
    children: React.ReactNode;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('useTabs must be used within a <Tabs /> provider');
    return context;
};

const TabsRoot = ({ children, defaultValue }: TabsRootType) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
};

const TabsList = ({ children }: TabsListType) => {
    return <div className="flex">{children}</div>;
};

const TabsTrigger = ({ value, children }: TabsTriggerType) => {
    const { activeTab, setActiveTab } = useTabsContext();

    return (
        <button
            className={`
                cursor-pointer ${
                    activeTab === value
                        ? 'p-2 border-b-3 border-blue-500 text-gray-200'
                        : 'p-2 border-b border-blue-400'
                }
            `}
            onClick={() => setActiveTab(value)}
        >
            {children}
        </button>
    );
};

const TabsContent = ({ value, children }: TabsContentType) => {
    const { activeTab } = useTabsContext();

    if (activeTab !== value) return null;
    return (
        <div className="flex flex-col gap-4 justify-center items-center py-4 rounded-b-md bg-slate-500">{children}</div>
    );
};

export const Tabs = Object.assign(TabsRoot, {
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
});
