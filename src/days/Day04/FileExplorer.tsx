import { useState } from 'react';
import { data, type dataItem } from './data';

interface EntryProps {
    node: dataItem;
}

const Entry = ({ node }: EntryProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {!node.isFolder ? (
                <p className="text-md text-gray-300">📄 {node.name}</p>
            ) : (
                <div>
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer active:border active:border-gray-400"
                    >
                        📁 {node.name}
                    </span>
                    {isOpen && (
                        <div className="pl-10">
                            {node.items?.map((item: dataItem, index: number) => {
                                return <Entry key={index} node={item} />;
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

const FileExplorer = () => {
    return (
        <div className="w-100 border border-gray-700 rounded-md p-4 bg-gray-900 text-left">
            {data.map((item) => (
                <Entry node={item} />
            ))}
        </div>
    );
};

export default FileExplorer;
