import TaskCard from "./TaskCard";
import { useTask } from '../context/TaskContext';

const Completed = () => {
    const { tasks } = useTask();
    const completedTasks = tasks.filter(task => task.completed);
    
    return (
        <div>
            <h1 className="task-title">Completed Tasks Page</h1> 
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