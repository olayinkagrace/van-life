import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import home from "../../assets/about.png";

function HostVans() {
  const { user } = useAuthContext();
  const [hostVans, setHostVans] = useState([]);

  const userId = user._id;

  useEffect(() => {
    fetch(`http://localhost:4000/api/host/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setHostVans(data.user.vans));
  }, [userId, user]);
  const hostVansElements = hostVans.map((van) => (
    <Link
      to={`/host/vans/${van._id}`}
      key={van._id}
      className='host-van-link-wrapper'
    >
      <div className='host-van-single'>
        <img src={home} alt={`photo of ${van.name}`} width="300px" />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ));
  return <div>{hostVansElements}</div>;
}

export default HostVans;
