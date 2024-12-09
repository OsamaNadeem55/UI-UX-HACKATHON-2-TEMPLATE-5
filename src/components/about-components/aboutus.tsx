import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
      {/* Text Section */}
      <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
        <h3 className="text-[#252B42] font-bold text-[16px] mb-6">
          ABOUT COMPANY
        </h3>
        <h1 className="text-[#252B42] font-bold text-[32px] sm:text-[48px] md:text-[58px] mb-6">
          ABOUT US
        </h1>
        <p className="text-[#737373] text-[16px] sm:text-[18px] md:text-[20px] mt-5">
          We know how large objects will act, <br />
          but things on a small scale
        </p>

        {/* Button Section */}
        <div className="mt-7 flex justify-center md:justify-start">
          <button className="px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all text-center text-[16px]">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/aboutus.png"
          alt="aboutus"
          height={280}
          width={415}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
