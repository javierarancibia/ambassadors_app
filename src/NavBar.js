import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/readme">readme</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
