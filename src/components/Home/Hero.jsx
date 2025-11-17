import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { CiPlay1 } from "react-icons/ci";

const HeroSection = () => {
    return (
        <div className='bg-[#E8EFF6] p-5'>
            <div>
                <div className='bg-[#FFFFFF] rounded-full w-75 px-1 py-2 flex items-center gap-2'>
                    <div className='bg-[#DAF2F0] p-2 rounded-full'><Image src="/images/icons/edu.png" width={20} height={10} alt='imge'></Image></div>
                    <p>Welcome To Online Education</p>
                </div>
            </div>
            <div>
                <SectionTitle title={'Start Learning from <br/> the world best institutions'}></SectionTitle>
            </div>
            <div className='flex items-center gap-8 my-5'>
                <button className="hidden sm:inline-flex items-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-[#39B8AD] hover:bg-[#2fa79b] transition-shadow shadow-sm">Get Started</button>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#FFFFFF] p-3 rounded-full'> <CiPlay1 /></div>
                    <p>Watch The Video</p>
                </div>
            </div>
            <div className='flex items-center gap-8 my-5'>
                <div className="flex items-center relative w-20 h-[30px]">
                    <Image
                        width={30} height={30}
                        src="/images/small-image/10006.png"
                        alt="img"
                        className="rounded"
                    />

                    <Image
                        width={30} height={30}
                        src="/images/small-image/10007.png"
                        alt="img"
                        className="absolute left-4 rounded"
                    />

                    <Image
                        width={30} height={30}
                        src="/images/small-image/10008.png"
                        alt="img"
                        className="absolute left-8 rounded"
                    />

                    <Image
                        width={30} height={30}
                        src="/images/small-image/10009.png"
                        alt="img"
                        className="absolute left-12 rounded"
                    />
                </div>
                <div className='flex items-center gap-3'>
                    <p><span className='text-[#07A698]'>10k</span>Enrollment</p>
                </div>
            </div>
            <h1 className='font-bold text-2xl'>Explore <span className='text-[#07A698]'>1350+</span> Courses Within Subjects</h1>

        </div>
    );
};

export default HeroSection;