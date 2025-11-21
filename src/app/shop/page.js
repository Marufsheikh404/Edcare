"use client";
import BookCard from '@/components/BookCard';
import AuthContext from '@/context/AuthContext';
import { useContext, useState, useRef, useEffect } from 'react';

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
        <div className="relative px-4 py-6">
            <div className="flex justify-end mb-6">
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        aria-haspopup="true"
                        aria-expanded={open}
                        className="bg-[#2FA79B] text-white px-4 py-2 rounded-xl"
                    >
                        Sort: {sortType === 'reviews' ? 'Reviews' :
                            sortType === 'title' ? 'Title' :
                                sortType === 'price-low' ? 'Price ' :
                                    sortType === 'price-high' ? 'Price' :
                                        sortType === 'rating' ? 'Rating' : sortType}
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded z-10 px-2">
                            <ul className="text-sm">
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSort('reviews')}
                                >
                                    Reviews (High → Low)
                                </li>
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSort('rating')}
                                >
                                    Rating (High → Low)
                                </li>
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSort('title')}
                                >
                                    Title (A → Z)
                                </li>
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSort('price-low')}
                                >
                                    Price (Low → High)
                                </li>
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
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
