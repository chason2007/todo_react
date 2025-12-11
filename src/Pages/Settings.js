import { useState, useEffect } from 'react';
import '../Styles/Settings.css';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const clearAllTasks = () => {
        if (window.confirm('Are you sure you want to clear all tasks? This action cannot be undone.')) {
            localStorage.removeItem('tasks');
            localStorage.setItem('tasksCleared', 'true');
            alert('All tasks have been cleared!');
            window.location.reload();
        }
    };

    return (
        <div className="settings-container">
            <div className="settings-content">
                <div className="settings-header">
                    <h1 className="settings-title">Settings</h1>
                </div>
                
                <div className="setting-item">
                    <div className="setting-label">Dark Mode</div>
                    <div className="setting-description">Toggle between light and dark theme</div>
                    <button 
                        className="toggle-button" 
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                    </button>
                </div>

                <div className="setting-item">
                    <div className="setting-label">Clear All Tasks</div>
                    <div className="setting-description">Remove all tasks from your list permanently</div>
                    <button 
                        className="clear-button" 
                        onClick={clearAllTasks}
                    >
                        Clear All Tasks
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;