import React from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { Link } from "react-router-dom";

function WhyChoose() {
  return (
    <div className="relative w-full bg-secondary-100  section">
      <div className="container pt-20 pb-20 h-full flex flex-col gap-y-8 md:flex-row items-center justify-between">
        <div className="md:w-2/5 ">
          <img
            src="./three-images.png"
            alt="cropimages"
            className="w-full h-full  hover:-translate-y-4 transition-all duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center pr-8">
          <div className="flex items-center justify-start gap-2  mb-4">
            <HiOutlineWrenchScrewdriver className="w-5 h-5 md:w-7 md:h-7 text-primary-900" />
            <span className="md:text-lg text-primary-900 ">
              چرا پتروشیمی ایران زمین؟
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-secondary-900 mb-10">
            پتروشیمی ایران زمین، تلفیق زیبای علم و صنعت ایرانی
          </h2>
          <p className="text-sm md:text-base text-secondary-700 mb-6">
            پیشرو در صنعت پتروشیمی کشور، با تکیه بر تخصص فنی، تجربه عملیاتی و
            بهره‌گیری از استانداردهای روز دنیا، فعالیت خود را با اهداف زیر ادامه می دهد 
          </p>
          <ul className="mb-8 space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2 text-secondary-700">
              <span className="bg-orange-100 text-orange-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                ✔
              </span>
              ارتقاء کیفیت
            </li>
            <li className="flex items-center gap-2 text-secondary-700">
              <span className="bg-orange-100 text-orange-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                ✔
              </span>
              افزایش بهره‌وری
            </li>
            <li className="flex items-center gap-2 text-secondary-700">
              <span className="bg-orange-100 text-orange-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                ✔
              </span>
              توسعه پایدار
            </li>
          </ul>
          <div className="flex gap-4">
            <Link to="/about">
              <button className="btn btn--secondary px-6 py-3 md:px-10 md:py-4 whitespace-nowrap ">
                بیشتر بدانید
              </button>
            </Link>

            <Link to="/contact">
              <button className="btn btn--secondary px-6 py-3 md:px-10 md:py-4 whitespace-nowrap ">
                تماس با ما
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
