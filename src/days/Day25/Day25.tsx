import React, { useState } from 'react';
import BoardColumn from './BoardColumn';

export type Task = {
    id: string;
    title: string;
    status: 'todo' | 'doing' | 'done';
};

const Day25 = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: 'Task 1', status: 'done' },
        { id: '2', title: 'Task 2', status: 'done' },
        { id: '3', title: 'Task 3', status: 'doing' },
        { id: '4', title: 'Task 4', status: 'doing' },
        { id: '5', title: 'Task 5', status: 'todo' },
        { id: '6', title: 'Task 6', status: 'todo' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            <BoardColumn
                dragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                drop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'todo')}
                dragStart={handleDragStart}
                tasks={tasks.filter((task: Task) => task.status === 'todo')}
                color="blue"
                columnHeader="Todo"
                taskStatus="todo"
            />
            <BoardColumn
                dragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                drop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'doing')}
                dragStart={handleDragStart}
                tasks={tasks.filter((task: Task) => task.status === 'doing')}
                color="orange"
                columnHeader="Doing"
                taskStatus="doing"
            />
            <BoardColumn
                dragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                drop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'done')}
                dragStart={handleDragStart}
                tasks={tasks.filter((task: Task) => task.status === 'done')}
                color="green"
                columnHeader="Done"
                taskStatus="done"
            />
        </div>
    );
};

export default Day25;
