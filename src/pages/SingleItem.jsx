import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useItems } from "../context/ItemsProvider";
import LoadingSpinner from "../ui/LoadingSpinner";
import SearchBar from "../ui/SearchBar";
import SocialIcons from "../ui/SocialIcons";
import OtherItems from "../ui/OtherItems";
import ServiceContent from "../ui/ServiceContent";

export default function SingleItem() {
  const params = useParams();
  const type = params.productId ? "products" : "services";
  const itemId = params.productId || params.serviceId;
  const navigate = useNavigate();
  const { getItemById, isLoading, products, services } = useItems();
  const item = getItemById(itemId, type);

  // Get other items of the same type, excluding the current item
  const otherItems =
    type === "products"
      ? products.filter((product) => product.id !== itemId)
      : services.filter((service) => service.id !== itemId);

  useEffect(() => {
    if (!isLoading && !item) {
      navigate(`/${type}`);
    }
  }, [item, navigate, type, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-secondary-0 rounded-md border border-secondary-100 shadow-md py-8 px-6">
          <h3 className="font-bold mb-4">
            {type === "products" ? "محصولات دیگر" : "خدمات دیگر"}
          </h3>
          <OtherItems otherItems={otherItems} type={type} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-secondary-0 rounded-md shadow p-6">
        <h1 className="text-lg md:text-xl font-bold text-center mb-4">{item.title}</h1>
        <img
          src={item.image}
          alt={item.title}
          className="w-full rounded-md mx-auto mb-6 max-h-96 object-cover"
        />
        <div className="text-justify text-gray-700 leading-8 mb-6">
          {<ServiceContent html={item.description} />}
        </div>

        <SocialIcons />
      </div>
    </div>
  );
}
