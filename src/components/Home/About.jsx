"use client";
import Image from "next/image";
import image from '../../images/home page/10012.jpg'
import image2 from '../../images/home page/10013.jpg'
import image3 from '../../images/icons/10050.png'
import tv from '../../images/icons/10014.png'
import ed from '../../images/icons/edu.png'
import { FiPhoneCall } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

export default function AboutPage() {
    return (
        <section className="w-full bg-white py-20 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
             
                <div className="md:col-span-3 flex flex-col items-center md:items-start md:-translate-y-13">
                    <div className="border border-gray-300 p-2 rounded-tr-4xl rounded-bl-4xl w-full md:max-w-[250px]">
                        <Image
                            className="rounded-tr-4xl rounded-bl-4xl w-full"
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="bg-[#07A698] mt-3 flex items-center rounded-tr-4xl rounded-bl-4xl p-2 w-full max-w-[250px]">
                        <div className="bg-white rounded-full p-4">
                            <FiPhoneCall />
                        </div>
                        <div className="flex flex-col items-start ml-3">
                            <p className="text-white text-md uppercase">Online Support</p>
                            <h1 className="text-white text-2xl font-semibold">+258 152 3659</h1>
                        </div>
                    </div>
                </div>

                
                <div className="md:col-span-3 flex justify-center md:justify-start mt-10 md:mt-0">
                    <Image
                        className="rounded-tl-4xl rounded-br-4xl w-full "
                        src={image2}
                        alt="image2"
                    />
                </div>

                
                <div className="md:col-span-6 flex flex-col gap-5 mt-10 md:mt-0">
                    <div className="flex items-center gap-3 cursor-pointer bg-white shadow-lg p-2 border border-gray-200 w-full max-w-[300px] rounded-full  mx-auto md:mx-0">
                        <div className="rounded-full shadow p-3">
                            <Image src={image3} width={30} height={30} alt="logo" />
                        </div>
                        <p className="font-medium">Watch The Video</p>
                    </div>

                    <SectionTitle
                        title={'Over 10 Years in Distant Learning for Skill Development'}
                        des={
                            'Compellingly procrastinate equity invested markets with efficient process improvements. Actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.'
                        }
                    />

                    <div className="mt-3 flex flex-col sm:flex-row items-center justify-around gap-5">
                        <div className="flex items-center gap-3">
                            <div className="bg-white shadow p-3 border border-gray-200 rounded-full">
                                <Image src={tv} alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-[#07A698]">9.5+K</h1>
                                <p className="ct text-center sm:text-left">
                                    Total active students <br />
                                    taking gifted courses
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-white shadow p-3 border border-gray-200 rounded-full">
                                <Image src={ed} alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-[#07A698]">6.5+K</h1>
                                <p className="ct text-center sm:text-left">
                                    Total active students <br />
                                    taking gifted courses
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center md:justify-start">
                        <button className="inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] transition-shadow shadow-sm">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}
