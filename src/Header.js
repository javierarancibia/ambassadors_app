import { Link } from "react-router-dom";

const Header = ({ classes }) => {
  return (
    <header className={classes.Header}>
      <h1>SlapSticker</h1>
      <p>
        Have you ever said something so dumb, you just wanted to slap yourself?
        Well now you can!
      </p>
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
    </header>
  );
};

export default Header;
