import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    const auth = localStorage.getItem("auth");
    if (auth===true) {
        return children;
    }
    return <Navigate to="/" replace></Navigate>;
    
};
export default ProtectedRoute;