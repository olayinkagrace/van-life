import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import home from "../../assets/about.png";
import {useAuthContext} from '../../hooks/useAuthContext'


function HostVanDetails() {
    const {id} = useParams()
    const {user} = useAuthContext()
    const [van, setVan] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:4000/api/host/vans/${id}`, {
          headers: {
              'Authorization': `Bearer ${user.token}`
          }
       })
          .then((res) => res.json())
          .then((data) => setVan(data.user));
      }, [id, user]);
      if(!van){
        return <h1>Loading...</h1>
      }
  return (
    <div>
      <img src={home} width='150px' />
      <h2>{van.name}</h2>
      <p>{van.type}</p>
      <p>{van.price}</p>
    </div>
  )
}

export default HostVanDetails
