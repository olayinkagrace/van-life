import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import home from "../assets/about.png";


function VanDetails() {
    const {id} = useParams()
    const [van, setVan] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:4000/api/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.van));
    }, [id]);
    console.log(van)
  return (
    <div>
     {van ? (
       <Card key={van._id}>
       <img width={"100%"} src={home} alt='home-image' />
       <Button sx={{ bgcolor: "green", color: "white", margin: "5px" }}>
           {van.type}
         </Button>
         <Typography>{van.name}</Typography>
         <Typography>${van.price}/day</Typography>
        <Typography>{van.description}</Typography>
        <Button sx={{ bgcolor: "orangered", color: "white" }}>Rent this van</Button>
       </Card>
     ) : <h2>Loading...</h2>}
    </div>
  )
}

export default VanDetails
