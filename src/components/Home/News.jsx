"use client";
import Image from 'next/image';
import React from 'react';
import ed from '../../images/icons/edu.png'
import card from '../../images/home page/blog8.png'
import card2 from '../../images/home page/blog1.jpg'
import { CiStopwatch } from "react-icons/ci";
import { GoFileDirectory } from "react-icons/go";
import SectionTitle from '../Shared/SectionTitle';

const NewsPage = () => {
    return (
        <div>
            <div>
                <div className='place-items-center'>
                    <div className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={ed} width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>
                    <SectionTitle title={'Latest News Updates'}></SectionTitle>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-stretch gap-5 my-5'>
                <div className="card relative flex-1 bg-base-100 image-full w-full md:w-96 shadow-sm">
                    <figure>
                        <Image className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer' src={card} alt=''></Image>
                    </figure>
                    <div className="card-body absolute top-40">
                        <h2 className=" bg-white text-[#07A698] w-20 text-center rounded-full ">Learning</h2>
                        <p className='text-2xl font-semibold'>Repurpose mission critical action life items rather total linkage suds</p>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center'>
                                <CiStopwatch size={30} />
                                <p>Auguest 15 , 2025</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <GoFileDirectory size={26} />
                                <p>Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-blue-950/80 to-transparent"></div>
                </div>

                <div className="card relative flex-1 bg-base-100 image-full w-full md:w-96 shadow-sm">
                    <figure>
                        <Image className='transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer' src={card2} alt=''></Image>
                    </figure>
                    <div className="card-body absolute top-40">
                        <h2 className=" bg-white text-[#07A698] w-20 text-center rounded-full ">Learning</h2>
                        <p className='text-2xl font-semibold'>Repurpose mission critical action life items rather total linkage suds</p>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center'>
                                <CiStopwatch size={30} />
                                <p>Auguest 15 , 2025</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <GoFileDirectory size={26} />
                                <p>Marketing</p>
                            </div>
                        </div>
                    </div>
                     <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-blue-950/80 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;