import React from 'react';
import type { Task } from './Day25';

type BoardColumnProps = {
    dragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    drop: (e: React.DragEvent<HTMLDivElement>, value: string) => void;
    tasks: Task[];
    dragStart: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    color?: string;
    columnHeader: string;
    taskStatus: string;
};

const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
};

const borderMap: Record<string, string> = {
    blue: 'border-blue-500',
    orange: 'border-orange-500',
    green: 'border-green-500',
};

const BoardColumn = ({ dragOver, drop, tasks, dragStart, color = '', columnHeader, taskStatus }: BoardColumnProps) => {
    return (
        <div>
            <h3 className={`text-3xl text-center font-bold py-2 uppercase ${colorMap[color]} w-full rounded-sm mb-4`}>
                {columnHeader}
            </h3>
            <div
                className={`text-center border-2 ${borderMap[color]} min-w-80 rounded-md min-h-[60dvh] p-4`}
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOver(e)}
                onDrop={(e: React.DragEvent<HTMLDivElement>) => drop(e, taskStatus)}
            >
                {tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task: Task) => {
                            return (
                                <li
                                    key={task.id}
                                    className={`w-60 mx-auto py-2 rounded-sm text-xl font-semibold my-2 ${colorMap[color]} hover:cursor-grab active:cursor-grabbing`}
                                    draggable
                                    onDragStart={(e: React.DragEvent<HTMLLIElement>) => dragStart(e, task.id)}
                                >
                                    {task.title}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="text-gray-400 text-xl font-semibold uppercase">No Tasks</div>
                )}
            </div>
        </div>
    );
};

export default BoardColumn;
