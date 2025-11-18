"use client";
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Image from 'next/image';
import ed from '../../images/icons/edu.png'
import logo1 from '../../images/icons/10049.png'
import logo2 from '../../images/icons/10020.png'
import logo3 from '../../images/icons/10016.png'
import logo4 from '../../images/icons/10019.png'
import logo5 from '../../images/icons/10050.png'
import logo6 from '../../images/icons/10014.png'
import logo7 from '../../images/icons/10016.png'
import logo8 from '../../images/icons/10017.png'
import logo9 from '../../images/icons/10018.png'
import logo10 from '../../images/icons/10019.png'
import logo11 from '../../images/icons/10020.png'
import logo12 from '../../images/icons/10021.png'
import logo13 from '../../images/icons/10022.png'

const CoursesPage = () => {

    const categories = [
        { title: "Business Management", icon: logo1 },
        { title: "Arts & Design", icon: logo2 },
        { title: "Personal Development", icon: logo3 },
        { title: "Health & Fitness", icon: logo4 },
        { title: "Marketing", icon: logo5 },
        { title: "Business & Finance", icon: logo6 },
        { title: "Computer Science", icon: logo7 },
        { title: "Video & Photography", icon: logo8 },
        { title: "Data Science", icon: logo9 },
        { title: "IT Startup Agency", icon: logo10 },
        { title: "Software Company", icon: logo11 },
        { title: "High-Tech Company", icon: logo12 },
        { title: "3D Gaming Studio", icon: logo13 },
    ];

    return (
        <div>
            <div className='place-items-center'>
                <div className="bg-white border border-gray-200 rounded-full w-fit px-3 py-2 flex items-center gap-2 shadow-sm mb-2">
                    <div className="bg-[#DAF2F0] p-2 rounded-full">
                        <Image src={ed} width={20} height={20} alt="edu" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        Our Courses Categories
                    </p>
                </div>

                <SectionTitle title={'Select The Industry Where You Want To Learn'} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mt-6">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-full md:w-auto  lg:w-[80%] gap-3 bg-white rounded-full shadow-sm border border-gray-200 
                       py-2 px-4 cursor-pointer hover:shadow-md hover:bg-[#07A698] transition-all ease-in-out"
                    >
                        <div className="bg-white p-3 rounded-full">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={15}
                                height={15}
                            />
                        </div>

                        <span className="text-gray-800 font-medium whitespace-nowrap">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CoursesPage;
