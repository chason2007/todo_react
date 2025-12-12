import { NavLink, useNavigate } from "react-router-dom"
import '../Styles/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };
    
    return(
        <header className="header">
        <NavLink to={"/"}><img src="/images/logo.png" alt="logo"></img></NavLink>
        <div className="links">
          {isAuthenticated && (
            <>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/add"}>Add</NavLink>
              <NavLink to={"/completed"}>Completed Tasks</NavLink>
              <NavLink to={"/settings"}>Settings</NavLink>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </>
          )}
        </div>
      </header>
    );
}
export default Header;