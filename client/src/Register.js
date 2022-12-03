import { Link } from "react-router-dom";
import "./index.css";
const Register = () => {
  return (
    <>
      <div className="center">
        <h1>TbOok</h1>
        <hr style={{ width: "40%" }} />
        <div className="login">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <h2>Register</h2>
          <form>
            <label htmlFor="name"> Name</label>
            <br />
            <input name="name" type={"text"} required />
            <br />
            <br />
            <label htmlFor="dob"> Date of birth</label>
            <br />
            <input name="dob" type={"date"} required />
            <br />
            <br />
            <label htmlFor="email"> Email</label>
            <br />
            <input name="email" type={"email"} required /> <br /> <br />
            <label htmlFor="password"> Password</label>
            <br />
            <input name="password" type={"password"} required />
            <br />
            <br />
            <label htmlFor="confirm-password"> Confirm password</label>
            <br />
            <input name="confirm-password" type={"password"} required />
            <br />
            <br />
            <button> Register</button>
            <br />
            <br />
            <Link to="/"> Already registered? Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
