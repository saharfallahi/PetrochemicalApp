import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import RecentPosts from "./RecentPosts";

function Footer() {
  return (
    <div>
      <div className="relative bg-secondary-900 md:bg-gradient-to-bl from-5% from-[#382729] via-50% via-secondary-900  to-95%  to-[#382729] section">
        <img
          src="/2rectangle.png"
          alt=""
          className="absolute hidden xl:block w-20 left-0 top-10"
        />
        <div className="container text-secondary-100 flex flex-col md:flex-row pt-10 pb-16  gap-x-16 gap-y-8">
          <div className="w-full md:w-1/3 flex flex-col gap-y-4">
            <img className="w-20 h-20" src="/gas-icon.png" alt="logo" />
            <div className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </div>
            <div className="flex gap-x-2">
              <a href="#" className="bg-secondary-100 icon-container">
                <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 text-secondary-900" />
              </a>
              <a href="#" className="bg-secondary-100 icon-container">
                <FaFacebookF className="w-4 h-4 md:w-5 md:h-5 text-secondary-900" />
              </a>
              <a href="#" className="bg-secondary-100 icon-container">
                <RiInstagramFill className="w-4 h-4 md:w-5 md:h-5 text-secondary-900" />
              </a>
            </div>
          </div>

          <div className="w-full flex flex-1 flex-col sm:flex-row gap-x-20 gap-y-8">
            <div className="space-y-6 hidden md:block">
              <span className="md:text-lg font-bold whitespace-nowrap">
                دسترسی سریع
              </span>
              <div className="text-sm flex flex-col gap-y-4">
                <NavLink to="/">صفحه اصلی</NavLink>
                <NavLink to="/about">درباره ما</NavLink>
                <NavLink to="/posts">وبلاگ</NavLink>
                <NavLink to="/services">خدمات</NavLink>
                <NavLink to="/contact">تماس با ما</NavLink>
              </div>
            </div>
            <div className="space-y-6">
              <span className="md:text-lg font-bold whitespace-nowrap">
                تماس با ما
              </span>
              <div className="text-sm flex flex-col justify-between gap-y-4">
                <div className="flex items-center  gap-x-2">
                  <div className="icon-container--primary">
                    <FaLocationDot className="icon" />
                  </div>
                  <span>تهران-جردن-خیابان شرقی-کوچه دوم-پلاک ۱</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="icon-container--primary">
                    <IoIosMail className="icon" />
                  </div>
                  <span>info@petroIR</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="icon-container--primary">
                    <BiSolidPhoneCall className="icon" />
                  </div>
                  <span>۰۲۱-۲۳۴۵۶۷۸</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h3 className="md:text-lg font-bold text-secondary-0 mb-4">
                آخرین مطالب وبلاگ
              </h3>
              <RecentPosts className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-900 text-center p-2 text-secondary-100 text-sm">
        <p>تمام حقوق این سایت متعلق به مهندس سحر فلاحی می باشد.</p>
      </div>
    </div>
  );
}

export default Footer;
