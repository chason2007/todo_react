import "../Styles/Settings.css";

const Settings = () => {
  const clearAllTasks = () => {
    alert("Tasks cannot be cleared without localStorage");
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="settings-header">
          <h1 className="settings-title">Settings</h1>
        </div>

        <div className="setting-item">
          <button className="clear-button" onClick={clearAllTasks}>
            Clear All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
