import { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/Tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const addTask = (newTask) => {
        setTasks(prev => [...prev, newTask]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};