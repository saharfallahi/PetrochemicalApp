import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router-dom";
import { usePosts } from "../context/PostsProvider";

export default function Breadcrumbs({ links = [] }) {
  const location = useLocation();
  const { postId } = useParams();
  const { getPostById } = usePosts();
  const currentPath = location.pathname;

  // Find the matching link for current path
  const findMatchingLink = (path) => {
    return links.find((link) => link.to === path);
  };

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = currentPath.split("/").filter(Boolean);
    const breadcrumbs = [];

    // Always add home
    breadcrumbs.push({
      name: "خانه",
      to: "/",
      active: currentPath === "/",
    });

    // Build path progressively and find matching links
    let currentPathBuilder = "";
    pathSegments.forEach((segment, index) => {
      currentPathBuilder += `/${segment}`;
      const matchingLink = findMatchingLink(currentPathBuilder);

      if (matchingLink) {
        // If we're on a post page and this is the posts segment
        if (
          segment === "posts" &&
          postId &&
          pathSegments[index + 1] === postId
        ) {
          breadcrumbs.push({
            ...matchingLink,
            active: false,
          });
          // Add the post title as the next breadcrumb
          const post = getPostById(postId);
          if (post) {
            breadcrumbs.push({
              name: post.title,
              to: currentPathBuilder + `/${postId}`,
              active: true,
            });
          }
        } else {
          breadcrumbs.push({
            ...matchingLink,
            active: currentPathBuilder === currentPath,
          });
        }
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="py-2 ">
      <ol className="flex items-center text-sm whitespace-nowrap">
        {breadcrumbs.map((breadcrumb) => (
          <li
            key={breadcrumb.to}
            aria-current={breadcrumb.active ? "page" : undefined}
            className="flex items-center"
          >
            {breadcrumb.active ? (
              <span className="text-primary-100 font-bold text-sm ">
                {breadcrumb.name}
              </span>
            ) : (
              <>
                <Link
                  to={breadcrumb.to}
                  className=" text-sm  font-bold text-primary-100 hover:text-primary-300 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
                <span className="mx-2 text-secondary-100">
                  {" "}
                  <IoIosArrowBack />{" "}
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
