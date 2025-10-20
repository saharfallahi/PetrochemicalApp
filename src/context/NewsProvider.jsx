// import { createContext, useContext, useMemo } from "react";
// import useFetch from "../hooks/useFetch";

// const NewsContext = createContext();
// const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";

// // const BASE_URL= "http://localhost:5000";

// function NewsProvider({ children }) {
//   const {
//     data: news,
//     isLoading,
//     error,
//   } = useFetch({
//     baseUrl: BASE_URL,
//     endpoint: "/news",
//   });

//   // Sort news by date and get recent news
//   const sortedNews = useMemo(() => {
//     if (!news) return [];
//     return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
//   }, [news]);

//   // Get recent news excluding a specific post
//   const getRecentNews = (currentNewsId) => {
//     if (!sortedNews) return [];
//     return sortedNews.filter((n) => n.id !== currentNewsId).slice(0, 4);
//   };

//   // Get a single news by id
//   const getNewsById = (newsId) => {
//     if (!news) return null;
//     return news.find((n) => n.id === newsId);
//   };

//   const value = {
//     news: sortedNews,
//     isLoading,
//     error,
//     getRecentNews,
//     getNewsById,
//   };

//   return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
// }

// function useNews() {
//   const context = useContext(NewsContext);
//   if (context === undefined) {
//     throw new Error("useNews must be used within a NewsProvider");
//   }
//   return context;
// }

// export { NewsProvider, useNews };


// src/context/NewsContext.jsx
import { createContext, useContext, useMemo, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { client } from "../sanityClient"; // اضافه برای Sanity

const NewsContext = createContext();

// فقط این مقدار رو تغییر بده تا منبع داده عوض بشه
const USE_SANITY = true; // ← اگر false بشه، از JSON Server می‌خونه

const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";
// const BASE_URL = "http://localhost:5000";

function NewsProvider({ children }) {
  const [sanityNews, setSanityNews] = useState([]);
  const [isSanityLoading, setIsSanityLoading] = useState(false);
  const [sanityError, setSanityError] = useState(null);

  // 🧠 حالت قبلی (JSON Server)
  const {
    data: jsonNews,
    isLoading: isJsonLoading,
    error: jsonError,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/news",
  });

  // 🧠 حالت Sanity
  useEffect(() => {
    if (!USE_SANITY) return;
    setIsSanityLoading(true);
    client
      .fetch(
        `*[_type == "news"] | order(date desc) {
          _id,
          title,
          "id": _id, // برای سازگاری با کد قبلی
          "image": image.asset->url,
          shortDesc,
          description,
          date,
          tags
        }`
      )
      .then((data) => {
        setSanityNews(data);
        setIsSanityLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSanityError(err);
        setIsSanityLoading(false);
      });
  }, []);

  // 🧩 انتخاب داده نهایی بر اساس منبع
  const news = USE_SANITY ? sanityNews : jsonNews;
  const isLoading = USE_SANITY ? isSanityLoading : isJsonLoading;
  const error = USE_SANITY ? sanityError : jsonError;

  // 🗂️ سورت‌کردن خبرها بر اساس تاریخ
  const sortedNews = useMemo(() => {
    if (!news) return [];
    return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [news]);

  // 🔍 گرفتن چند خبر اخیر
  const getRecentNews = (currentNewsId) => {
    if (!sortedNews) return [];
    return sortedNews.filter((n) => n.id !== currentNewsId).slice(0, 4);
  };

  // 🔎 گرفتن یک خبر خاص
  const getNewsById = (newsId) => {
    if (!news) return null;
    return news.find((n) => n.id === newsId);
  };

  const value = {
    news: sortedNews,
    isLoading,
    error,
    getRecentNews,
    getNewsById,
  };

  return (
    <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
  );
}

function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}

export { NewsProvider, useNews };