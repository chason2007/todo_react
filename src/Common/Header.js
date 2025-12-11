import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header className="header">
        <NavLink to={"/"}><img src="C:\Users\Chason Ed\Desktop\to-do-app\src\logo.png" alt="logo"></img></NavLink>
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