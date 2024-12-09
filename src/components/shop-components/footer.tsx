import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-white">
      <div className="flex justify-between items-center py-12 px-10 mx-auto max-w-screen-xl bg-[#FAFAFA]">
        {/* Left: Text */}
        <h2 className="text-[24px] font-bold text-[#252B42]">Bandage</h2>

        {/* Right: Icons */}
        <div className="flex space-x-6">
          {/* Facebook Icon */}
          <Link href="#" aria-label="Facebook" className="text-[#23A6F0] hover:opacity-75">
            <FaFacebookF className="w-6 h-6" />
          </Link>
          {/* Instagram Icon */}
          <Link href="#" aria-label="Instagram" className="text-[#23A6F0] hover:opacity-75">
            <FaInstagram className="w-6 h-6" />
          </Link>
          {/* Twitter Icon */}
          <Link href="#" aria-label="Twitter" className="text-[#23A6F0] hover:opacity-75">
            <FaTwitter className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Company Info */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Company Info</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Carrier</Link></li>
              <li><Link href="#" className="hover:underline">We are hiring</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Legal</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:underline">Compliance</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Features</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Business Marketing</Link></li>
              <li><Link href="#" className="hover:underline">User Analytics</Link></li>
              <li><Link href="#" className="hover:underline">Live Chat</Link></li>
              <li><Link href="#" className="hover:underline">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Resources</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">iOS & Android</Link></li>
              <li><Link href="#" className="hover:underline">Watch a Demo</Link></li>
              <li><Link href="#" className="hover:underline">Customers</Link></li>
              <li><Link href="#" className="hover:underline">API</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Get In Touch</h3>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-2 border rounded-l-md text-[14px] w-full focus:outline-none"
                />
                <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-md hover:bg-blue-400 text-[14px]">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-[12px] mt-2">Lore ipsum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-left bg-[#FAFAFA] py-9">
          <p className="text-[#737373] font-bold text-[14px]">Made With Love By Muhammad Ubaid Hussain. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
