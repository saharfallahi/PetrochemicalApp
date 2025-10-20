// import { createContext, useContext } from "react";
// import useFetch from "../hooks/useFetch";

// const ItemsContext = createContext();
// const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";

// // const BASE_URL = "http://localhost:5000";

// export function ItemsProvider({ children }) {
//   const {
//     data: products,
//     isLoading: isLoadingProducts,
//     error: productsError,
//   } = useFetch({
//     baseUrl: BASE_URL,
//     endpoint: "/products",
//   });

//   const {
//     data: services,
//     isLoading: isLoadingServices,
//     error: servicesError,
//   } = useFetch({
//     baseUrl: BASE_URL,
//     endpoint: "/services",
//   });

//   const getItemById = (id, type) => {
//     const items = type === "products" ? products : services;
//     if (!items) return null;
//     return items.find((item) => String(item.id) === String(id));
//   };

//   const value = {
//     products: products || [],
//     services: services || [],
//     isLoading: isLoadingProducts || isLoadingServices,
//     error: productsError || servicesError,
//     getItemById,
//   };

//   return (
//     <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
//   );
// }

// export function useItems() {
//   const context = useContext(ItemsContext);
//   if (!context) {
//     throw new Error("useItems must be used within an ItemsProvider");
//   }
//   return context;
// }

// src/context/ItemsContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { client } from "../sanityClient"; // ← بعداً می‌سازیمش

const ItemsContext = createContext();

const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";
const USE_SANITY = true; // ← با false برگرد به حالت قبلی

export function ItemsProvider({ children }) {
  const [sanityProducts, setSanityProducts] = useState([]);
  const [sanityServices, setSanityServices] = useState([]);
  const [isSanityLoading, setIsSanityLoading] = useState(false);
  const [sanityError, setSanityError] = useState(null);

  // 🔹 حالت قدیمی (JSON Server)
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

  // 🔹 حالت Sanity
  useEffect(() => {
    if (!USE_SANITY) return;

    setIsSanityLoading(true);
    Promise.all([
      client.fetch(
        `*[_type == "product"] | order(_createdAt desc) {
          _id,
          "id": _id,
          title,
          shortDesc,
          "image": image.asset->url,
          description,
          "icon": icon.asset->url
        }`
      ),
      client.fetch(
        `*[_type == "service"] | order(_createdAt desc) {
          _id,
          "id": _id,
          title,
          shortDesc,
          "image": image.asset->url,
          description
        }`
      ),
    ])
      .then(([productsData, servicesData]) => {
        setSanityProducts(productsData);
        setSanityServices(servicesData);
        setIsSanityLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Error:", err);
        setSanityError(err);
        setIsSanityLoading(false);
      });
  }, []);

  // 🔁 انتخاب منبع داده (Sanity یا JSON Server)
  const finalProducts = USE_SANITY ? sanityProducts : products;
  const finalServices = USE_SANITY ? sanityServices : services;
  const isLoading = USE_SANITY
    ? isSanityLoading
    : isLoadingProducts || isLoadingServices;
  const error = USE_SANITY ? sanityError : productsError || servicesError;

  // 🔍 متد مشترک برای گرفتن یک آیتم بر اساس نوع و id
  const getItemById = (id, type) => {
    const items = type === "products" ? finalProducts : finalServices;
    if (!items) return null;
    return items.find((item) => String(item.id) === String(id));
  };

  const value = {
    products: finalProducts || [],
    services: finalServices || [],
    isLoading,
    error,
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
