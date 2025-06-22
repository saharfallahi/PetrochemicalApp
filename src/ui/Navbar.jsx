import { useState, useRef, useCallback } from "react";
import CustomNavlink from "./CustomNavlink";
import useOutsideClick from "../hooks/useOutsideClick";
import Topbar from "./Topbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const links = [
  { name: "صفحه اصلی", to: "/" },
  { name: "محصولات", to: "/products" },
  { name: "خدمات", to: "/services" },
  { name: "اخبار", to: "/news" },
  { name: "وبلاگ", to: "/posts" },
  { name: "درباره ما", to: "/about" },
  { name: "تماس با ما", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  const navRef = useRef(null);
  const observerRef = useRef(null);
  const location = useLocation(); // بگیر مسیر فعلی رو

  const handleIntersection = useCallback(([entry]) => {
    setIsScrolled(!entry.isIntersecting);
  }, []);

  const setupObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    });

    const heroElement = document.querySelector(".hero-section");
    if (heroElement) {
      observerRef.current.observe(heroElement);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  // Initialize observer when component mounts
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver, location.pathname]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-secondary-900 shadow-lg"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <Topbar />
      <div className="container px-4 py-6 flex items-center justify-between">
        <div className="hidden md:flex gap-x-4">
          {links.map((link) => (
            <CustomNavlink key={link.name} to={link.to}>
              {link.name}
            </CustomNavlink>
          ))}
        </div>
        <div className="md:hidden">
          <button className="inline-flex items-center justify-center text-secondary-100 focus:outline-none ">
            <svg
              onClick={() => setIsOpen(true)}
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              onClick={() => setIsOpen(false)}
              className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center">
          <span className="md:text-lg lg:text-xl text-white font-bold whitespace-nowrap">
            پتروشیمی ایران زمین
          </span>
          <img src="/gas-icon.png" alt="Logo" className="h-10 mr-2" />
        </div>
      </div>
      <div
        ref={ref}
        // className={`${isOpen ? "block" : "hidden"} md:hidden `}
        className={`md:hidden transition-all duration-300 ease-in-out transform 
          ${
            isOpen
              ? "h-full opacity-100 translate-y-0"
              : "h-0 opacity-0 -translate-y-4 pointer-events-none "
          }`}
      >
        <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3 text-sm md:text-base text-secondary-600 ">
          {links.map((link) => (
            <CustomNavlink key={link.name} to={link.to} onClick={() => setIsOpen(false)}>
              {link.name}
            </CustomNavlink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
