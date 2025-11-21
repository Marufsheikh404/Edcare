"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const BookCard = ({ shop }) => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-2xl transition cursor-pointer">
            <div>
                <div className="flex justify-start mb-5 group">
                    <span className="bg-white border rounded-full group-hover:bg-[#07A698] group-hover:text-white transition-all duration-400 ease-in-out px-4 py-1 text-sm font-semibold text-[#07A698] shadow-sm">
                        {shop?.author}
                    </span>
                </div>

                <div className="flex justify-center mb-6">
                    <Image
                        src={shop?.image}
                        alt={shop?.title}
                        width={200}
                        height={300}
                        className="rounded-md object-cover h-55"
                    />
                </div>
            </div>

            <Link href={`/shopDetails/${shop?.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-[#07A698] transition-all duration-300 ease-in-out mb-3">
                    {shop?.title}
                </h2>
            </Link>

            <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-yellow-500">
                    {Array.from({ length: shop?.rating }).map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-600 text-sm">({shop?.reviews} Reviews)</p>
            </div>

            <div className="flex items-center gap-3">
                <span className="line-through text-gray-500 font-semibold">
                    ${shop?.oldPrice}
                </span>
                <span className="text-[#07A698] font-bold text-lg">
                    ${shop?.newPrice}
                </span>
            </div>
        </div>
    );
};

export default BookCard;
