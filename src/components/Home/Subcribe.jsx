"use client";
import Image from 'next/image';
import React from 'react';
import image from '../../images/home page/10055.png'
import ed from '../../images/icons/edu.png'
import SectionTitle from '../Shared/SectionTitle';
import bg from '../../images/icons/10054.png'

const Subcribepage = () => {
    return (
        <section className="lg:py-10" >
            <div className='flex flex-col lg:flex-row gap-3 p-10 rounded-md' style={{backgroundImage:`url(${bg.src})`}}>
                <div className="">
                    <div className="md:col-span-7 relative">
                        <div className="w-full rounded-[18px] overflow-hidden">
                            <Image width={700} height={500} src={image} alt=''></Image>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src={ed} width={15} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>
                    <h1 className='text-4xl text-white font-bold my-2'>Find Your Best Course With Us</h1>
                    <SectionTitle des={'Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.'}></SectionTitle>
                    <div className='flex items-center gap-5 my-2'>
                        <input type="text" placeholder="Enter Your Name " className=" input rounded-full font-semibold text-[#ffffff] border-none focus:outline-none focus:border-none focus:ring-1 focus:ring-[#39B8AD]"/>
                        <input type="email" placeholder="Enter Your Email" className=" input rounded-full font-semibold text-white border-none focus:outline-none  focus:ring-1 focus:ring-[#39B8AD]" />
                    </div>
                    <button className="hidden sm:inline-flex items-center py-2 px-4 rounded-full text-sm  font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] transition-shadow shadow-sm my-2">SubCribe Now</button>
                </div>
            </div>
        </section>
    );
};

export default Subcribepage;