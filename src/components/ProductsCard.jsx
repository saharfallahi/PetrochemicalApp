import { useItems } from "../context/ItemsProvider";
import Cards from "../ui/Cards";
import LoadingSpinner from "../ui/LoadingSpinner";

function ProductsCard() {
  const { products,isLoading } = useItems();

   if (isLoading) {
    return (
      <div className="container section flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="section">
      <Cards items={products} type="products" />
    </div>
  );
}

export default ProductsCard;
