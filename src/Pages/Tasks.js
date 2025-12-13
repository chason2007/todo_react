import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Tasks = () => {
    const { resId } = useParams();
    const [task, setTask] = useState(null);
    
    useEffect(() => {
        if (resId) {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks) {
                const tasks = JSON.parse(storedTasks);
                const foundTask = tasks.find(t => t.id === resId);
                setTask(foundTask);
            } else {
                fetch('/Tasks.json')
                    .then(res => res.json())
                    .then(data => {
                        const foundTask = data.find(t => t.id === resId);
                        setTask(foundTask);
                    });
            }
        }
    }, [resId]);
    
    if (!task) return <div><b>NOT FOUND</b></div>;
    
    return(
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

export default Tasks;