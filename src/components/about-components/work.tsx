import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="bg-[#2A7CC7] w-full h-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-left w-full md:w-1/2">
          <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 md:mb-6">
            WORK WITH US
          </h3>
          <h2 className="text-[#FFFFFF] font-bold text-[28px] md:text-[40px] mb-4 md:mb-6">
            Now Let&apos;s grow Yours
          </h2>
          <p className="text-[#FFFFFF] text-[14px] md:text-[16px] mb-6">
            The gradual accumulation of information about atomic and <br />
            small-scale behavior during the first quarter of the 20th
          </p>
          <button className="border px-6 py-2 md:px-9 md:py-3 text-[#FFFFFF] rounded-md transition-transform hover:scale-110 hover:bg-[#1E6CB3] hover:border-transparent">
            Button
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/work.png"
            alt="work"
            height={300}
            width={590}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
