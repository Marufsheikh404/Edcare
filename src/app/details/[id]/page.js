"use client";
import AuthContext from '@/context/AuthContext';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import banner from '../../../images/banner/banner.png'
import shadow from '../../../images/shadow/10002.png'
import cricel from '../../../images/shadow/cricel.png'
import cricel2 from '../../../images/shadow/cricle2.png'
import Link from 'next/link';

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { courses } = useContext(AuthContext);
    const findCourse = courses?.find(item => item?.id === Number(id));

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
                                Details Page
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Details Page
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white/80 to-transparent" />
                </div>
            </div>

            <div className="shadow-md rounded-2xl overflow-hidden bg-[#E8EFF6] hover:shadow-2xl transition flex flex-col lg:flex-row items-center gap-4 p-4">
                {/* Left: Image */}
                <div className="w-full">
                    <Image
                        width={200}
                        height={200}
                        src={findCourse?.thumbnail}
                        alt={findCourse?.title || "image"}
                        className="object-cover w-[450px] h-auto rounded-xl"
                    />
                </div>


                {/* Right: Content */}
                <div className="p-4 flex flex-col gap-3 w-full h-full relative">
                    <p className="text-sm font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full px-2 py-1 w-fit mb-1">
                        {findCourse?.badge}
                    </p>


                    <h2 className="text-2xl font-bold leading-snug">{findCourse?.title}</h2>


                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span className="font-semibold">Lessons: {findCourse?.lessons}</span>
                        <span className="font-semibold">Students: {findCourse?.students}</span>
                    </div>


                    <p className="text-sm text-gray-500 font-semibold">Views: {findCourse?.views}</p>


                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                            {findCourse?.instructor?.avatar && (
                                <Image
                                    width={200}
                                    height={200}
                                    src={findCourse?.instructor?.avatar}
                                    alt={findCourse?.instructor?.name}
                                    className="object-cover w-full h-full"
                                />
                            )}
                        </div>
                        <div>
                            <p className="font-medium text-xs">{findCourse?.instructor?.name}</p>
                            <p className="text-[10px] text-gray-500">{findCourse?.instructor?.role}</p>
                        </div>
                    </div>


                    <div className="inline-block border-b border-gray-300 pb-1 text-sm">
                        ⭐⭐⭐⭐⭐ {findCourse?.rating}k
                    </div>


                    <p className="font-semibold text-gray-800 text-sm">Price: $ {findCourse?.price}</p>


                    <div className="mt-auto pt-4">
                        <button onClick={() => dispatch(addItem({ id: findCourse?.id }))} className="cursor-pointer bg-[#07A698] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#068a80] transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;