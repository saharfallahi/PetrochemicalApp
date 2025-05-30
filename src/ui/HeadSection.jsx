import React from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

function HeadSection({titleHead,descHead}) {
  return (
    <div className="mt-20 mb-10">
      <div className="flex items-center justify-center gap-2  ">
        <HiOutlineWrenchScrewdriver className="w-5 h-5 md:w-7 md:h-7 text-primary-900" />
        <span className="md:text-lg text-primary-900 ">
          {titleHead}
        </span>
      </div>
      <h2 className="text-center text-secondary-800 text-xl md:text-2xl lg:text-4xl font-bold mt-4">
        {descHead}
      </h2>
    </div>
  );
}

export default HeadSection;
