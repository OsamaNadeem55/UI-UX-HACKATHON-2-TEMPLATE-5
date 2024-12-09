import Image from "next/image";
import React from "react";

const Problem = () => {
  return (
    <div className="flex flex-col items-center mt-11 px-6">
      {/* Heading and Paragraph Section */}
      <div className="flex flex-col sm:flex-row w-full items-start gap-6 py-8 mx-4 sm:mx-20">
        <div>
          <h3 className="text-[#E74040] text-[14px] mb-8">Problems trying</h3>
          <h2 className="font-bold text-[24px] text-[#252B42] sm:mt-2">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
            <br /> met sent.
          </h2>
        </div>
        <p className="text-[#737373] text-[14px] sm:mt-16 mt-8 sm:mx-20 mx-4">
          Problems trying to resolve the conflict between the two major realms
          of
          <br />
          Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-32 mt-16 mx-6 sm:mx-24">
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15K</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Happy Customers
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">150K</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Monthly Visitors
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Countries Worldwide
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">100+</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Top Partners
          </h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-16 sm:mt-20 flex justify-center items-center mx-6 sm:mx-36">
        <Image src={"/problem.png"} alt="problem" width={989} height={540} />
      </div>
    </div>
  );
};

export default Problem;
