import React from 'react';
import banner from '../../../src/images/banner/banner.png'
import shadow from '../../../src/images/shadow/10002.png'
import cricel from '../../../src/images/shadow/cricel.png'
import cricel2 from '../../../src/images/shadow/cricle2.png'
import Link from 'next/link';
import Image from 'next/image';
import PricingCard from '@/components/PricingCard';
const PicingPage = () => {
    const pricingData = [
        {
            title: "Basic Plan",
            price: 29,
            description:
                "Lorem ipsum dolor sit consect adipisicing elit sed. do elit sed.",
            highlighted: false,
            features: [
                { title: "Individual Course", available: true },
                { title: "Course Learning Checks", available: true },
                { title: "Offline Learning", available: false },
                { title: "Course Discussions", available: false },
                { title: "One to One Guidance", available: false },
            ],
        },

        {
            title: "Standard Plan",
            price: 49,
            description:
                "Lorem ipsum dolor sit consect adipisicing elit sed. do elit sed.",
            highlighted: true,
            features: [
                { title: "Individual Course", available: true },
                { title: "Course Learning Checks", available: true },
                { title: "Offline Learning", available: true },
                { title: "Course Discussions", available: true },
                { title: "One to One Guidance", available: true },
            ],
        },

        {
            title: "Silver Plan",
            price: 69,
            description:
                "Lorem ipsum dolor sit consect adipisicing elit sed. do elit sed.",
            highlighted: false,
            features: [
                { title: "Individual Course", available: true },
                { title: "Course Learning Checks", available: true },
                { title: "Offline Learning", available: true },
                { title: "Course Discussions", available: false },
                { title: "One to One Guidance", available: false },
            ],
        },
    ];

    return (
        <div>
            <div className="relative">
                <div className="relative w-full">
                    <div className="relative w-full h-80 lg:h-100 ">
                        <Image
                            src={banner}
                            alt="banner"
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                            className="block"
                        />
                    </div>

                    <Image
                        src={shadow}
                        alt="shadow"
                        width={200}
                        height={220}
                        className="pointer-events-none absolute left-0 w-40 lg:w-50 lg:left-4 top-20  z-10"
                    />

                    <Image
                        src={cricel}
                        alt="cricel"
                        width={120}
                        height={140}
                        className="pointer-events-none absolute left-1/3 top-67 lg:top-85   z-10"
                    />

                    <Image
                        src={cricel2}
                        alt="cricel2"
                        width={160}
                        height={160}
                        className="pointer-events-none absolute right-0 top-0  z-10"
                    />

                    <div className="absolute top-30 left-40 lg:left-50 z-10">
                        <div className="max-w-4xl bg-transparent">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                                Our Pricing
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Our Pricing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white/80 to-transparent" />
                </div>
            </div>

            <div className='my-15'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingData.map((plan, index) =>(
                        <PricingCard key={index}{...plan}></PricingCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PicingPage;