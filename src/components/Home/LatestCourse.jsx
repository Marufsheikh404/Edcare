"use client";
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Aos from 'aos';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const LatestCoursePage = () => {
    const { categories, courses } = useContext(AuthContext);
    const [activeCategory, setActiveCategory] = useState(null);

    const filteredCourses = activeCategory
        ? courses.filter(course =>
            categories
                .find(cat => cat.id === activeCategory)
                ?.courseIds.includes(course.id)
        )
        : courses;

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-12 py-10">
            <div data-aos="fade-up" data-aos-duration="2000" className='grid place-items-center mb-10'>
                <SectionTitle title={'Explore Featured Courses'} />
            </div>

          
            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap gap-4 items-center justify-center mb-10">
                <button
                    className={`btn rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base ${activeCategory === null ? 'bg-[#07A698] text-white border border-gray-200' : 'bg-white text-black border border-gray-200'}`}
                    onClick={() => setActiveCategory(null)}
                >
                    All
                </button>
                {categories?.map(category => (
                    <button
                        key={category.id}
                        className={`btn rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base ${activeCategory === category.id ? 'bg-[#07A698] text-white border border-gray-200' : 'bg-white text-black border border-gray-200'}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            {/* COURSE DATA */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {filteredCourses.slice(0, 8).map(c => (
                    <div key={c?.id} data-aos="fade-up" data-aos-duration="1000">
                        <div className="card w-full sm:w-auto shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition flex flex-col h-full">
                            
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
                                <p className="text-xs sm:text-sm font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full px-2 py-1 w-max text-center mb-1">{c?.badge}</p>

                                <h2 className="card-title text-base sm:text-lg font-bold leading-snug mb-1">
                                    {c?.title}
                                </h2>

                                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-gray-500 text-xs sm:text-sm mb-2">
                                    <span className='font-semibold'>Lessons: {c?.lessons}</span>
                                    <span className='font-semibold'>Students: {c?.students}</span>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-2">Views: {c?.views}</p>

                            
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                        {c?.instructor?.avatar ? (
                                            <Image
                                                src={c.instructor.avatar}
                                                alt={c.instructor.name}
                                                width={32}
                                                height={32}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : null}
                                    </div>
                                    <div className="text-xs sm:text-sm">
                                        <h1 className="font-medium">{c?.instructor?.name}</h1>
                                        <h1 className="text-gray-500">{c?.instructor?.role}</h1>
                                    </div>
                                </div>

                               
                                <div className="inline-block border-b border-gray-300 pb-1 text-xs sm:text-sm mb-3">
                                    ⭐⭐⭐⭐⭐ {c?.rating}k
                                </div>

                               
                                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-auto gap-2 text-sm sm:text-base">
                                    <h1 className="font-semibold text-gray-800">Price: $ {c?.price}</h1>
                                    <Link href={`/details/${c?.id}`}>
                                        <button className="relative flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300">
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
        </section>
    );
};

export default LatestCoursePage;
