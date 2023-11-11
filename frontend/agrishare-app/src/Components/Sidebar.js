import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Trade
      </Link>
      <Link to="/trade" className="nav-item">
        Categories
      </Link>
    </nav>
  );
};
export default Sidebar;
