import { Link } from "react-router-dom";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { useNews } from "../context/NewsProvider";
import ListItems from "./ListItems";
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
          <ListItems item={n}/>
        </Link>
      ))}
    </div>
  );
}
