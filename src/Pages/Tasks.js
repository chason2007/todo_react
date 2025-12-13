import { useParams } from "react-router-dom";
import { useTask } from '../context/TaskContext';

const Tasks = () => {
    const { resId } = useParams();
    const { tasks } = useTask();
    const task = tasks.find(t => t.id === resId);
    
    if (!task) return <div><b>NOT FOUND</b></div>;
    
    return(
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="task-title">{task.title}</h1>
            <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                <p><strong>Description:</strong> {task.description}</p>
                <p><strong>Due Date:</strong> {task.dueDate}</p>
                <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
            </div>
        </div>
    );
}

export default Tasks;