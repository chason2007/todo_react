import { useParams } from "react-router-dom";
const Tasks = () => {
    const { resId } = useParams();
    return(
        <div>
            <h1>Tasks page will be {resId}</h1>
        </div>
    );
}

export default Tasks;