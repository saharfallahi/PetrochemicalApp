// import { createContext, useContext, useMemo } from "react";
// import useFetch from "../hooks/useFetch";

// const PostsContext = createContext();
// const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";

// // const BASE_URL= "http://localhost:5000";

// function PostsProvider({ children }) {
//   const {
//     data: posts,
//     isLoading,
//     error,
//   } = useFetch({
//     baseUrl: BASE_URL,
//     endpoint: "/posts",
//   });

//   // Sort posts by date and get recent posts
//   const sortedPosts = useMemo(() => {
//     if (!posts) return [];
//     return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
//   }, [posts]);

//   // Get recent posts excluding a specific post
//   const getRecentPosts = (currentPostId) => {
//     if (!sortedPosts) return [];
//     return sortedPosts.filter((post) => post.id !== currentPostId).slice(0, 4);
//   };

//   // Get a single post by id
//   const getPostById = (postId) => {
//     if (!posts) return null;
//     return posts.find((post) => post.id === postId);
//   };

//   const value = {
//     posts: sortedPosts,
//     isLoading,
//     error,
//     getRecentPosts,
//     getPostById,
//   };

//   return (
//     <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
//   );
// }

// function usePosts() {
//   const context = useContext(PostsContext);
//   if (context === undefined) {
//     throw new Error("usePosts must be used within a PostsProvider");
//   }
//   return context;
// }

// export { PostsProvider, usePosts };



// src/context/PostsContext.jsx
import { createContext, useContext, useMemo, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { client } from "../sanityClient"; // از فایل sanityClient.js

const PostsContext = createContext();

// تغییر این مقدار منبع داده رو مشخص می‌کنه 👇
const USE_SANITY = true;

const BASE_URL = "https://petrochemicalapp-json-server.onrender.com";
// const BASE_URL = "http://localhost:5000";

function PostsProvider({ children }) {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [isSanityLoading, setIsSanityLoading] = useState(false);
  const [sanityError, setSanityError] = useState(null);

  // 🧠 حالت JSON Server (قدیمی)
  const {
    data: posts,
    isLoading: isJsonLoading,
    error: jsonError,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/posts",
  });

  // 🧠 حالت Sanity
  useEffect(() => {
    if (!USE_SANITY) return;

    setIsSanityLoading(true);
    client
      .fetch(
        `*[_type == "post"] | order(date desc) {
          _id,
          "id": _id, // برای سازگاری با ساختار قبلی
          title,
          "image": image.asset->url,
          shortDesc,
          description,
          date,
          tags
        }`
      )
      .then((data) => {
        setSanityPosts(data);
        setIsSanityLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Error:", err);
        setSanityError(err);
        setIsSanityLoading(false);
      });
  }, []);

  // 🔁 انتخاب منبع داده (Sanity یا JSON Server)
  const finalPosts = USE_SANITY ? sanityPosts : posts;
  const isLoading = USE_SANITY ? isSanityLoading : isJsonLoading;
  const error = USE_SANITY ? sanityError : jsonError;

  // 🗂️ مرتب‌سازی بر اساس تاریخ
  const sortedPosts = useMemo(() => {
    if (!finalPosts) return [];
    return [...finalPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [finalPosts]);

  // 🔍 گرفتن پست‌های اخیر (به جز پست فعلی)
  const getRecentPosts = (currentPostId) => {
    if (!sortedPosts) return [];
    return sortedPosts.filter((post) => post.id !== currentPostId).slice(0, 4);
  };

  // 🔎 گرفتن پست با شناسه خاص
  const getPostById = (postId) => {
    if (!finalPosts) return null;
    return finalPosts.find((post) => post.id === postId);
  };

  const value = {
    posts: sortedPosts,
    isLoading,
    error,
    getRecentPosts,
    getPostById,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}

function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}

export { PostsProvider, usePosts };