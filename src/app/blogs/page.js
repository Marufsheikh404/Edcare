"use client";
import Image from 'next/image';
import Link from 'next/link';
import banner from '../../images/banner/banner.png'
import shadow from '../../images/shadow/10002.png'
import cricel from '../../images/shadow/cricel.png'
import cricel2 from '../../images/shadow/cricle2.png'
import { useEffect, useState } from 'react';
import BlogCard from '@/components/Shared/BlogCard';


const BlogPage = () => {
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


    return (
        <div>
            <div className="relative">
                <div className="relative w-full">
                    <div className="relative w-full h-80 lg:h-100 ">
                        <Image
                            src={banner}
                            alt="banner"
                            fill
                            priority
                            style={{ objectFit: "cover" }}
                            className="block"
                        />
                    </div>

                    <Image
                        src={shadow}
                        alt="shadow"
                        width={200}
                        height={220}
                        className="pointer-events-none absolute left-0 w-40 lg:w-50 lg:left-4 top-20  z-10"
                    />

                    <Image
                        src={cricel}
                        alt="cricel"
                        width={120}
                        height={140}
                        className="pointer-events-none absolute left-1/3 top-67 lg:top-85   z-10"
                    />

                    <Image
                        src={cricel2}
                        alt="cricel2"
                        width={160}
                        height={160}
                        className="pointer-events-none absolute right-0 top-0  z-10"
                    />

                    <div className="absolute top-30 left-40 lg:left-50 z-10">
                        <div className="max-w-4xl bg-transparent">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                                Blogs Grid
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Blogs Grid
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white/80 to-transparent" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogPage;