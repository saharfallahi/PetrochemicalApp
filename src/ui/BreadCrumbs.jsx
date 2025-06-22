import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router-dom";
import { usePosts } from "../context/PostsProvider";
import { useItems } from "../context/ItemsProvider";
import { useNews } from "../context/NewsProvider";

export default function Breadcrumbs({ links = [] }) {
  const location = useLocation();
  const { postId, productId, serviceId, newsId } = useParams();
  const { getPostById } = usePosts();
  const currentPath = location.pathname;
  const { getItemById } = useItems();
  const { getNewsById } = useNews();

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
        }
        // If we're on a product page and this is the products segment
        else if (
          segment === "products" &&
          productId &&
          pathSegments[index + 1] === productId
        ) {
          breadcrumbs.push({
            ...matchingLink,
            active: false,
          });
          // Add the product title as the next breadcrumb
          const product = getItemById(productId, "products");
          if (product) {
            breadcrumbs.push({
              name: product.title,
              to: currentPathBuilder + `/${productId}`,
              active: true,
            });
          }
        }
        // If we're on a service page and this is the services segment
        else if (
          segment === "services" &&
          serviceId &&
          pathSegments[index + 1] === serviceId
        ) {
          breadcrumbs.push({
            ...matchingLink,
            active: false,
          });
          // Add the service title as the next breadcrumb
          const service = getItemById(serviceId, "services");
          if (service) {
            breadcrumbs.push({
              name: service.title,
              to: currentPathBuilder + `/${serviceId}`,
              active: true,
            });
          }
        }
        // If we're on a product page and this is the products segment
        else if (
          segment === "news" &&
          newsId &&
          pathSegments[index + 1] === newsId
        ) {
          breadcrumbs.push({
            ...matchingLink,
            active: false,
          });
          // Add the product title as the next breadcrumb
          const news = getNewsById(newsId, "news");
          if (news) {
            breadcrumbs.push({
              name: news.title,
              to: currentPathBuilder + `/${newsId}`,
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
    <nav aria-label="Breadcrumb" className="py-1 md:py-2">
      <ol className="flex items-center text-xs md:text-sm whitespace-nowrap">
        {breadcrumbs.map((breadcrumb) => (
          <li
            key={breadcrumb.to}
            aria-current={breadcrumb.active ? "page" : undefined}
            className="flex items-center"
          >
            {breadcrumb.active ? (
              <span className="text-primary-100 font-bold text-xs md:text-sm ">
                {breadcrumb.name}
              </span>
            ) : (
              <>
                <Link
                  to={breadcrumb.to}
                  className="text-xs md:text-sm font-bold text-primary-100 hover:text-primary-300 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
                <span className="mx-1 md:mx-2 text-secondary-100">
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
