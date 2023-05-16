import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function VanDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { user } = useAuthContext();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/vans/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [id, user]);

  // search and type from  state={{ search: searchParams.toString(), type: typeFilter }} in vans.jsx
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div>
      <Link to={`..?${search}`} relative='path'>
        Back to {type} vans
      </Link>
      {van ? (
        <Card key={van._id}>
          <img
            width={"100%"}
            src={van.imageUrl}
            alt={`photo of ${van.imageUrl}`}
          />
          <Button sx={{ bgcolor: "green", color: "white", margin: "5px" }}>
            {van.type}
          </Button>
          <Typography>{van.name}</Typography>
          <Typography>${van.price}/day</Typography>
          <Typography>{van.description}</Typography>
          <Button sx={{ bgcolor: "orangered", color: "white" }}>
            Rent this van
          </Button>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetails;
