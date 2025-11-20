"use client";
import React, { useContext, useEffect } from 'react';
import banner from '../../images/banner/banner.png'
import Image from 'next/image';
import shadow from '../../images/shadow/10002.png'
import cricel from '../../images/shadow/cricel.png'
import cricel2 from '../../images/shadow/cricle2.png'
import Link from 'next/link';
import SectionTitle from '@/components/Shared/SectionTitle';
import icon from '../../images/icons/edu.png'
import Aos from 'aos';
import AuthContext from '@/context/AuthContext';
import { FiArrowRight } from 'react-icons/fi';

const CoursePage = () => {
    const { courses } = useContext(AuthContext)
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,
        });
    }, [])
    return (
        <div className='py-10'>
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
                                Courses Page
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Courses Page
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white to-transparent" />
                </div>
            </div>

            <div>
                <div className='place-items-center my-11'>
                    <div data-aos="fade-up" data-aos-duration="2000" className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={icon} width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>
                    <div className='mt-6' data-aos="fade-up" data-aos-duration="2000"> <SectionTitle title={'Explore Featured Courses'}></SectionTitle></div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    courses.map(c => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={c?.id}>
                            <div className="card w-80 h-[495] shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition ">
                                <figure className="h-48 w-full relative bg-gray-100 overflow-hidden">
                                    <Image
                                        src={c?.thumbnail}
                                        alt={c?.title || 'image'}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-auto"
                                    />
                                </figure>

                                <div className="card-body h-52 p-4 flex flex-col gap-2 flex-1">
                                    <p className="text-xs font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full p-1 w-10 text-center mb-1">{c?.badge}</p>

                                    <h2 className="card-title text-lg font-bold leading-snug mb-1">
                                        {c?.title}
                                    </h2>

                                    <div className="flex items-center gap-4 text-gray-500 text-sm leading-1">
                                        <h1 className='text-gray-500 font-semibold'>Lessons: {c?.lessons}</h1>
                                        <h1 className='text-gray-500 font-semibold'>Students: {c?.students}</h1>
                                    </div>

                                    <h1 className="text-sm text-gray-500 font-semibold mb-2">Views: {c?.views}</h1>

                                    <div className="card-actions flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                                            {c?.instructor?.avatar ? (
                                                <Image
                                                    src={c.instructor.avatar}
                                                    alt={c.instructor.name}
                                                    width={32}
                                                    height={32}
                                                    className="object-cover"
                                                />
                                            ) : null}
                                        </div>
                                        <div>
                                            <h1 className="font-medium text-xs">{c?.instructor?.name}</h1>
                                            <h1 className="text-[10px] text-gray-500">{c?.instructor?.role}</h1>
                                        </div>
                                    </div>

                                    <div className="inline-block border-b border-gray-300 pb-1 text-sm mb-3">
                                        ⭐⭐⭐⭐⭐⭐ {c?.rating}k
                                    </div>

                                    <div className="flex items-center justify-between mt-auto text-sm">
                                        <h1 className="font-semibold text-gray-800">Price: $ {c?.price}</h1>
                                        <Link href={`/details/${c?.id}`}>
                                            <button className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300">
                                                <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-400 rounded-full z-0"></span>

                                                <span className="relative z-10 flex items-center group-hover:text-white gap-2">
                                                    Read More <FiArrowRight size={18} />
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CoursePage;