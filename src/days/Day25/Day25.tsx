import React, { useState } from 'react';

type Task = {
    id: string;
    title: string;
    status: 'todo' | 'doing' | 'done';
};
const Day25 = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: 'Task 1', status: 'done' },
        { id: '2', title: 'Task 2', status: 'doing' },
        { id: '3', title: 'Task 3', status: 'doing' },
        { id: '4', title: 'Task 4', status: 'todo' },
    ]);

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
        e.dataTransfer?.setData('taskId', id);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: Task['status']) => {
        const id = e.dataTransfer.getData('taskId');
        const updatedTasks = tasks.map((task: Task) => (task.id === id ? { ...task, status: newStatus } : task));
        setTasks(updatedTasks);
    };

    return (
        <div className="grid grid-cols-3 place-items-center">
            <div
                className=" text-center border border-gray-300 min-w-60 rounded-sm min-h-60 p-4"
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'todo')}
            >
                <h3 className="text-3xl font-bold py-1 uppercase">Todo</h3>
                <hr className="mb-2" />
                <ul>
                    {tasks
                        .filter((task: Task) => task.status === 'todo')
                        .map((task: Task) => {
                            return (
                                <li
                                    key={task.id}
                                    className="w-40 mx-auto py-1 rounded-sm text-lg font-semibold bg-red-600 my-2"
                                    draggable
                                    onDragStart={(e: React.DragEvent<HTMLLIElement>) => handleDragStart(e, task.id)}
                                >
                                    {task.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div
                className=" text-center border border-gray-300 min-w-60 rounded-sm min-h-60 p-4"
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'doing')}
            >
                <h3 className="text-3xl font-bold py-1 uppercase">Doing</h3>
                <hr className="mb-2" />
                <ul>
                    {tasks
                        .filter((task: Task) => task.status === 'doing')
                        .map((task: Task) => {
                            return (
                                <li
                                    key={task.id}
                                    className="w-40 mx-auto py-1 rounded-sm text-lg font-semibold bg-yellow-600 my-2"
                                    draggable
                                    onDragStart={(e: React.DragEvent<HTMLLIElement>) => handleDragStart(e, task.id)}
                                >
                                    {task.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div
                className=" text-center border border-gray-300 min-w-60 rounded-sm min-h-60 p-4"
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'done')}
            >
                <h3 className="text-3xl font-bold py-1 uppercase">Done</h3>
                <hr className="mb-2" />
                <ul>
                    {tasks
                        .filter((task: Task) => task.status === 'done')
                        .map((task: Task) => {
                            return (
                                <li
                                    key={task.id}
                                    className="w-40 mx-auto py-1 rounded-sm text-lg font-semibold bg-green-600 my-2"
                                    draggable
                                    onDragStart={(e: React.DragEvent<HTMLLIElement>) => handleDragStart(e, task.id)}
                                >
                                    {task.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default Day25;
