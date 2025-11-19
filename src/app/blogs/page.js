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
            <div className='relative'>
                <div className='relative'>
                    <Image className='h-90 bg-contain' src={banner} alt='banner'></Image>
                    <Image className='absolute top-35 z-10' src={shadow} alt='shadow'></Image>
                    <Image className='absolute left-95 top-69 z-10' src={cricel} alt='shadow'></Image>
                    <Image className='absolute right-0 top-0 text-[#2FA79B]' src={cricel2} alt='shadow'></Image>
                    <div className='absolute left-65 z-10 top-30'>
                        <h1 className='text-5xl font-bold'>Blogs Grid</h1>
                        <p className='flex items-center gap-2 mt-3'>
                            <h3 className='text-xl font-semibold'><Link href={'/'}>Home</Link></h3>
                            /
                            <span className='text-xl font-semibold text-[#2FA79B]'>Blogs Grid</span>
                        </p>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-full w-[80%] bg-linear-to-r from-white/80 bg-transparent '></div>
            </div>

            <div>
                {
                    blogs.map(blog=> <BlogCard key={blog.id} blog ={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogPage;