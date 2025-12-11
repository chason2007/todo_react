import { useParams } from "react-router-dom";
const Tasks = () => {
    const { resId } = useParams();
    return(
        <div>
            <h3>Tasks page will be {resId}</h3>
        </div>
    );
}

export default Tasks;