import { Button, Card, Typography } from "@mui/material";
import home from "../assets/about.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'

function Vans() {
  const {user} = useAuthContext()
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/vans", {
      headers: {
          'Authorization': `Bearer ${user.token}`
      }
   })
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [user]);
  const vanElements = vans.map((van) => {
    return (
      <Card key={van._id}>
        <Link to={`/vans/${van._id}`}>
        <img width={"100%"} src={home} alt='home-image' />
        <Typography>{van.name}</Typography>
        <Typography>${van.price}/day</Typography>
        <Button sx={{ bgcolor: "red", color: "white", margin: "5px" }}>
          {van.type}
        </Button></Link>
      </Card>
    );
  });
  return <>
  <h1>Explore our van options</h1>
  {vanElements}
  </>;
}

export default Vans;
