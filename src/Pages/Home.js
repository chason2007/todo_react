import TaskCard from "./TaskCard";
import '../Styles/Home.css';
import { useTask } from '../context/TaskContext';

const Home = () => {
    const { tasks } = useTask();
    
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-header">
                    <h1 className="home-title">My Tasks</h1> 
                    <p className="home-subtitle">Manage your daily tasks efficiently</p>
                </div>
                <div className="tasks-grid">
                    {tasks.map(task => (
                        <TaskCard key={task.id} item={task} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;