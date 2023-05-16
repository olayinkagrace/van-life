import { Card, Typography } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getVans } from "../hooks/Api";

export function loader() {
  return getVans();
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData()

  const displayElements = typeFilter
    ? vans.filter((theVan) => theVan.type === typeFilter)
    : vans;

  const vanElements = displayElements.map((van) => {
    return (
      <Card key={van._id}>
        <Link
          to={van._id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
          <img width={"100%"} src={van.imageUrl} />
          <Typography>{van.name}</Typography>
          <Typography>${van.price}/day</Typography>
          <button>{van.type}</button>
        </Link>
      </Card>
    );
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <>
      <h1>Explore our van options</h1>
      <div>
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          luxury
        </button>
        {typeFilter ? (
          <button onClick={() => handleFilterChange("type", null)}>
            clear
          </button>
        ) : null}
      </div>
      {vanElements}
    </>
  );
}

export default Vans;
