"use client";
import Image from "next/image";
import image from '../../images/home page/blog.jpg'
import image2 from '../../images/home page/blog5.jpg'
import image3 from '../../images/icons/10050.png'
import tv from '../../images/icons/10014.png'
import ed from '../../images/icons/edu.png'
import { FiPhoneCall } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";

export default function AboutPage() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <section className="w-full bg-white py-20 px-4 md:px-10">
            <div className="md:flex md:gap-6 md:items-stretch">

                {/* Left Column */}
                <div data-aos="fade-up-right" data-aos-duration="2000" className="md:flex-1 flex flex-col items-center md:items-start md:-translate-y-13">
                    <div className="border border-gray-300 p-2 rounded-tr-4xl rounded-bl-4xl w-full max-w-[250px]">
                        <Image
                            className="rounded-tr-4xl rounded-bl-4xl h-auto w-full"
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="bg-[#07A698] mt-3 flex items-center rounded-tr-4xl rounded-bl-4xl p-2 w-full max-w-[250px] h-auto">
                        <div className="bg-white rounded-full p-4">
                            <FiPhoneCall />
                        </div>
                        <div className="flex flex-col items-start ml-3">
                            <p className="text-white text-md uppercase">Online Support</p>
                            <h1 className="text-white text-xl font-semibold">+258 152 3659</h1>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div data-aos="fade-up-right" data-aos-duration="2000" className="md:flex-1 flex justify-center md:justify-start mt-10 md:mt-0">
                    <Image
                        className="rounded-tl-4xl rounded-br-4xl w-full  h-86"
                        src={image2}
                        alt="image2"
                    />
                </div>

                {/* Right Column */}
                <div className="md:flex-2 flex flex-col gap-5 mt-10 md:mt-0">
                    <div data-aos="fade-up" data-aos-duration="3000" className="flex items-center gap-3 cursor-pointer bg-white shadow-lg p-1 border border-gray-200 w-full max-w-[300px] rounded-full mx-auto md:mx-0">
                        <div className="rounded-full shadow p-3">
                            <Image src={image3} width={30} height={30} alt="logo" />
                        </div>
                        <p className="font-medium">Watch The Video</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <SectionTitle
                            title={'Over 10 Years in Distant Learning for Skill Development'}
                            des={
                                'Compellingly procrastinate equity invested markets with efficient process improvements. Actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.'
                            }
                        />
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row items-center justify-around gap-5">
                        <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-3">
                            <div className="bg-white shadow p-3 border border-gray-200 rounded-full">
                                <Image width={25} src={tv} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#07A698]">9.5+K</h1>
                                <p className="ct text-center sm:text-left">
                                    Total active students <br />
                                    taking gifted courses
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-3">
                            <div className="bg-white shadow p-3 border border-gray-200 rounded-full">
                                <Image width={25} src={ed} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#07A698]">6.5+K</h1>
                                <p className="ct text-center sm:text-left">
                                    Total active students <br />
                                    taking gifted courses
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000" className="mt-3 flex justify-center md:justify-start">
                        <button className="inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] transition-shadow shadow-sm">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}
