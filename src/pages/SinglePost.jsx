import { useEffect } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useParams, useNavigate, Link } from "react-router-dom";
import { usePosts } from "../context/PostsProvider";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function SinglePost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { isLoading, getRecentPosts, getPostById } = usePosts();

  const post = getPostById(postId);
  const recentPosts = post ? getRecentPosts(post.id) : [];

  // If no post data is available, redirect to posts page
  useEffect(() => {
    if (!post && !isLoading) {
      navigate("/posts");
    }
  }, [post, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="container section flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
        {/* Search */}
        <div className="bg-secondary-100 rounded-xl shadow p-4 mb-4">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full border rounded p-2"
          />
        </div>
        {/* Recent Posts */}
        <div className="bg-secondary-100 rounded-xl shadow p-4">
          <h3 className="font-bold mb-2">نوشته های اخیر</h3>
          <ul className="space-y-2">
            {recentPosts.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/posts/${p.id}`}
                  className="flex items-center gap-2 hover:bg-secondary-200 p-2 rounded-lg transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{p.title}</span>
                    <span className="text-xs text-secondary-400">{p.date}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Tags */}
        <div className="bg-secondary-100 rounded-xl shadow p-4">
          <h3 className="font-bold mb-2">برچسب ها</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="badge badge--primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-secondary-0 rounded-xl shadow p-6">
        <h1 className="text-xl font-bold text-center mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mx-auto mb-6 max-h-96 object-cover"
        />
        <div className="text-justify text-gray-700 leading-8 mb-6">
          {post.description}
        </div>
        <div className="flex items-center justify-between text-xs text-secondary-400 mt-4">
          <span>مدیر سایت</span>
          <span>{post.date}</span>
        </div>
        {/* Social & meta */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-secondary-500">اشتراک گذاری :</span>
          <a href="#" className="icon--container">
            <FaTwitter className="icon" />
          </a>
          <a href="#" className="icon--container">
            <RiInstagramFill className="icon" />
          </a>
          <a href="#" className="icon--container">
            <FaTelegramPlane className="icon" />
          </a>
        </div>
        {/* Comment Form */}
        <div className="mt-8">
          <h2 className="font-bold mb-2">نوشتن دیدگاه</h2>
          <p className="text-xs text-gray-400 mb-2">
            نشانی ایمیل شما منتشر نخواهد شد.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="نام"
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="دیدگاه"
              className="w-full border rounded p-2 h-24 resize-none"
            ></textarea>
            <button type="submit" className="btn btn--primary btn--outline">
              ارسال دیدگاه
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
