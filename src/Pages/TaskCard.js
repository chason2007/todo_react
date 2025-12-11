import { useNavigate } from "react-router-dom";
import '../Styles/TaskCard.css';

const TaskCard = ({item}) => {
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={() => navigate(`/tasks/${item.id}`)}
            className={`task-card ${item.completed ? 'completed' : ''}`}
        >
            <h3 className="task-card-title">{item.title}</h3>
            <p className="task-card-due">Due: {item.dueDate}</p>
        </div>
    );
}

export default TaskCard;