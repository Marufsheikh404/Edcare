"use client";
import Image from 'next/image';
import React from 'react';
import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { PiShoppingCartThin } from "react-icons/pi";

const MiddleHeader = () => {
    return (
        <div className='flex items-center justify-between max-w-7xl mx-auto py-2 px-4'>
            <div>
                <Image className='w-37 h-13' width={300} height={150} src='/images/icons/logo.png' alt='logo'></Image>
            </div>
            <div className='flex items-center gap-2'>
                <BiCategory />
                <div className='flex items-center justify-center'>
                    <h1 className='text-black font-semibold'>Category</h1>
                    <div className='rotate-90'><IoIosArrowForward /></div>
                </div>
                <label className="input bg-white border-none w-64 h-10 relative flex items-center">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className='border-none px-10 h-full w-full' required placeholder="Search" />
                </label>
            </div>
            <div className='flex items-center gap-3'>
                <div className='border border-gray-300 rounded-full p-4'><GiSelfLove size={25} /></div>
                <div className='border border-gray-300 rounded-full p-4'> <PiShoppingCartThin size={25} /></div>
                <h1 className='py-2 px-4 text-white font-bold rounded-2xl bg-[#39B8AD] border-none'>Start Free Trial</h1>
            </div>
        </div>
    );
};

export default MiddleHeader;