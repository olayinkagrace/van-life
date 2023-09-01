import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import icon from "../assets/Icon.png";

function NavbarComponent() {
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
      <Link className='site-logo' to='/'>
        #VanLife
      </Link>
      <nav>
        {user && (
          <NavLink
            to='host'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Host
          </NavLink>
        )}
        <NavLink
          to='about'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to='vans'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        {!user && (
          <Link to='signup'>
            
            <img src={icon} className='login-icon' />
          </Link>
        )}
        {user && <button onClick={handleClick}>Log Out</button>}
      </nav>
    </header>
  );
}

export default NavbarComponent;
