import { useOutletContext } from "react-router-dom";

function Pricing() {
  const { van } = useOutletContext();

  return (
    <section>
      <h3 className="host-van-price">${van.price}<span>/day</span></h3>
     
    </section>
  );
}

export default Pricing;
