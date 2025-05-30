import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Hero from "./ui/Hero";
import Cards from "./ui/Cards";
import WhyChoose from "./components/WhyChoose";
import Team from "./ui/Team";
import HeadSection from "./ui/HeadSection";

function App() {
  return (
    <div className=" w-full">
      <Hero />
      <HeadSection titleHead="خدماتی که ما ارائه می‌دهیم" descHead="ما بهترین کیفیت را ارائه می‌دهیم"/>
      <Cards />
      <div className="w-full">
        <h2 className="outline-title text-center text-2xl md:text-4xl lg:text-6xl font-bold p-4  mt-20 ">
          ما با کیفیت، نوآوری و استحکام، آینده‌ی صنعت را می‌سازیم
        </h2>
        <h3 className="text-center text-base md:text-2xl font-bold">
          ۱۵+ سال سابقه در صنعت پتروشیمی کشور
        </h3>
      </div>
      <WhyChoose/>
      <Team/>
    </div>
  );
}

export default App;
