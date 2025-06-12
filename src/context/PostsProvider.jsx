import { createContext, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";

const PostsContext = createContext();
const BASE_URL = "https://geode-wary-pump.glitch.me";

function PostsProvider({ children }) {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch({
    baseUrl: BASE_URL,
    endpoint: "/posts",
  });

  // Sort posts by date and get recent posts
  const sortedPosts = useMemo(() => {
    if (!posts) return [];
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts]);

  // Get recent posts excluding a specific post
  const getRecentPosts = (currentPostId) => {
    if (!sortedPosts) return [];
    return sortedPosts.filter((post) => post.id !== currentPostId).slice(0, 4);
  };

  // Get a single post by id
  const getPostById = (postId) => {
    if (!posts) return null;
    return posts.find((post) => post.id === postId);
  };

  const value = {
    posts: sortedPosts,
    isLoading,
    error,
    getRecentPosts,
    getPostById,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}

export { PostsProvider, usePosts };
