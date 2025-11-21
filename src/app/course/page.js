"use client";
import React, { useContext, useEffect } from 'react';
import banner from '../../images/banner/banner.png';
import Image from 'next/image';
import shadow from '../../images/shadow/10002.png';
import cricel from '../../images/shadow/cricel.png';
import cricel2 from '../../images/shadow/cricle2.png';
import Link from 'next/link';
import SectionTitle from '@/components/Shared/SectionTitle';
import icon from '../../images/icons/edu.png';
import Aos from 'aos';
import AuthContext from '@/context/AuthContext';
import { FiArrowRight } from 'react-icons/fi';

const CoursePage = () => {
    const { courses } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-12">
            {/* BANNER */}
            <div className="relative w-full">
                <div className="relative w-full h-64 sm:h-80 lg:h-[450px]">
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
                    className="pointer-events-none absolute left-0 w-32 sm:w-40 lg:w-50 lg:left-4 top-20 z-10"
                />

                <Image
                    src={cricel}
                    alt="cricel"
                    width={120}
                    height={140}
                    className="pointer-events-none absolute left-1/3 top-40 sm:top-48 lg:top-60 z-10"
                />

                <Image
                    src={cricel2}
                    alt="cricel2"
                    width={160}
                    height={160}
                    className="pointer-events-none absolute right-0 top-0 z-10"
                />

                <div className="absolute top-20 sm:top-24 lg:top-32 left-4 sm:left-10 lg:left-20 z-10 max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                        Courses Page
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base">
                        <Link href="/" className="font-semibold hover:text-[#2FA79B]">Home</Link>
                        <span>/</span>
                        <span className="font-semibold text-[#2FA79B]">Courses Page</span>
                    </div>
                </div>

                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white to-transparent" />
                </div>
            </div>

            {/* WELCOME */}
            <div className="grid place-items-center my-10">
                <div data-aos="fade-up" data-aos-duration="2000" className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                    <div className="bg-[#DAF2F0] p-2 rounded-full">
                        <Image src={icon} width={20} height={20} alt="edu" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        Welcome To Online Education
                    </p>
                </div>

                <div className="mt-6" data-aos="fade-up" data-aos-duration="2000">
                    <SectionTitle title="Explore Featured Courses" />
                </div>
            </div>

            {/* COURSES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map(c => (
                    <div data-aos="fade-up" data-aos-duration="1000" key={c?.id}>
                        <div className="card flex flex-col w-full sm:w-auto shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition h-full">
                            <figure className="relative h-48 w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src={c?.thumbnail}
                                    alt={c?.title || 'image'}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </figure>

                            <div className="card-body p-4 flex flex-col gap-2 flex-1">
                                <p className="text-xs sm:text-sm font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full px-2 py-1 w-max text-center mb-1">
                                    {c?.badge}
                                </p>

                                <h2 className="card-title text-base sm:text-lg font-bold leading-snug mb-1">
                                    {c?.title}
                                </h2>

                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-gray-500 text-xs sm:text-sm mb-2">
                                    <span className="font-semibold">Lessons: {c?.lessons}</span>
                                    <span className="font-semibold">Students: {c?.students}</span>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-2">Views: {c?.views}</p>

                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                        {c?.instructor?.avatar && (
                                            <Image
                                                src={c.instructor.avatar}
                                                alt={c.instructor.name}
                                                width={32}
                                                height={32}
                                                className="object-cover w-full h-full"
                                            />
                                        )}
                                    </div>
                                    <div className="text-xs sm:text-sm">
                                        <h1 className="font-medium">{c?.instructor?.name}</h1>
                                        <h1 className="text-gray-500">{c?.instructor?.role}</h1>
                                    </div>
                                </div>

                                <div className="inline-block border-b border-gray-300 pb-1 text-xs sm:text-sm mb-3">
                                    ⭐⭐⭐⭐⭐ {c?.rating}k
                                </div>

                                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-auto gap-2 text-xs sm:text-sm">
                                    <h1 className="font-semibold text-gray-800">Price: $ {c?.price}</h1>
                                    <Link href={`/details/${c?.id}`}>
                                        <button className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300">
                                            <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-400 rounded-full z-0"></span>
                                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                                                Read More <FiArrowRight size={16} />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
