import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="site-wrapper">
            <NavbarComponent />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
  );
}

export default Layout;
