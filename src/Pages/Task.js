import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Task = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    
    useEffect(() => {
        fetch('/Tasks.json')
            .then(res => res.json())
            .then(data => {
                const foundTask = data.find(t => t.id === id);
                setTask(foundTask);
            });
    }, [id]);
    
    if (!task) return <div>Loading...</div>;
    
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{task.title}</h1>
            <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                <p><strong>Description:</strong> {task.description}</p>
                <p><strong>Due Date:</strong> {task.dueDate}</p>
                <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
            </div>
        </div>
    );
}

export default Task;