"use client";
import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react';

const LatestCoursePage = () => {
    const { categories } = useContext(AuthContext)
    return (
        <div className='my-10'>
            <div className='flex flex-wrap gap-5 items-center justify-center'>
                {
                    categories?.map(category => (
                        <div key={category.id}>
                            <div>
                                <button className='btn  rounded-full bg-white text-black border border-gray-200 shadow-2xl'>{category.category}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCoursePage;