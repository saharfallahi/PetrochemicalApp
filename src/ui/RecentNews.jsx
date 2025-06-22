import { Link } from "react-router-dom";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { useNews } from "../context/NewsProvider";
// import { formatDate } from "../utils/helpers";

export default function RecentNews({ currentNewsId = null, className = "" }) {
  const { news } = useNews();

  // Get recent posts excluding current post if provided
  const recentNews = news
    .filter((n) => n.id !== currentNewsId)
    .slice(0, 3);

  return (
    <div className={`space-y-4 ${className}`}>
      {recentNews.map((n) => (
        <Link key={n.id} to={`/news/${n.id}`} className="block group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={n.image}
                alt={n.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold  group-hover:text-primary-900 transition-colors line-clamp-2">
                {n.title}
              </h3>
              <p className="text-xs text-secondary-400 mt-1">
                {toPersianNumbers(n.date)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
