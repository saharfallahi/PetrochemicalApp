import { NavLink } from "react-router-dom";

// hover:bg-primary-100/80

function CustomNavlink({ children, to, onClick }) {
  const navlinkClass =
    "flex items-center gap-x-2 text-sm md:text-base whitespace-nowrap hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} text-primary-900`
            : `${navlinkClass} text-secondary-0`
        }
        onClick={onClick}
        end
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
