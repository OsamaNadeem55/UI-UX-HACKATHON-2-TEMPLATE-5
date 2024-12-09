"use client";
import Image from "next/image";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Plan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="text-center mt-14">
        <h3 className="text-[#252B42] font-bold text-[40px]">Pricing</h3>
        <p className="text-[#737373] text-[14px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Toggle Section */}
      <div className="flex items-center justify-center mt-10 gap-4">
        <h3 className="text-[#252B42] font-bold text-[16px]">Monthly</h3>
        <div
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer border border-[#23A6F0]`}
          onClick={() => setIsMonthly(!isMonthly)}
        >
          <div
            className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${
              isMonthly ? "translate-x-7 bg-[#2DC071]" : "bg-[#D0D0D0]"
            }`}
          ></div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-[#252B42] font-bold text-[16px]">Yearly</h3>
          <div className="bg-[#B2E3FF] text-[#23A6F0] text-[14px] font-bold px-4 py-3 rounded-full">
            Save 25%
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {/* Free Plan */}
        <div className="border-2 border-[#23A6F0] rounded-lg p-6 bg-transparent shadow-md h-[664px] flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-[#252B42] text-[24px] text-center">
              FREE
            </h3>
            <p className="font-bold text-[#737373] text-[16px] text-center mt-3">
              Ideal for individuals or small teams who are just starting out.
            </p>
            <p className="text-[#23A6F0] font-bold text-[40px] text-center mt-5">
              0<span className="text-[#23A6F0] font-bold text-[24px]">$</span>{" "}
              <span className="text-[#8EC2F2] font-bold text-[14px]">
                Per Month
              </span>
            </p>
          </div>
          <ul className="space-y-8">
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                1GB Cloud storage
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Email and community support
              </span>
            </li>
          </ul>
          <button className="bg-[#252B42] text-[#FFFFFF] font-bold text-[14px] px-8 py-4 flex justify-center items-center rounded-md mx-auto hover:bg-gray-800">
            Try for free
          </button>
        </div>

        {/* Standard Plan */}
        <div className="border-2 border-[#23A6F0] rounded-lg p-6 bg-[#252B42] shadow-md h-[700px] flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-[#FFFFFF] text-[24px] text-center">
              Standard
            </h3>
            <p className="font-bold text-[#FFFFFF] text-[16px] text-center mt-3">
              Perfect for small teams and businesses looking for more features.
            </p>
            <p className="text-[#23A6F0] font-bold text-[40px] text-center mt-5">
              9.99
              <span className="text-[#23A6F0] font-bold text-[24px]">
                $
              </span>{" "}
              <span className="text-[#8EC2F2] font-bold text-[14px]">
                Per Month
              </span>
            </p>
          </div>
          <ul className="space-y-8">
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-[14px]">
                Unlimited product
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-[14px]">
                5GB Cloud storage
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-[14px]">
                Priority support
              </span>
            </li>
          </ul>
          <button className="bg-[#23A6F0] text-[#FFFFFF] font-bold text-[14px] px-8 py-4 flex justify-center items-center rounded-md mx-auto hover:bg-blue-500">
            Try for Standard
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border-2 border-[#23A6F0] rounded-lg p-6 bg-transparent shadow-md h-[664px] flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-[#252B42] text-[24px] text-center">
              PREMIUM
            </h3>
            <p className="font-bold text-[#737373] text-[16px] text-center mt-3">
              Perfect for growing businesses who need advanced features.
            </p>
            <p className="text-[#23A6F0] font-bold text-[40px] text-center mt-5">
              29.99
              <span className="text-[#23A6F0] font-bold text-[24px]">
                $
              </span>{" "}
              <span className="text-[#8EC2F2] font-bold text-[14px]">
                Per Month
              </span>
            </p>
          </div>
          <ul className="space-y-8">
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited product updates
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Unlimited Cloud storage
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>
              <span className="text-[#252B42] font-bold text-[14px]">
                Premium support
              </span>
            </li>
          </ul>
          <button className="bg-[#23A6F0] text-[#FFFFFF] font-bold text-[14px] px-8 py-4 flex justify-center items-center rounded-md mx-auto hover:bg-blue-500">
            Try Premium
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-[#252B42] text-[20px] mt-24 text-center sm:text-[24px]">
          Trusted By Over 4000 Big Companies
        </h3>
        <div className="flex justify-center items-center mt-6">
          <Image
            src={"/companies.png"}
            alt="companies"
            width={1054}
            height={175}
            className="w-full max-w-[90%] sm:max-w-[1054px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
