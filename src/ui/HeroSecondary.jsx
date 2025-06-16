import Breadcrumbs from "./BreadCrumbs";

const links = [
  { name: "صفحه اصلی", to: "/" },
  { name: "وبلاگ", to: "/posts" },
  { name: "محصولات", to: "/products" },
  { name: "خدمات", to: "/services" },
  { name: "درباره ما", to: "/about" },
  { name: "تماس با ما", to: "/contact" },
];

function HeroSecondary({ pathname }) {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden hero-section">
      <img
        src="./petro-sunrise.jpg"
        alt="Petrochemical Sunrise"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
      />

      <div className="absolute inset-0 bg-black/40 z-20"></div>

      <div className="relative container px-4 h-full z-30">
        <div className="flex flex-col items-center justify-center h-full text-secondary-0">
          <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold">
            {links.find((link) => link.to === pathname)?.name}
          </h1>
          <div className="absolute bg-primary-900 px-4 py-1  rounded-lg  bottom-0 left-1/2 -translate-x-1/2 flex  justify-center items-center">
            <Breadcrumbs links={links} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSecondary;
