import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecentPosts from "../ui/RecentPosts";
import Tags from "../ui/Tags";
import LoadingSpinner from "../ui/LoadingSpinner";
import CommentForm from "../ui/CommentForm";
import SearchBar from "../ui/SearchBar";
import SocialIcons from "../ui/SocialIcons";
import ServiceContent from "../ui/ServiceContent";
import { useNews } from "../context/NewsProvider";
import RecentNews from "../ui/RecentNews";

export default function SingleNews() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const { getNewsById } = useNews();
  const news = getNewsById(newsId);

  useEffect(() => {
    if (!news) {
      navigate("/news");
    }
  }, [news, navigate]);

  if (!news) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
        <SearchBar />
        <div className="bg-secondary-100 rounded-xl shadow p-4">
          <h3 className="font-bold mb-4">آخرین اخبار</h3>
          <RecentNews currentNewsId={newsId} className="text-secondary-900" />
        </div>
        <Tags tags={news.tags} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-secondary-0 rounded-xl shadow p-6">
        <h1 className="text-xl font-bold text-center mb-4">{news.title}</h1>
        <img
          src={news.image}
          alt={news.title}
          className="w-full rounded-lg mx-auto mb-6 max-h-96 object-cover object-top"
        />
        <div className="text-justify text-gray-700 leading-8 mb-6">
        {<ServiceContent html={news.description} />}
        </div>
        <div className="flex items-center justify-between text-xs text-secondary-400 mt-4">
          <span>مدیر سایت</span>
          <span>{news.date}</span>
        </div>
        <SocialIcons />
        <CommentForm />
      </div>
    </div>
  );
}
