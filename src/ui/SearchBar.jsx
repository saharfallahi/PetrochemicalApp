
import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:w-1/3 mb-8 ">
      <input
        type="text"
        placeholder="جستجو..."
        className="w-full pl-10 text-sm md:text-base py-3 px-4 rounded-md text-secondary-900 border border-secondary-100 bg-secondary-0 hover:border-primary-200 focus:border-primary-300 transition-all duration-300 ease-out shadow-md focus:shadow-primary-200 dark:focus:shadow-secondary-200 "
        value={value}
        onChange={onChange}
      />
      <FiSearch
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-300 pointer-events-none"
        size={20}
      />
    </div>
  );
}

export default SearchBar;



