import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Outlet } from "react-router-dom";

function HostVanDetails() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [van, setVan] = useState([]);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FF8C38;",
  };

  useEffect(() => {
    fetch(`http://localhost:4000/api/host/vans/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVan(data.user));
  }, [id, user]);
  if (!van) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to='..' relative="path">Back to all vans</Link>
      <div>
        <img src={van.imageUrl} alt={`photo of ${van.name}`} width='200px' />
        <h2>{van.name}</h2>
        <p>{van.type}</p>
        <p>{van.price}</p>
      </div>
      <nav>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? { activeStyle } : null)}
        >
          Details
        </NavLink>
        <NavLink
          to='pricing'
          style={({ isActive }) => (isActive ? { activeStyle } : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to='photo'
          style={({ isActive }) => (isActive ? { activeStyle } : null)}
        >
          Photo
        </NavLink>
      </nav>
      <Outlet context={{ van }} />
    </section>
  );
}

export default HostVanDetails;
