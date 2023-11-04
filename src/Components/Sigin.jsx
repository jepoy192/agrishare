const Sigin = () => {
  const signIn = {
    signIn: "Sign In",
    password: "t",
  };
  return (
    <div className="Container">
      <h1>SignIn</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Click me</button>
      <input type="checkbox" /> remember me
    </div>
  );
};
export default Sigin;
