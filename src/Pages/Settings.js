import { useState, useEffect } from 'react';
import '../Styles/Settings.css';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

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
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="theme" 
                                checked={!darkMode} 
                                onChange={() => {
                                    setDarkMode(false);
                                    localStorage.setItem('darkMode', 'false');
                                    document.body.classList.remove('dark-mode');
                                }}
                            />
                            Light
                        </label>
                        <label style={{marginLeft: '20px'}}>
                            <input 
                                type="radio" 
                                name="theme" 
                                checked={darkMode} 
                                onChange={() => {
                                    setDarkMode(true);
                                    localStorage.setItem('darkMode', 'true');
                                    document.body.classList.add('dark-mode');
                                }}
                            />
                            Dark
                        </label>
                    </div>
                </div>

                <div className="setting-item">
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