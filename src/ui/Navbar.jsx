import CustomNavlink from "./CustomNavlink";

const links = [
  { name: "صفحه اصلی", to: "/" },
  { name: "وبلاگ", to: "/blog" },
  { name: "خدمات", to: "/services" },
  { name: "درباره ما", to: "/about" },
  { name: "تماس با ما", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex gap-x-4">
          {links.map((link) => (
            <CustomNavlink key={link.name} to={link.to}>
              {link.name}
            </CustomNavlink>
          ))}
        </div>

        <div className="flex items-center">
          <span className="text-lg md:text-xl text-white font-bold whitespace-nowrap">
            پتروشیمی ایران زمین
          </span>
          <img src="/gas-icon.png" alt="Logo" className="h-10 mr-2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
