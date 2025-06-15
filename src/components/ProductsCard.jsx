import { useItems } from "../context/ItemsProvider";
import Cards from "../ui/Cards";

function ProductsCard() {
  const { products } = useItems();
  return (
    <div className="section">
      <Cards items={products} type="products" />
    </div>
  );
}

export default ProductsCard;
