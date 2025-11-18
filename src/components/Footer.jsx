import React from "react";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NewsletterFooter() {
    return (
        <div className="w-full bg-[#0f2622] text-white px-6 md:px-16 lg:px-28 py-20">
            {/* Newsletter Section */}
            <div className="w-full bg-[#11312c] border border-[#1e453e] rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">Subscribe Our Newsletter For</h2>
                    <p className="text-lg md:text-xl opacity-80">Latest Updates</p>
                </div>

                <div className="flex items-center w-full lg:w-1/2 bg-[#0d2220] border border-[#1e453e] rounded-full overflow-hidden">
                    <div className="px-4 text-gray-300">
                        <FiMail size={22} />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your E-mail"
                        className="w-full bg-transparent py-3 outline-none text-gray-200 placeholder-gray-400"
                    />
                    <button className="bg-[#1dbf73] hover:bg-[#18a963] text-white font-medium px-6 py-3 rounded-full whitespace-nowrap">
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Footer Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
                {/* Get in Touch */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">GET IN TOUCH</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Fusce varius, dolor tempor interdum tristique bibendum.
                    </p>

                    <div className="flex items-center gap-3 mb-1"><FiPhone /> <span>(702) 123-1478</span></div>
                    <div className="text-sm mb-4">info@company.com</div>

                    <div className="flex gap-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-[#1dbf73]" />
                        <FaInstagram className="cursor-pointer hover:text-[#1dbf73]" />
                        <FaLinkedinIn className="cursor-pointer hover:text-[#1dbf73]" />
                    </div>
                </div>

                {/* Company Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">COMPANY INFO</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="hover:text-[#1dbf73] cursor-pointer">About Us</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Resource Center</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Careers</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Instructor</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Become A Teacher</li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">USEFUL LINKS</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="hover:text-[#1dbf73] cursor-pointer">All Courses</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Digital Marketing</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Design & Branding</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">Storytelling & Voice Over</li>
                        <li className="hover:text-[#1dbf73] cursor-pointer">News & Blogs</li>
                    </ul>
                </div>

                {/* Recent Post */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">RECENT POST</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                            <div>
                                <p className="text-sm mb-1 hover:text-[#1dbf73] cursor-pointer">Where Dreams Find A Home</p>
                                <span className="text-xs text-gray-400">20 April, 2025</span>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                            <div>
                                <p className="text-sm mb-1 hover:text-[#1dbf73] cursor-pointer">Where Dreams Find A Home</p>
                                <span className="text-xs text-gray-400">20 April, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm mt-16 border-t border-[#1e453e] pt-6">
                Copyright © 2025 EdCare. All Rights Reserved.
            </div>
        </div>
    );
}
