import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import '../Styles/Add.css';

const Add = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // Get existing tasks from localStorage or fetch from JSON
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        if (tasks.length === 0) {
            const response = await fetch('/Tasks.json');
            tasks = await response.json();
        }
        
        // Create new task
        const newTask = {
            id: String(Date.now()),
            title: data.title,
            description: data.description,
            dueDate: data.dueDate,
            completed: false
        };
        
        // Add to tasks array and save to localStorage
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        alert('Task added successfully!');
        
        // Reset form
        reset();
        
        // Navigate to home to see the new task
        navigate('/');
    };

    return (
        <div className="add-container">
            <div className="add-content">
                <div className="add-header">
                    <h1 className="add-title">Add New Task</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="add-form">
                        <label className="form-label">Title:</label>
                        <input
                            type="text"
                            {...register('title', { required: true })}
                            className="form-input"
                        />
                    </div>
                    
                    <div className="add-form">
                        <label className="form-label">Description:</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="form-textarea"
                        />
                    </div>
                    
                    <div className="add-form">
                        <label className="form-label">Due Date:</label>
                        <input
                            type="date"
                            {...register('dueDate', { required: true })}
                            className="form-input"
                        />
                    </div>
                    
                    <button type="submit" className="submit-button">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Add;