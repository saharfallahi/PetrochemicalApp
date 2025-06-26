import { useItems } from "../context/ItemsProvider";
import Cards from "../ui/Cards";

function ServicesCard() {
  const { services } = useItems();
  return (
    <div className="section">
      <Cards items={services} type="services" />
    </div>
  );
}

export default ServicesCard;
