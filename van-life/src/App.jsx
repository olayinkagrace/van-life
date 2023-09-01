import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/Layout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./pages/host/HostLayout";
import Login, { loader as loginLoader } from "./pages/Login";
import Dashboard from "./pages/host/Dashboard";
import Signup from "./pages/Signup";
import HostVans from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";
import Pricing from "./pages/host/Pricing";
import Photo from "./pages/host/Photo";
import Details from "./pages/host/Details";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import AuthRoutes from "./components/AuthRoutes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      //relative path
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} loader={loginLoader} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path="vans/:id" element={<VanDetails />} />

        <Route element={<AuthRoutes />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}  />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photo" element={<Photo />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
