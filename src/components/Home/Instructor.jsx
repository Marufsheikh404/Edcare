"use client";

import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Image from "next/image";
import card from "../../images/home page/10042.png";
import logo from '../../images/icons/edu.png'
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaViber } from "react-icons/fa6";
import card1 from '../../images/home page/10043.png'
import card2 from '../../images/home page/10044.png'
import card3 from '../../images/home page/10045.png'

const InstructorPage = () => {
    return (
        <div className="py-15 bg-[#F0FCFF]">
            <div className="place-items-center mb-6 text-center">
                <div className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 inline-flex items-center gap-2 shadow-sm">
                    <div className="bg-[#DAF2F0] p-2 rounded-full">
                        <Image src={logo} width={20} height={20} alt="edu" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">Welcome To Online Education</p>
                </div>

                <SectionTitle title={"Explore Our World Best Courses"} />
            </div>

            <div className="my-5 flex items-center justify-center flex-wrap gap-3">

                <div className="w-72 h-auto shadow-sm">

                    <div className="relative overflow-hidden rounded-md group">

                        <div className="relative h-56 w-full">
                            <Image
                                src={card}
                                alt="Zaramane Mass Likan"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/25 pointer-events-none" />
                        </div>

                        <div className="absolute inset-0 pointer-events-none transition-filter duration-300 ease-in-out filter blur-0 group-hover:blur-lg" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto">

                                <button
                                    aria-label="view"
                                    onClick={() => alert("View clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <RiFacebookCircleLine style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="like"
                                    onClick={() => alert("Like clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <SlSocialLinkedin style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="share"
                                    onClick={() => alert("Share clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md transform transition hover:scale-105 hover:bg-[#07A698]"
                                >
                                    <FaViber style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 px-2 text-start">
                        <h1 className="text-2xl font-bold text-black hover:text-[#07A698] transition-all duration-300">Zaramane Mass Likan</h1>
                        <h4 className="text-md font-semibold text-[#07A698]">Online Teachers</h4>
                    </div>
                </div>

                <div className="w-72 h-auto shadow-sm">

                    <div className="relative overflow-hidden rounded-md group">

                        <div className="relative h-56 w-full">
                            <Image
                                src={card1}
                                alt="Amelia Grace Lily"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/25 pointer-events-none" />
                        </div>

                        <div className="absolute inset-0 pointer-events-none transition-filter duration-300 ease-in-out filter blur-0 group-hover:blur-lg" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto">

                                <button
                                    aria-label="view"
                                    onClick={() => alert("View clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <RiFacebookCircleLine style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="like"
                                    onClick={() => alert("Like clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <SlSocialLinkedin style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="share"
                                    onClick={() => alert("Share clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md transform transition hover:scale-105 hover:bg-[#07A698]"
                                >
                                    <FaViber style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 px-2 text-start">
                        <h1 className="text-2xl font-bold text-black hover:text-[#07A698] transition-all duration-300">Amelia Grace Lily </h1>
                        <h4 className="text-md font-semibold text-[#07A698]">Online Teachers</h4>
                    </div>
                </div>

                <div className="w-72 h-auto shadow-sm">

                    <div className="relative overflow-hidden rounded-md group">

                        <div className="relative h-56 w-full">
                            <Image
                                src={card2}
                                alt="Zaramane Mass Likan"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/25 pointer-events-none" />
                        </div>

                        <div className="absolute inset-0 pointer-events-none transition-filter duration-300 ease-in-out filter blur-0 group-hover:blur-lg" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto">

                                <button
                                    aria-label="view"
                                    onClick={() => alert("View clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <RiFacebookCircleLine style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="like"
                                    onClick={() => alert("Like clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <SlSocialLinkedin style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="share"
                                    onClick={() => alert("Share clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md transform transition hover:scale-105 hover:bg-[#07A698]"
                                >
                                    <FaViber style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 px-2 text-start">
                        <h1 className="text-2xl font-bold text-black hover:text-[#07A698] transition-all duration-300">Mason Logan Dee</h1>
                        <h4 className="text-md font-semibold text-[#07A698]">Online Teachers</h4>
                    </div>
                </div>

                <div className="w-72 h-auto shadow-sm">

                    <div className="relative overflow-hidden rounded-md group">

                        <div className="relative h-56 w-full">
                            <Image
                                src={card3}
                                alt="Zaramane Mass Likan"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/25 pointer-events-none" />
                        </div>

                        <div className="absolute inset-0 pointer-events-none transition-filter duration-300 ease-in-out filter blur-0 group-hover:blur-lg" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto">

                                <button
                                    aria-label="view"
                                    onClick={() => alert("View clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <RiFacebookCircleLine style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="like"
                                    onClick={() => alert("Like clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#07A698] transform transition"
                                >
                                    <SlSocialLinkedin style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>

                                <button
                                    aria-label="share"
                                    onClick={() => alert("Share clicked")}
                                    className="w-10 h-10 rounded-full group bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md transform transition hover:scale-105 hover:bg-[#07A698]"
                                >
                                    <FaViber style={{ color: "black" }} className="group-hover:text-white transition" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 px-2 text-start">
                        <h1 className="text-2xl font-bold text-black hover:text-[#07A698] transition-all duration-300">Zaramane Mass Likan</h1>
                        <h4 className="text-md font-semibold text-[#07A698]">Online Teachers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;
