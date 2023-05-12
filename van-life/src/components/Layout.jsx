import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
function Layout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
