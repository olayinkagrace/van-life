import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";


function VanDetails() {
  const { id } = useParams();
  const location = useLocation();

  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`https://vanlife-564b.onrender.com/api/vans/${id}`, {
    
    })
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [id]);

  // search and type from  state={{ search: searchParams.toString(), type: typeFilter }} in vans.jsx
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}

export default VanDetails;
