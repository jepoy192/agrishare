import Trade from "./Pages/Trade";
import Categories from "./Pages/Categories";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Trade
        </Link>
        <Link to="/trade" className="nav-item">
          Categories
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Trade />} />
        <Route path="/trade" element={<Categories />} />
      </Routes>
    </div>
  );
};
export default App;
