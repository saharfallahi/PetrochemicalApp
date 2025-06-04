import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroSecondary from "./HeroSecondary";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname === "/" ? <Hero /> : <HeroSecondary pathname={location.pathname}/>}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
