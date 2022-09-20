import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({ planets }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>The Solar System</h1>
      </Link>
      <ul className={menuIsOpen ? `` : `invisible`}>
        {planets.length > 0 &&
          planets.map((planeta) => {
            return (
              <li key={planeta.id}>
                <NavLink
                  onClick={handleMenu}
                  className={`planet${planeta.id}`}
                  to={`/planeta/${planeta.id}`}
                >
                  {planeta.name === "Plutão"
                    ? ` ${planeta.name}?`
                    : planeta.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        <Link to="/about">
          <BsInfoCircleFill />
        </Link>
      </ul>
      <div>
        {menuIsOpen ? (
          <AiFillCloseCircle className="close-menu-btn" onClick={handleMenu} />
        ) : (
          <ImMenu className="open-menu-btn" onClick={handleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
