import Image from "next/image";
import { FaClock, FaComment, FaChevronRight } from "react-icons/fa";
import React from "react";

const FeauresPosts = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-20">
        <h3 id="blog" className="text-[#23A6F0] text-[14px] font-bold">Practice Advice</h3>
        <h2 className="text-[#252B42] text-[40px] font-bold">FEATURED POSTS</h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Flex container for centering the posts */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Post Template for Reusability */}
        {["blog1.png", "blog2.png", "blog3.png"].map((blog, index) => (
          <div
            key={index}
            className="max-w-xs sm:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
          >
            {/* Image Section */}
            <div className="relative group">
              {/* NEW Label */}
              <div className="absolute top-4 left-4 bg-[#E74040] text-white py-1 px-2 text-[14px] font-bold h-[24px] w-[58px] flex items-center justify-center">
                NEW
              </div>

              <Image
                src={`/${blog}`}
                alt="blog"
                width={348}
                height={300}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="p-4 text-center">
              {/* Category Tags */}
              <div className="flex justify-center space-x-3 mb-3">
                <span className="text-[#8EC2F2] py-1 px-3 rounded-full text-[12px] bg-gray-100">
                  Google
                </span>
                <span className="text-[#737373] py-1 px-3 rounded-full text-[12px] bg-gray-100">
                  Trending
                </span>
                <span className="text-[#737373] py-1 px-3 rounded-full text-[12px] bg-gray-100">
                  New
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] text-[#252B42] mt-4">
                Loudest à la Madison #{index + 1} <br />
                <span className="text-[#252B42] text-[20px]">(L&spos;integral)</span>
              </h3>

              {/* Description */}
              <p className="text-[#737373] text-[14px] mt-2">
                We focus on ergonomics and meeting <br /> you where you work.
                It&apos;s only a <br /> keystroke away.
              </p>

              {/* Date and Comments */}
              <div className="flex justify-between items-center mt-4 text-[12px] text-[#737373]">
                <div className="flex items-center space-x-2">
                  {/* Clock Icon and Date */}
                  <FaClock className="w-4 h-4 text-[#23A6F0]" />
                  <span>22 April 2021</span>
                </div>

                {/* Comments Section */}
                <div className="flex items-center space-x-2">
                  {/* Comment Icon */}
                  <FaComment className="w-4 h-4 text-[#23856D]" />
                  <span className="text-[#737373]">10 Comments</span>
                </div>
              </div>

              {/* Learn More Button with > Icon */}
              <div className="mt-4 flex items-center justify-start">
                <button className="text-[#737373] text-sm font-bold py-2 px-4 rounded-md bg-transparent hover:bg-[#2DC071] hover:text-white transition-all duration-300 flex items-center space-x-2">
                  <span>Learn More</span>
                  <FaChevronRight className="inline-block text-[#737373] group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeauresPosts;
