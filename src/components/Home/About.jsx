"use client";
import Image from "next/image";
import image from '../../images/home page/10012.jpg'
import image2 from '../../images/home page/10013.jpg'
import image3 from '../../images/icons/10050.png'
import { FiPhoneCall } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";

export default function AboutPage() {
    return (
        <section className="w-full grid grid-cols-12 gap-3 bg-white py-20">
            <div className="col-span-3 -translate-y-13">
                <div className="border border-gray-300 p-2 rounded-tr-4xl rounded-bl-4xl"> <Image className="rounded-tr-4xl rounded-bl-4xl w-76" src={image} alt="image"></Image></div>
                <div className="bg-[#07A698] mt-3 flex items-center rounded-tr-4xl rounded-bl-4xl p-2">
                    <div className="bg-[#ffffff] rounded-full p-4"> <FiPhoneCall /></div>
                    <div className="flex flex-col items-center ml-2">
                        <p className="text-white text-md uppercase ">Online Support</p>
                        <h1 className="text-white text-2xl font-semibold">+258 152 3659</h1>
                    </div>
                </div>
            </div>

            <div className="col-span-3">
                <div className="translate-y-20">
                    <Image className="rounded-tl-4xl rounded-br-4xl w-50" src={image2} alt="image2"></Image>
                </div>
            </div>

            <div className="col-span-6">
                <div className="flex items-center gap-3 cursor-pointer bg-white shadow-lg p-2 border border-gray-200 w-50 rounded-full justify-center">
                    <div className="cp-3 rounded-full shadow">
                        <Image src={image3} width={15} alt="logo"></Image>
                    </div>
                    <p className="font-medium">Watch The Video</p>
                </div>
                <SectionTitle title={'Over 10 Years in Distant learning for Skill Development'} des={'Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.'}></SectionTitle>
            </div>
        </section>
    );
}
