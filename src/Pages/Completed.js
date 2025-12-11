import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const Completed = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    
    useEffect(() => {
        fetch('/Tasks.json')
            .then(res => res.json())
            .then(data => {
                const completed = data.filter(task => task.completed);
                setCompletedTasks(completed);
            });
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