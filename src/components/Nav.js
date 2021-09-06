import { Link } from "react-router-dom";

function Nav() {
  // Styles (Temporary)
  const logoStyles = {
    color: "#CCC",
    textDecoration: "none"
  };
  const navStyles = {
    color: "white"
  };

  return (
    <nav className="clearfix">
      <Link style={ logoStyles } to="/">{/*<a href="/">*/}
        <h3>Logo</h3>
      </Link>{/*</a>*/}

      <ul>
        <li>
          <Link style={ navStyles } to="/about">
            About
          </Link>
        </li>

        <li>
          <Link style={ navStyles } to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;