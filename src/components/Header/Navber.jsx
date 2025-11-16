"use client";

import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
const Navber = () => {
    return (
        <div className="flex items-center justify-between container max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3 font-semibold text-xl text-[#07A698]">
                <TbCategory2 size={30} />
                <h1>Categories</h1>
            </div>
            <div className="">
                <ul className="list-none flex items-center gap-10 -translate-x-30 font-semibold text-xl">
                    <div className="flex items-center">
                        <li>Home</li>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center">
                        <li>Course</li>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center">
                        <li>Shops</li>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center">
                        <li>Pages</li>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center">
                        <li>Blogs</li>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex items-center">
                        <li>Contact</li>
                        <IoIosArrowDown />
                    </div>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navber;