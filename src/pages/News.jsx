import { Link } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import ServiceContent from "../ui/ServiceContent";
import { useNews } from "../context/NewsProvider";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";

function News() {
  const { news, isLoading } = useNews();
  const [search, setSearch] = useState("");
  const filteredNews = news.filter((n) => n.title.includes(search));
  const displayNews = filteredNews || news;

  if (isLoading) {
    return (
      <div className="container section flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container section">
       <SearchBar value={search} onChange={(e) => setSearch(e.target.value)}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayNews.map((n) => (
          <div
            key={n.id}
            className="w-full border border-gray-200 rounded-md overflow-hidden bg-secondary-0 shadow-md flex flex-col"
          >
            <img
              src={n.image}
              alt={n.title}
              className="w-full h-40 object-cover object-top"
            />
            <div className="p-4">
              <h3 className="text-base md:text-lg font-bold mb-2 truncate">{n.title}</h3>
              <p className="text-sm text-secondary-500 mb-3 truncate">
                {<ServiceContent html={n.shortDesc} />}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-primary-900">{n.date}</span>
                <Link to={`/news/${n.id}`}>
                  <button className="btn btn--primary btn--outline">
                    مشاهده
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
