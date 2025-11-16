"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { PiShoppingCartThin } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

export default function MiddleHeader() {
    const [catOpen, setCatOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

              
                <div className="flex items-center gap-4 min-w-0">
                        <div className="relative w-36 h-12 md:w-44 md:h-14">
                            <Image
                                src="/images/icons/logo.png"
                                alt="logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

        
                    <div
                        className="relative hidden md:flex items-center gap-2 cursor-pointer select-none"
                        onMouseEnter={() => setCatOpen(true)}
                        onMouseLeave={() => setCatOpen(false)}
                        aria-haspopup="true"
                    >
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                            <BiCategory size={20} />
                            <span className="font-medium text-sm text-gray-800">Category</span>
                            <IoIosArrowForward
                                className={`text-gray-500 transition-transform ${catOpen ? "rotate-90" : "rotate-0"
                                    }`}
                            />
                        </div>

                    
                        {catOpen && (
                            <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-20">
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Electronics</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Clothing</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Home & Living</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Beauty</li>
                            </ul>
                        )}
                    </div>
                </div>

                
                <div className="flex-1 px-4">
                    <form className="w-full">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <FiSearch size={18} />
                            </span>
                            <input
                                type="search"
                                className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#39B8AD] transition"
                                placeholder="Search products, categories, brands..."
                                aria-label="Search"
                            />
                        </label>
                    </form>
                </div>

                {/* Right buttons */}
                <div className="flex items-center gap-3">
                    <button
                        aria-label="Wishlist"
                        className="p-2 rounded-full border border-gray-200 hover:shadow-sm transition bg-white"
                    >
                        <GiSelfLove size={20} className="text-gray-700" />
                    </button>

                    <button
                        aria-label="Cart"
                        className="relative p-2 rounded-full border border-gray-200 hover:shadow-sm transition bg-white"
                    >
                        <PiShoppingCartThin size={20} className="text-gray-700" />
                    </button>


                    <Link
                        href="/trial"
                        className="hidden sm:inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] transition-shadow shadow-sm"
                    >
                        Start Free Trial
                    </Link>
                </div>
            </div>
        </header>
    );
}
