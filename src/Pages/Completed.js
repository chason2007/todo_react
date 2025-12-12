import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const Completed = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    
    const loadCompletedTasks = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            const completed = tasks.filter(task => task.completed);
            setCompletedTasks(completed);
        } else {
            fetch('/Tasks.json')
                .then(res => res.json())
                .then(data => {
                    const completed = data.filter(task => task.completed);
                    setCompletedTasks(completed);
                });
        }
    };
    
    useEffect(() => {
        loadCompletedTasks();
        
        const handleStorageChange = () => {
            loadCompletedTasks();
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);
    
    return (
        <div>
            <h1>Completed Tasks Page</h1> 
            <p>View completed tasks here.</p>
            <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                {completedTasks.map(task => (
                    <TaskCard key={task.id} item={task} />
                ))}
            </div>
        </div>
    );
}

export default Completed;