"use client";

import { useEffect, useRef, useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navber = () => {
    const [open, setOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const timerRef = useRef(null);
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {

        const measure = () => {
            if (navRef.current) setNavHeight(navRef.current.offsetHeight);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        function handleScroll() {
  
            setIsScrolling(true);


            if (timerRef.current) clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <>
            <div style={{ height: isScrolling ? navHeight : 0 }} aria-hidden="true" />

            <header
                ref={navRef}
                className={
                    "w-full transition-transform duration-300 ease-out " +
                    (isScrolling
                        ? "fixed top-0 left-0 z-50 bg-white shadow-md"
                        : "relative bg-white")
                }
            >
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-3 font-semibold text-xl text-[#07A698]">
                        <TbCategory2 size={30} />
                        <h1>Categories</h1>
                    </div>

                    <p className="border-r h-7 border-gray-500 hidden md:block md:-translate-x-7"></p>

                    <div className="hidden md:block md:-translate-x-15">
                        <ul className="flex items-center gap-10 font-semibold text-lg">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Course", path: "/course" },
                                { name: "Shops", path: "/shops" },
                                { name: "Pages", path: "/pages" },
                                { name: "Blogs", path: "/blogs" },
                                { name: "Contact", path: "/contact" },
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-1 cursor-pointer hover:text-[#07A698]"
                                >
                                    <Link href={item.path}>{item.name}</Link>
                                    <IoIosArrowDown />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        {open ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>
                </div>

                
                {open && (
                    <div className="md:hidden bg-white px-6 pb-5 animate-slideDown">
                        <ul className="flex flex-col gap-4 font-semibold text-lg">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Course", path: "/course" },
                                { name: "Shops", path: "/shops" },
                                { name: "Pages", path: "/pages" },
                                { name: "Blogs", path: "/blogs" },
                                { name: "Contact", path: "/contact" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 cursor-pointer">
                                    <Link href={item.path}>{item.name}</Link>
                                    <IoIosArrowDown />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navber;
