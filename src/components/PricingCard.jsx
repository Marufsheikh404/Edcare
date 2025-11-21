"use client";

import Aos from "aos";
import { useEffect } from "react";

const PricingCard = ({
    title,
    price,
    description,
    features,
    highlighted,
}) => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <div
            data-aos="fade-up" data-aos-duration="1000"
            className={`bg-[#F5F9FA] p-8 rounded-3xl shadow-sm hover:shadow-md transition ${highlighted ? "border border-[#07A698]" : ""
                }`}
        >
            {highlighted ? (
                <div className="bg-[#07A698] text-white p-6 rounded-2xl mb-6">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>

                    <div className="mb-3">
                        <span className="text-4xl font-extrabold">${price}</span>
                        <span className="text-white/90 text-sm"> /Per month</span>
                    </div>

                    <p className="text-white/90 text-sm">{description}</p>
                </div>
            ) : (
                <>
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>

                    <div className="mb-4">
                        <span className="text-4xl font-extrabold">${price}</span>
                        <span className="text-gray-500 text-sm"> /Per month</span>
                    </div>

                    <p className="text-gray-500 text-md font-normal mb-6">{description}</p>
                </>
            )}

            <ul className="space-y-3 mb-8 text-gray-600">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center font-semibold gap-2">
                        <span
                            className={`text-lg flex items-center justify-center ${f.available ? "bg-[#068d82] rounded-full text-center" : "text-green"}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>

                        {f.title}
                    </li>
                ))}
            </ul>

            <button
                className={`relative overflow-hidden px-8 py-3 rounded-full group font-semibold transition w-full ${highlighted
                    ? "bg-[#07A698] text-white hover:bg-[#068d82]"
                    : "text-[#07A698] hover:text-white"
                    }`}
            >
                <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] 
                scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 rounded-full"></span>

                <span className="relative z-10">Register Now →</span>
            </button>
        </div>
    );
};

export default PricingCard;
{/* <button className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 overflow-hidden group border border-gray-300 cursor-pointer">
    <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-400 rounded-full z-0"></span>

    <span className="relative z-10 flex items-center group-hover:text-white gap-2">
        Read More <FiArrowRight size={18} />
    </span>
</button> */}