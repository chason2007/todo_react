import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import Header from "../Common/Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "pass") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <div className="login-form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
