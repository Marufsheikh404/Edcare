"use client"
import React, { useEffect } from 'react';
import image from '../../images/home page/10046.png'
import image2 from '../../images/home page/blog3.png'
import image3 from '../../images/home page/blog4.png'
import Image from 'next/image';
import SectionTitle from '../Shared/SectionTitle';
import image4 from '../../images/icons/10049.png'
import image5 from '../../images/icons/10050.png'
import Aos from 'aos';

const JourneyPage = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-3'>
                <div data-aos="fade-up-right" data-aos-duration="2000" className='md:col-span-3 mb-10 md:mb-0'>
                    <Image className='rounded-tl-4xl translate-y-10 w-full' src={image} alt=''></Image>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000" className='col-span-3 flex flex-col gap-3'>
                    <Image className='rounded-tr-4xl rounded-bl-4xl w-full' width={300} src={image2} alt=''></Image>
                    <Image className='rounded-tl-4xl rounded-br-4xl w-full' width={300} src={image3} alt=''></Image>
                </div>

                <div className='md:col-span-6 ml-10'>
                    <div data-aos="fade-up" data-aos-duration="2000" className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                        <div className="bg-[#DAF2F0] p-2 rounded-full">
                            <Image src="/images/icons/edu.png" width={20} height={20} alt="edu" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Welcome To Online Education
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000"> <SectionTitle title={'We Care About Your Life For Better Future'} des={'This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve'}></SectionTitle></div>

                    <div data-aos="fade-up" data-aos-duration="2000" className='my-5'>
                        <div className="flex items-center gap-5 bg-[#ffffff] shadow-lg hover:shadow-2xl transition-all duration-300 py-8 px-2 rounded-md border border-gray-200 cursor-pointer">
                            <div className='bg-[#ECF3F8] hover:bg-[#07A698] rounded-full p-3'> <Image width={50} src={image4} alt=''></Image></div>
                            <div>
                                <h1 className='text-lg font-bold'>Master Certified Trainer</h1>
                                <p className='text-sm text-gray-500'>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000" className='my-5'>
                        <div className="flex items-center gap-5 bg-[#ffffff] shadow-lg hover:shadow-2xl transition-all duration-300 py-8 px-2 rounded-md border border-gray-200 cursor-pointer">
                            <div className='bg-[#ECF3F8] hover:bg-[#07A698] rounded-full p-3'> <Image width={50} src={image5} alt=''></Image></div>
                            <div>
                                <h1 className='text-lg font-bold'>Coach Certification Program</h1>
                                <p className='text-sm text-gray-500'>This includes offering personalized feedback, fostering a sense of community through discussion..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyPage;