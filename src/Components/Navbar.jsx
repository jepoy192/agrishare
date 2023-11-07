import { pageLinks } from "../data";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.id} className="nav-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
