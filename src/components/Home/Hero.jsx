import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';

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
        </div>
    );
};

export default HeroSection;