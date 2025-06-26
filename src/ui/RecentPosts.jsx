import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsProvider";
import ListItems from "./ListItems";
// import { formatDate } from "../utils/helpers";

export default function RecentPosts({ currentPostId = null, className = "" }) {
  const { posts } = usePosts();

  // Get recent posts excluding current post if provided
  const recentPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <div className={`space-y-4 ${className}`}>
      {recentPosts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`} className="block group">
          <ListItems item={post}/>
        </Link>
      ))}
    </div>
  );
}
