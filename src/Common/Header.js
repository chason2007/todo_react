import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header className="header">
        <img src="file:///c%3A/Users/Chason%20Ed/Desktop/to-do-app/src/logo.png" alt="logo"></img>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/add"}>Add</NavLink>
          <NavLink to={"/completed"}>Completed Tasks</NavLink>
          <NavLink to={"/settings"}>Settings</NavLink>
        </div>
      </header>
    );
}
export default Header;