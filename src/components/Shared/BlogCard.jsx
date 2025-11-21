"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const BlogCard = ({ blog }) => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <div data-aos="zoom-in-up" className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
            <figure className="relative w-full h-52">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-300"
                />
            </figure>

            <div className="p-4 flex flex-col gap-2">
                <p className="text-lg font-bold text-gray-800 relative inline-block group cursor-pointer">
                    <span className="relative z-10 group-hover:text-[#07A698] transition-colors duration-300">
                        {blog.title}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#07A698] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </p>

                <div className="mt-2 flex gap-2 flex-wrap">
                    <div className="flex items-center gap-1">
                        <BsStopwatch className="text-[#2FA79B]" />
                        <span className="text-xs px-2 py-1 font-bold text-gray-600">{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GoFileDirectory className="text-[#2FA79B]" />
                        <span className="text-xs px-2 py-1 font-bold text-gray-600">{blog.category}</span>
                    </div>
                </div>
                <div className="mt-4 flex justify-start">
                    <Link href={`/blogDetails/${blog?.id}`}>
                        <button className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300 cursor-pointer">
                            <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-400 rounded-full z-0"></span>

                            <span className="relative z-10 flex items-center group-hover:text-white gap-2">
                                Read More <FiArrowRight size={18} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
