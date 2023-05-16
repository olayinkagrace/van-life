import { useOutletContext } from "react-router-dom";
function Details() {
    const { van } = useOutletContext();

    return (
      <section>
        <h4>Name: {van.name}</h4>
        <h4>Type: {van.type}</h4>
        <h4>Description: {van.description}</h4>
        <h4>Visibility: public</h4>
      </section>
    );
}

export default Details;
