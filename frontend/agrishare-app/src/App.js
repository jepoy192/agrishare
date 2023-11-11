import Trade from "./Pages/Trade";
import Categories from "./Pages/Categories";

import { Routes, Route, Link } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Categories
        </Link>
        <Link to="/trade" className="nav-item">
          Trade
        </Link>
      </nav>
      <Landingpage/>

      
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
    </div>
  );
};
export default App;
