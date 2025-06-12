import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsProvider";
import { toPersianNumbers } from "../utils/toPersianNumbers";
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
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold  group-hover:text-primary-900 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-secondary-400 mt-1">
                {toPersianNumbers(post.date)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
