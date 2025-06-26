import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const ItemsContext = createContext();
const BASE_URL = "https://geode-wary-pump.glitch.me";

// const BASE_URL = "http://localhost:5000";

export function ItemsProvider({ children }) {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/products",
  });

  const {
    data: services,
    isLoading: isLoadingServices,
    error: servicesError,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/services",
  });

  const getItemById = (id, type) => {
    const items = type === "products" ? products : services;
    if (!items) return null;
    return items.find((item) => String(item.id) === String(id));
  };

  const value = {
    products: products || [],
    services: services || [],
    isLoading: isLoadingProducts || isLoadingServices,
    error: productsError || servicesError,
    getItemById,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
}
