import { NavLink } from "react-router-dom";

const Navbar = ({ planets }) => {
  // const findId = (name) => {

  // }

  return (
    <nav className="navbar">
      <h1>The Solar System</h1>
      <ul>
        {planets.length > 0 &&
          planets.map((planeta) => {
            return (
              <li key={planeta.id}>
                <NavLink to={`/${planeta.id}`}>
                  {planeta.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        {/* <li>
          <NavLink to="/0">SOL </NavLink>
        </li>
        <li>
          <NavLink to="/1">MERCÚRIO</NavLink>
        </li>
        <li>
          <NavLink to="/2">VÊNUS</NavLink>
        </li>
        <li>
          <NavLink to="/3">TERRA</NavLink>
        </li>
        <li>
          <NavLink to="/4">MARTE</NavLink>
        </li>
        <li>
          <NavLink to="/5">JÚPITER</NavLink>
        </li>
        <li>
          <NavLink to="/6">SATURNO</NavLink>
        </li>
        <li>
          <NavLink to="/7">URANO</NavLink>
        </li>
        <li>
          <NavLink to="/8">NETUNO</NavLink>
        </li>
        <li>
          <NavLink to="/9">Cadê Plutão?</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
