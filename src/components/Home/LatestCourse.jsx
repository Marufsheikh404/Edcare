"use client";
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';

const LatestCoursePage = () => {
    const { categories, courses } = useContext(AuthContext);
    const [activeCategory, setActiveCategory] = useState(null)
    // Filter courses based on active category
    const filteredCourses = activeCategory
        ? courses.filter(course =>
            categories
                .find(cat => cat.id === activeCategory)
                ?.courseIds.includes(course.id)
        )
        : courses;


    return (
        <section>
            <div className='place-items-center'> <SectionTitle title={'Explore Featured Courses'}></SectionTitle></div>
            <div className="my-10">
                {/* CATEGORY BUTTONS */}
                <div className="flex flex-wrap gap-4 items-center justify-center mb-10">
                    <button
                        className={`btn rounded-full px-6 py-2 ${activeCategory === null ? 'bg-[#07A698] text-white' : 'bg-white text-black'}`}
                        onClick={() => setActiveCategory(null)}
                    >
                        All
                    </button>
                    {categories?.map(category => (
                        <button
                            key={category.id}
                            className={`btn rounded-full px-6 py-2 ${activeCategory === category.id ? 'bg-[#07A698] text-white' : 'bg-white text-black'}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                {/* COURSE DATA */}
                <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {filteredCourses?.map((c) => (
                        <div key={c?.id}>
                            <div className="card w-full h-auto shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-xl transition flex flex-col">
                                <figure className="h-48 w-full relative bg-gray-100 overflow-hidden">
                                    <Image
                                        src={c?.thumbnail}
                                        alt={c?.title || 'image'}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </figure>

                                <div className="card-body h-52 p-4 flex flex-col gap-2 flex-1">
                                    <p className="text-xs font-semibold text-[#07A698] bg-[#E6F6F4] rounded-full p-1 w-10 text-center mb-1">{c?.badge}</p>

                                    <h2 className="card-title text-xl font-bold leading-snug mb-1">
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
                                        <button className="btn bg-white rounded-full border border-gray-200 px-3 py-1 text-[#07A698] hover:bg-gray-50">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestCoursePage;