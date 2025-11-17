import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Image from 'next/image';
import card from '../../images/home page/10042.png'

const InstructorPage = () => {
    return (
        <div className='py-15'>
            <div className='place-items-center'>
                <div className="bg-white rounded-full border border-gray-200 w-fit px-3 py-2 flex items-center gap-2 shadow-sm">
                    <div className="bg-[#DAF2F0] p-2 rounded-full">
                        <Image src="/images/icons/edu.png" width={20} height={20} alt="edu" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        Welcome To Online Education
                    </p>
                </div>
                <SectionTitle title={'Explore Our World Best Courses'}></SectionTitle>
            </div>

            <div className='my-5 flex flex-wrap gap-3'>
                <div className="card w-70 h-auto shadow-sm">
                    <figure className='h-70'>
                        <Image className='w-full bg-cover' src={card} alt=''></Image>
                    </figure>
                    <div className="card-body  text-start">
                        <h1 className='text-2xl font-bold text-black'>Zaramane Mass Likan</h1>
                        <h4 className='text-md font-semibold text-[#07A698]'>Online Teachers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;