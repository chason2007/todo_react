import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Styles/Add.css";

const Add = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "task name",
      description: "task description",
      dueDate: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmitHandler = (data) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      completed: false,
    };
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    alert("Task added!");
    reset();
    navigate("/");
  };

  return (
    <div className="add-container">
      <div className="add-content">
        <div className="add-header">
          <h1 className="add-title">Add New Task</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="add-form">
            <label className="form-label">Title:</label>
            <input
              type="text"
              {...register("title", {
                required: "Task name required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              className="form-input"
            />
            {errors.title && (
              <span className="error-message">
                <i>{errors.title.message}</i>
              </span>
            )}
          </div>

          <div className="add-form">
            <label className="form-label">Description:</label>
            <textarea
              {...register("description", {
                required: "Add task description",
                minLength: { value: 5, message: "Minimum 5 characters" },
              })}
              className="form-textarea"
            />
            {errors.description && (
              <span className="error-message">
                <i>{errors.description.message}</i>
              </span>
            )}
          </div>

          <div className="add-form">
            <label className="form-label">Due Date:</label>
            <input
              type="date"
              {...register("dueDate", { required: true })}
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
};

export default Add;
