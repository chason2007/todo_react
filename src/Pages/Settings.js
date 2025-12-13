import { useState, useEffect } from 'react';
import '../Styles/Settings.css';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const clearAllTasks = () => {
        alert('Tasks cannot be cleared without localStorage');
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