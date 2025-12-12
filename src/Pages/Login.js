import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import Header from "../Common/Header";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "pass") {
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-group">
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
                className="login-input"
              />
            </div>
            <div className="login-form-group">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="login-input"
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
