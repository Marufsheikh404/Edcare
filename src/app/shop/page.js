"use client";
import BookCard from '@/components/BookCard';
import AuthContext from '@/context/AuthContext';
import { useContext, useState, useRef, useEffect } from 'react';
import banner from '../../images/banner/banner.png'
import shadow from '../../images/shadow/10002.png'
import cricel from '../../images/shadow/cricel.png'
import cricel2 from '../../images/shadow/cricle2.png'
import Link from 'next/link';
import Image from 'next/image';

const ShopPage = () => {
    const { shops = [] } = useContext(AuthContext);
    const [sortType, setSortType] = useState('reviews');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSort = (type) => {
        setSortType(type);
        setOpen(false);
    };

    const sortedShops = [...shops].sort((a, b) => {
        if (sortType === 'reviews') return (b.reviews || 0) - (a.reviews || 0);
        if (sortType === 'title') return String(a.title || '').localeCompare(String(b.title || ''));
        if (sortType === 'price-low') return (a.price || 0) - (b.price || 0);
        if (sortType === 'price-high') return (b.price || 0) - (a.price || 0);
        if (sortType === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    return (
        <div className="relative py-6">
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
                                Shops Details
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Shops Details
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white to-transparent" />
                </div>
            </div>


            <div className="flex justify-end my-6">
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        aria-haspopup="true"
                        aria-expanded={open}
                        className="bg-[#2FA79B] text-white font-semibold px-4 py-2 rounded-xl"
                    >
                        Sort: {sortType === 'reviews' ? 'Reviews' :
                            sortType === 'title' ? 'Title' :
                                sortType === 'price-low' ? 'Price ' :
                                    sortType === 'price-high' ? 'Price' :
                                        sortType === 'rating' ? 'Rating' : sortType}
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded z-10 px-2">
                            <ul className="text-sm">
                                <li
                                    className="p-2 font-semibold hover:bg-[#2FA79B] rounded-md my-1 cursor-pointer"
                                    onClick={() => handleSort('reviews')}
                                >
                                    Reviews (High → Low)
                                </li>
                                <li
                                    className="p-2 font-semibold hover:bg-[#2FA79B] rounded-md my-1 cursor-pointer"
                                    onClick={() => handleSort('rating')}
                                >
                                    Rating (High → Low)
                                </li>
                                <li
                                    className="p-2 font-semibold hover:bg-[#2FA79B] rounded-md my-1 cursor-pointer"
                                    onClick={() => handleSort('title')}
                                >
                                    Title (A → Z)
                                </li>
                                <li
                                    className="p-2 font-semibold hover:bg-[#2FA79B] rounded-md my-1 cursor-pointer"
                                    onClick={() => handleSort('price-low')}
                                >
                                    Price (Low → High)
                                </li>
                                <li
                                    className="p-2 font-semibold hover:bg-[#2FA79B] rounded-md my-1 cursor-pointer"
                                    onClick={() => handleSort('price-high')}
                                >
                                    Price (High → Low)
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sortedShops.map(shop => (
                    <BookCard key={shop?.id} shop={shop} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
