import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import icon from "../assets/Icon.png";
import { FaX, FaXmark } from "react-icons/fa6";

export default function NavbarComponent() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        {!user && (
          <Link to="login">
            <img src={icon} className="login-icon" />
          </Link>
        )}

        {user && <FaXmark onClick={handleClick} style={{margin: "0px 10px"}} />}
      </nav>
    </header>
  );
}
