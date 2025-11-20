"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { CiPlay1 } from "react-icons/ci";
import hero from "../../images/home page/10010.png";
import bg from "../../images/icons/10004.png";
import logo from "../../images/icons/10011.png";
import { motion } from "framer-motion";
import icon from '../../images/icons/edu.png'
import sm from '../../images/small-image/10008.png'
import sm2 from '../../images/small-image/10032.png'
import sm3 from '../../images/small-image/10038.png'
import sm4 from '../../images/small-image/10036.png'
import Aos from "aos";

const HeroSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <div className="bg-[#E8EFF6] px-5 py-10 md:px-10 md:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">


                <div className="space-y-6">


                    <div data-aos="fade-up" data-aos-duration="2000" className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={icon} width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="2000">  <SectionTitle
                        title={"Start Learning from <br/> the world best institutions"}
                    /></div>


                    <div className="flex items-center gap-8">
                        <button data-aos="fade-up" data-aos-duration="2000" className="hidden sm:inline-flex items-center py-3 px-6 rounded-full text-sm font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] shadow transition">
                            Get Started
                        </button>

                        <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-3 cursor-pointer">
                            <div className="bg-white p-3 rounded-full shadow">
                                <CiPlay1 size={18} />
                            </div>
                            <p className="font-medium">Watch The Video</p>
                        </div>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-6">
                        <div className="flex items-center relative w-24 h-10">
                            <Image
                                width={36} height={36}
                                src={sm}
                                alt="student"
                                className="rounded-full border-2 border-white shadow"
                            />
                            <Image
                                width={36} height={36}
                                src={sm2}
                                alt="student"
                                className="rounded-full absolute left-6 border-2 border-white shadow"
                            />
                            <Image
                                width={36} height={36}
                                src={sm3}
                                alt="student"
                                className="rounded-full absolute left-12 border-2 border-white shadow"
                            />
                            <Image
                                width={36} height={36}
                                src={sm4}
                                alt="student"
                                className="rounded-full absolute left-[72px] border-2 border-white shadow"
                            />
                        </div>

                        <p className="text-gray-700 font-medium">
                            <span className="text-[#07A698] font-semibold text-xl">10k+</span> Enrollment
                        </p>
                    </div>


                    <h1 data-aos="fade-up" data-aos-duration="2000" className="font-bold text-2xl md:text-3xl leading-snug">
                        Explore <span className="text-[#07A698]">1350+</span> Courses Within Subjects
                    </h1>
                </div>


                <div
                    className="relative w-full py-10 bg-no-repeat bg-bottom flex justify-center md:justify-end"
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                    }}
                >

                    <Image
                        src={hero}
                        alt="hero"
                        className="w-[90%] md:w-full relative z-10 rounded-2xl"
                    />


                    <motion.div
                        className="absolute right-5 top-10 md:top-20 z-20"
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            className="w-20 h-20"
                        />
                    </motion.div>


                    <motion.div
                        className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 bg-white px-4 h-24 md:h-28 rounded-2xl flex items-center z-20 shadow-lg"
                        animate={{ x: [0, 30, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <h1 className="text-xl md:text-2xl text-[#07A698] font-bold">
                            257+ Courses
                        </h1>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
