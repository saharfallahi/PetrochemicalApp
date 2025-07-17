import { createContext, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";

const NewsContext = createContext();
const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";

// const BASE_URL= "http://localhost:5000";

function NewsProvider({ children }) {
  const {
    data: news,
    isLoading,
    error,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/news",
  });

  // Sort news by date and get recent news
  const sortedNews = useMemo(() => {
    if (!news) return [];
    return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [news]);

  // Get recent news excluding a specific post
  const getRecentNews = (currentNewsId) => {
    if (!sortedNews) return [];
    return sortedNews.filter((n) => n.id !== currentNewsId).slice(0, 4);
  };

  // Get a single news by id
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

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}

export { NewsProvider, useNews };
