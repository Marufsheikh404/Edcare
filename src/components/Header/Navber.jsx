"use client";

import { useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navber = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white shadow">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">

                {/* LEFT - Categories */}
                <div className="flex items-center gap-3 font-semibold text-xl text-[#07A698]">
                    <TbCategory2 size={30} />
                    <h1>Categories</h1>
                </div>

                {/* CENTER Divider (Hidden for Mobile) */}
                <p className="border-r h-7 border-gray-500 hidden md:block"></p>

                {/* MENU (Desktop) */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-10 font-semibold text-lg">
                        {["Home", "Course", "Shops", "Pages", "Blogs", "Contact"].map((item, i) => (
                            <li key={i} className="flex items-center gap-1 cursor-pointer hover:text-[#07A698]">
                                {item}
                                <IoIosArrowDown />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <RxCross2 /> : <RxHamburgerMenu />}
                </button>

            </div>

            {/* MOBILE DROPDOWN MENU */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-5 animate-slideDown">
                    <ul className="flex flex-col gap-4 font-semibold text-lg">
                        {["Home", "Course", "Shops", "Pages", "Blogs", "Contact"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 cursor-pointer">
                                {item}
                                <IoIosArrowDown />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navber;
