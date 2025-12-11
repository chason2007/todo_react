import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import '../Styles/Home.css';

const Home = () => {
    const {data} = useOutletContext();
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        // Check localStorage first, then fallback to JSON file
        const storedTasks = localStorage.getItem('tasks');
        const tasksCleared = localStorage.getItem('tasksCleared');
        
        if (tasksCleared === 'true') {
            setTasks([]);
        } else if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            fetch('/Tasks.json')
                .then(res => res.json())
                .then(data => {
                    setTasks(data);
                    localStorage.setItem('tasks', JSON.stringify(data));
                });
        }
    }, []);
    
    // Listen for storage changes to refresh tasks
    useEffect(() => {
        const handleStorageChange = () => {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);
    
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