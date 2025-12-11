import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
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
        setTimeout(() => window.location.reload(), 100);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div style={{ padding: '32px 24px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{ color: '#111827', marginBottom: '8px', fontSize: '32px', fontWeight: '700' }}>Add New Task</h1>
                </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', height: '100px' }}
                    />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </div>
                
                <button 
                    type="submit"
                    style={{ 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        padding: '1rem 2rem', 
                        border: 'none', 
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        boxShadow: '0 2px 8px rgba(40, 167, 69, 0.3)',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                >
                    Add Task
                </button>
            </form>
            </div>
        </div>
    );
}

export default Add;