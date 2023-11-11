import "../Styles/signin.css";
import passicon from "../Images/icons8-eye-16 (1).png";

const Sigin = () => {
  return (
    <div className="container">
      <h1 className="heading1">Sign In</h1>
      <div>
        <input type="email" placeholder="Email" className="email" />
        <input type="password" placeholder="Password" className="password" />
        {/* <img src={passicon} className="icon" alt="Password Icon" /> */}
      </div>
      <br />
      <input type="checkbox" className="checkBox" /> remember me
      <span className="Forgot">Forgot Password</span>
      <br />
      <button className="login">Log In</button>
      <p>
        Dont have account <a>Register?</a>
      </p>
    </div>
  );
};
export default Sigin;
