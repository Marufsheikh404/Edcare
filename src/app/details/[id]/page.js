"use client";
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const DetailsPage = () => {
    const { id } = useParams();
    const { courses } = useContext(AuthContext);

    const findCourse = courses.map(c => c?.id === id);
    return (
        <div>
            <div className="card w-full h-[500] shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition flex flex-col">
                <figure className="h-48 w-full relative bg-gray-100 overflow-hidden">
                    <Image
                        src={findCourse?.thumbnail}
                        alt={findCourse?.title || 'image'}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </figure>

                <div className="card-body h-52 p-4 flex flex-col gap-2 flex-1">
                    <p className="text-xs font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full p-1 w-10 text-center mb-1">{findCourse?.badge}</p>

                    <h2 className="card-title text-lg font-bold leading-snug mb-1">
                        {findCourse?.title}
                    </h2>

                    <div className="flex items-center gap-4 text-gray-500 text-sm leading-1">
                        <h1 className='text-gray-500 font-semibold'>Lessons: {findCourse?.lessons}</h1>
                        <h1 className='text-gray-500 font-semibold'>Students: {findCourse?.students}</h1>
                    </div>

                    <h1 className="text-sm text-gray-500 font-semibold mb-2">Views: {findCourse?.views}</h1>

                    <div className="card-actions flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                            {findCourse?.instructor?.avatar ? (
                                <Image
                                    src={findCourse.instructor.avatar}
                                    alt={findCourse.instructor.name}
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            ) : null}
                        </div>
                        <div>
                            <h1 className="font-medium text-xs">{findCourse?.instructor?.name}</h1>
                            <h1 className="text-[10px] text-gray-500">{findCourse?.instructor?.role}</h1>
                        </div>
                    </div>

                    <div className="inline-block border-b border-gray-300 pb-1 text-sm mb-3">
                        ⭐⭐⭐⭐⭐⭐ {findCourse?.rating}k
                    </div>

                    <div className="flex items-center justify-between mt-auto text-sm">
                        <h1 className="font-semibold text-gray-800">Price: $ {findCourse?.price}</h1>

                        <button className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300">
                            <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-400 rounded-full z-0"></span>

                            <span className="relative z-10 flex items-center group-hover:text-white gap-2">
                                Read More <FiArrowRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;