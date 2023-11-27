import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <h1>
          <NavLink to='/portfolio-deploy-practice/'>Portfolio</NavLink>
        </h1>
        <nav>
          <ul>
            <li><NavLink to="/portfolio-deploy-practice/post">Post</NavLink></li>
            <li><NavLink to="/portfolio-deploy-practice/about">About</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;