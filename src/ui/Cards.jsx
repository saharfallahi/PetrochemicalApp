import { Link } from "react-router-dom";

function Cards({ items, type }) {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="space-y-8 bg-white p-4 shadow-[1px_0_10px_3px_rgb(0,0,0,0.1)] rounded-md"
            >
              <div className="text-primary-900">
                <img
                  src={item.icon || "/gas-icon.png"}
                  alt="icon"
                  className=" w-16 h-16 hover:rotate-[360deg] transition-all duration-300"
                />
              </div>
              <div>
                <h3 className="text-secondary-800 text-base md:text-lg font-bold mb-2">
                  {item.h3}
                </h3>
                <p className="text-sm md:text-base text-secondary-600 truncate">
                  {item.p}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link to={`/${type}/${item.id}`}>
                  <button className="btn btn--primary btn--outline">
                    مشاهده
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
