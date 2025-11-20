"use client";
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';

const DetailsPage = () => {
    const { id } = useParams();
    const { courses } = useContext(AuthContext);
    const findCourse = courses?.find(item => item?.id === Number(id));

    return (
        <div className="shadow-md rounded-2xl overflow-hidden bg-[#E8EFF6] hover:shadow-2xl transition flex items-center gap-8 p-4">
            {/* Left: Image */}
            <div className="w-full">
                <Image
                    width={200}
                    height={200}
                    src={findCourse?.thumbnail}
                    alt={findCourse?.title || "image"}
                    className="object-cover w-96 h-auto rounded-xl"
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


                {/* Instructor */}
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


                {/* Add to Cart button - Left bottom */}
                <div className="mt-auto pt-4">
                    <button className="cursor-pointer bg-[#07A698] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#068a80] transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;