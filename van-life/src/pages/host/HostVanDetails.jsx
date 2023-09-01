import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Outlet } from "react-router-dom";

function HostVanDetails() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [van, setVan] = useState([]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FF8C38;",
  };

  useEffect(() => {
    fetch(`https://vanlife-564b.onrender.com/api/host/vans/${id}`, {
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
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={van.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${van.type}`}
                    >
                        {van.type}
                    </i>
                    <h3>{van.name}</h3>
                    <h4>${van.price}/day</h4>
                </div>
            </div>

            <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photo"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>
            <Outlet context={{ van }} />
        </div>
    </section>
)
}

export default HostVanDetails;
