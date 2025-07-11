import { Link } from "react-router-dom";

function OtherItems({ otherItems, type }) {
  return (
    <div className="space-y-4">
      {otherItems.map((otherItem) => (
        <Link
          key={otherItem.id}
          to={`/${type}/${otherItem.id}`}
          className="block group"
        >
          <div className="flex items-center gap-3 rounded-md transition-colors">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={otherItem.icon || otherItem.image}
                alt={otherItem.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold group-hover:text-primary-900 transition-colors line-clamp-2">
                {otherItem.title}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default OtherItems;
