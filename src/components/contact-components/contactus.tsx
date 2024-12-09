import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
      {/* Text Section */}
      <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
        <h3 className="text-[#252B42] font-bold text-[16px] mb-6">CONTACT US</h3>
        <h1 className="text-[#252B42] font-bold text-[32px] sm:text-[48px] md:text-[58px] mb-6">
          Get in touch <br />
          today!
        </h1>
        <p className="text-[#737373] text-[16px] sm:text-[18px] md:text-[20px] mt-5">
          We know how large objects will act, <br />
          but things on a small scale
        </p>

        {/* Phone and Fax Section */}
        <div className="text-[#252B42] font-bold text-[24px] mt-8">
          <h3>Phone: +451 215 215</h3>
          <h3 className="mt-5">Fax: +451 215 215</h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-8">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-500 text-[27px]"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-700 text-[27px]"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-pink-500 text-[27px]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-600 text-[27px]"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/contactus.png"
          alt="aboutus"
          height={280}
          width={415}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ContactUs;
