import { Link } from "react-router-dom";
import "./index.css";
const Login = () => {
  return (
    <>
      <div className="center">
        <h1>TbOok</h1>

        <hr style={{ width: "40%" }} />
        <div className="login">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <h2>Login</h2>
          <form>
            <label htmlFor="email"> Email: </label>
            {/* <br /> */}
            <input name="email" type={"email"} required /> <br /> <br />
            <label htmlFor="password"> Password: </label>
            {/* <br /> */}
            <input name="password" type={"password"} required />
            <br />
            <br />
            <button> Login</button>
            <br />
            <br />
            <Link to="/register"> Not registered? Register!</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
