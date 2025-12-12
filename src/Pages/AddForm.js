import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Add.css";

const Add = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title: title,
      description: description,
      dueDate: dueDate,
      completed: false,
    };
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    alert("Task added!");

    setTitle("");
    setDescription("");
    setDueDate("");
    navigate("/");
  };

  return (
    <div className="add-container">
      <div className="add-content">
        <div className="add-header">
          <h1 className="add-title">Add New Task</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-form">
            <label className="form-label">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="add-form">
            <label className="form-label">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              required
            />
          </div>

          <div className="add-form">
            <label className="form-label">Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
