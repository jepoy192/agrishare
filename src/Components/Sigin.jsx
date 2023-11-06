import "../Styles/signin.css";

const Sigin = () => {
  const signIn = {
    headerOne: "Sign In",
    emailInput: "Email",
    passInput: "Password",
    checkBox: "checkbox",
  };

  return (
    <div className="container">
      <h1 className="heading1">{signIn.headerOne}</h1>

      <div className="input-form">
        <input
          type={signIn.emailInput}
          placeholder={signIn.emailInput}
          className="email"
        />

        <input
          type={signIn.passInput}
          placeholder={signIn.passInput}
          className="password"
        />
      </div>

      <input type="checkBox" className="checkBox" />

      <span className="remember">remember me</span>
      <span className="Forgot">Forgot Password</span>
      <br />
      <button className="login">Log In</button>
      <p className="register">
        Dont have account <a href="www.facebook.com">Register?</a>
      </p>
    </div>
  );
};
export default Sigin;
