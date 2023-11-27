import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <h1>
          <NavLink to='/'>Portfolio</NavLink>
        </h1>
        <nav>
          <ul>
            <li><NavLink to="/post">Post</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;