import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";

const Navbar = ({ planets }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>The Solar System</h1>
      </Link>
      <ul>
        {planets.length > 0 &&
          planets.map((planeta) => {
            return (
              <li key={planeta.id}>
                <NavLink
                  className={`planet${planeta.id}`}
                  to={`/planeta/${planeta.id}`}
                >
                  {planeta.name === "Plutão"
                    ? ` ${planeta.name}?`
                    : planeta.name.toUpperCase()}
                  {/* {planeta.name.toUpperCase()} */}
                </NavLink>
              </li>
            );
          })}
        <Link to="/about">
          <BsInfoCircleFill />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
