"use client";

import { useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navber = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Course", path: "/course" },
        { name: "Shops", path: "/shops" },
        { name: "Pages", path: "/pages" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="bg-white shadow">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">

                
                <div className="flex items-center gap-3 font-semibold text-xl text-[#07A698]">
                    <TbCategory2 size={30} />
                    <h1>Categories</h1>
                </div>

                
                <p className="border-r h-7 border-gray-500 hidden md:block"></p>

    
                <div className="hidden md:block">
                    <ul className="flex items-center gap-10 font-semibold text-lg">
                        {menuItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-1 cursor-pointer hover:text-[#07A698]">
                                <Link href={item.path}>{item.name}</Link>
                                <IoIosArrowDown />
                            </li>
                        ))}
                    </ul>
                </div>

                
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <RxCross2 /> : <RxHamburgerMenu />}
                </button>

            </div>

        
            {open && (
                <div className="md:hidden bg-white px-6 pb-5 animate-slideDown">
                    <ul className="flex flex-col gap-4 font-semibold text-lg">
                        {menuItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 cursor-pointer">
                                <Link href={item.path}>{item.name}</Link>
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
