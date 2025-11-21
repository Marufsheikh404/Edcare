"use client";
import Loader from '@/components/Loader';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { GoFileDirectory } from 'react-icons/go';

const BlogDetailsPage = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        let mounted = true;
        const loadData = async () => {
            try {
                setLoading(true);
                const res = await fetch('/blogs.json');
                const json = await res.json();
                if (mounted) setBlogs(json);
            } catch (error) {
                if (mounted) setError(error.message)
            } finally {
                if (mounted) setLoading(false)
            }
        }
        loadData();
        return () => { mounted = false; };
    }, [])

    if (Loading) {
        return <Loader></Loader>
    }

    const blogDetails = blogs.find(b => b?.id === Number(id));
    return (
        <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition p-4 flex flex-col md:flex-row gap-6">

            {/* Image Section */}
            <div className="flex-1">
                <figure>
                    <Image
                        src={blogDetails?.image}
                        alt={blogDetails?.title}
                        width={500}
                        height={500}
                        className="w-full h-auto max-h-96 object-cover rounded-md"
                    />
                </figure>
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col gap-3">
                <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 relative inline-block group cursor-pointer">
                    <span className="relative z-10 group-hover:text-[#07A698] transition-colors duration-300">
                        {blogDetails?.title}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#07A698] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1">
                        <BsStopwatch className="text-[#2FA79B]" />
                        <span className="text-xs font-bold text-gray-600">{blogDetails?.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <GoFileDirectory className="text-[#2FA79B]" />
                        <span className="text-xs font-bold text-gray-600">{blogDetails?.category}</span>
                    </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                    Uniquely pursue emerging experiences before liemerging content. Efficiently
                    underwhelm customer directed total linkage after B2C synergy. Dynamically simplify
                    superior human capital whereas efficient infrastructures generate business
                    web-readiness after wireless outsourcing.
                    <br /><br />
                    Assertively recaptiualize interdependent alignments via backend leadership skills.
                    Monotonectally formulate focused quality vectors whereas proactive infomediaries.
                    Energistically utilize ethical initiatives without impactful applications.
                    
                </p>
            </div>
        </div>

    );
};

export default BlogDetailsPage;