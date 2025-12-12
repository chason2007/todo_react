import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Add.css';

const Add = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Get existing tasks from localStorage or fetch from JSON
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        if (tasks.length === 0) {
            const response = await fetch('/Tasks.json');
            tasks = await response.json();
        }
        
        // Create new task
        const newTask = {
            id: String(Date.now()),
            title: formData.title,
            description: formData.description,
            dueDate: formData.dueDate,
            completed: false
        };
        
        // Add to tasks array and save to localStorage
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        alert('Task added successfully!');
        
        // Reset form
        setFormData({ title: '', description: '', dueDate: '' });
        
        // Navigate to home to see the new task
        navigate('/');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="add-container">
            <div className="add-content">
                <div className="add-header">
                    <h1 className="add-title">Add New Task</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="form-textarea"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Due Date:</label>
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            required
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