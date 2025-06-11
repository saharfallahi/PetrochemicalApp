import { Link } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import { usePosts } from "../context/PostsProvider";

function Blog() {
  const { isLoading, posts } = usePosts();

  if (isLoading) {
    return (
      <div className="container section flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container section">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full border border-gray-200 rounded-xl overflow-hidden bg-secondary-0 shadow-md flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-secondary-500 mb-3 truncate">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-primary-900">{post.date}</span>
                <Link
                  to={`/posts/${post.id}`}
                  className="btn btn--primary btn--outline"
                >
                  مشاهده
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
