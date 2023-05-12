import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {  NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ bgcolor: "transparent", color: "black", position: "static" }}
      >
        <Toolbar>
          <NavLink to='/'  className={({ isActive }) => (isActive ? "my-link" : null)}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              #VanLife
            </Typography>
          </NavLink>
          <NavLink
            to='/host'
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            {" "}
            Host
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to='/vans'
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            Vans
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavbarComponent;
