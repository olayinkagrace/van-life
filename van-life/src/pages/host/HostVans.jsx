import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

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
      to={van._id}
      key={van._id}
      className='host-van-link-wrapper'
    >
      <div className='host-van-single'>
        <img src={van.imageUrl} alt={`photo of ${van.name}`} width="300px" />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1>Your listed vans</h1>
      <div>
        {hostVans.length > 0 ? (
          <div>{hostVansElements}</div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}

export default HostVans;
