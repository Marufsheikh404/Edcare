"use client";
import React from "react";
import Image from "next/image";
import img from '../../images/home page/10027.png';
import img1 from '../../images/home page/10029.png';
import img2 from '../../images/home page/10033.png';
import ed from '../../images/icons/10021.png';
import icon1 from '../../images/icons/10026.png';
import icon2 from '../../images/icons/10028.png';
import icon3 from '../../images/icons/10030.png';
import bg from '../../images/icons/10054.png';

const items = [
    {
        id: 1,
        icon: icon1,
        title: "Book Free Consultation",
        image: img,
        desc:
            "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
    },
    {
        id: 2,
        icon: icon2,
        title: "Make Easy Payment",
        image: img1,
        desc:
            "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
    },
    {
        id: 3,
        icon: icon3,
        title: "Schedule First Lesson",
        image: img2,
        desc:
            "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20">
            <div
                className="w-full h-full bg-cover bg-center flex flex-col items-center justify-start p-3"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >
             
                <div className="flex flex-col items-center">
                    <div className="bg-white border border-gray-200 rounded-full w-fit px-3 py-2 flex items-center gap-2 shadow-sm mb-2">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={ed} width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Why Choose Us
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
                        Explore Yourself All Over The World
                    </h2>
                </div>

              
                <div className="grid md:grid-cols-3 gap-16 relative z-10">
                    {items.map((item, idx) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center relative"
                        >
                        
                            {idx < items.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-[-48px] w-[1px] h-56 bg-white/20 transform -translate-y-1/2" />
                            )}

                         
                            <div className="relative mb-8">
                                <div className="absolute -top-6 left-1/2 border-2 border-gray-900 -translate-x-1/2 w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg overflow-hidden">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                        width={36}
                                        height={36}
                                        className="object-contain"
                                    />
                                </div>


                                <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={160}
                                        height={160}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <h3 className="text-3xl font-semibold mb-3 text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-200 max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
