import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

function HostVans() {
  const { user } = useAuthContext();
  const [hostVans, setHostVans] = useState([]);

  const userId = user._id;
  

  useEffect(() => {
    fetch(`https://vanlife-564b.onrender.com/api/host/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setHostVans(data.user.vans));
  }, [userId, user]);
  const hostVansElements = hostVans.map((van) => (
    <Link to={van._id} key={van._id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansElements}</section>
      </div>
    </section>
  );
}

export default HostVans;
