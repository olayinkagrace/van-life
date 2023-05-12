import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  // const activeStyle = {
  //   fontWeight: "bold",
  //   textDecoration: "none",
  //   color: "#FF8C38;",
  // };
  return (
    <nav>
      <NavLink
        to='/host'
        end
        className={({ isActive }) => (isActive ? "my-link" : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/host/income'
        className={({ isActive }) => (isActive ? "my-link" : null)}
      >
        Income
      </NavLink>
      <NavLink
        to='/host/vans'
        className={({ isActive }) => (isActive ? "my-link" : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to='/host/reviews'
        className={({ isActive }) => (isActive ? "my-link" : null)}
      >
        Reviews
      </NavLink>
      <Outlet />
    </nav>
  );
}

export default HostLayout;
