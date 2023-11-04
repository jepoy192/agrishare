import "../Styles/signin.css";

const Sigin = () => {
  return (
    <div className="container">
      <h1 className="heading1">SignIn</h1>
      <br />
      <input type="email" placeholder="Email" className="email" /> <br />
      <input type="password" placeholder="Password" className="password" />
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
