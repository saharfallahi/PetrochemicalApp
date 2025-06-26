import { toPersianNumbers } from "../utils/toPersianNumbers";

function ListItems({item}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold  group-hover:text-primary-900 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-secondary-400 mt-1">
          {toPersianNumbers(item.date)}
        </p>
      </div>
    </div>
  );
}

export default ListItems;
