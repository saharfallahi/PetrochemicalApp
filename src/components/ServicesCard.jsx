import { useItems } from "../context/ItemsProvider";
import Cards from "../ui/Cards";


function ServicesCard() {
  const { services } = useItems();
  return <Cards items={services} type="services" />;
}

export default ServicesCard;
