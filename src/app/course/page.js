"use client";
import React from 'react';
import banner from '../../images/banner/banner.png'
import Image from 'next/image';
import shadow from '../../images/shadow/10002.png'
import cricel from '../../images/shadow/cricel.png'
import cricel2 from '../../images/shadow/cricle2.png'
import Link from 'next/link';
import SectionTitle from '@/components/Shared/SectionTitle';
import icon from '../../images/icons/edu.png'

const CoursePage = () => {
    return (
        <div className='py-10'>
            <div className='relative'>
                <div className='relative'>
                    <Image className='h-90 bg-contain' src={banner} alt='banner'></Image>
                    <Image className='absolute top-35 z-10' src={shadow} alt='shadow'></Image>
                    <Image className='absolute left-95 top-69 z-10' src={cricel} alt='shadow'></Image>
                    <Image className='absolute right-0 top-0 text-[#2FA79B]' src={cricel2} alt='shadow'></Image>
                    <div className='absolute left-65 z-10 top-30'>
                        <h1 className='text-5xl font-bold'>Blogs Grid</h1>
                        <div className="flex items-center gap-2 mt-3">
                            <h3 className="text-xl font-semibold">
                                <Link href={'/'}>Home</Link>
                            </h3>
                            <span>/</span>
                            <span className="text-xl font-semibold text-[#2FA79B]">Blogs Grid</span>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-full w-[80%] bg-linear-to-r from-white/80 bg-transparent '></div>
            </div>

            <div>
                <div className='place-items-center my-16'>
                    <div className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={icon} width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>
                    <SectionTitle title={'Explore Featured Courses'}></SectionTitle>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;