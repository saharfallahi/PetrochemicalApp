import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

function Topbar() {
  return (
    <div className="border-b-[0.2px] border-secondary-600">
      <div className="hidden md:flex container items-center justify-between text-sm text-secondary-100 px-4 py-2">
        <span className="">برای آگاهی از مناقصات تماس بگیرید</span>
        <div className="flex items-center gap-5 font-bold">
          <div className="flex items-center gap-2">
            <span>۰۲۱-۲۳۴۵۶۷۸</span>
            <HiOutlinePhone className="w-4 h-4 text-primary-900" />
          </div>
          <div className="flex items-center gap-2">
            <span>info@petroIR</span>
            <HiOutlineMail className="w-4 h-4 text-primary-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
