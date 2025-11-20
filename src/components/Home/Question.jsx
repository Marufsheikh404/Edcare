'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

import image from '../../images/home page/blog2.png';
import logo from '../../images/icons/edu.png';
import SectionTitle from '../Shared/SectionTitle';
import view from '../../images/small-image/10040.png';
import view2 from '../../images/small-image/10036.png';
import view3 from '../../images/small-image/10034.png';
import view4 from '../../images/small-image/10041.png';
import Aos from 'aos';

const avatars = [
    { src: view, alt: 'student avatar 1' },
    { src: view2, alt: 'student avatar 2' },
    { src: view4, alt: 'student avatar 3' },
    { src: view3, alt: 'student avatar 4' },
];

const faqs = [
    {
        q: 'How do I create an account?',
        a: "Click the 'Sign Up' button, fill in name, email and password, then verify your email. After that you'll have full access to enroll in courses and use the dashboard.",
    },
    {
        q: 'I forgot my password. What should I do?',
        a: 'Use the "Forgot password" link on the login page. You will receive reset instructions via email. If not found, check spam or contact support.',
    },
    {
        q: 'How do I update my profile information?',
        a: 'Open Dashboard → Profile → Edit Profile. Update the fields you want and save. For email changes you may need to re-verify.',
    },
];

const QuestionPage = () => {
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            once: false,
            mirror: false,

        });
    }, [])
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-12 gap-6 items-start">
                    <div data-aos="fade-up-right" data-aos-duration="2000" className="col-span-12 md:col-span-5 relative">
                        <div  className="rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={image}
                                alt="students studying"
                                width={840}
                                height={560}
                                className="block w-full h-auto"
                                priority
                            />
                        </div>


                        <div className="absolute left-4 md:-left-6 top-60 md:top-58 transform md:-translate-y-6">
                            <div className="w-[280px] md:w-[250px] bg-white rounded-xl border border-gray-200 shadow-2xl p-3">
                                <h3 className="text-center text-lg font-semibold mb-2">Total Students</h3>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {avatars.map((a, i) => (
                                            <div
                                                key={i}
                                                className={`relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform duration-300
                                                ${i === 0 ? '' : '-ml-3'} hover:scale-110`}
                                                style={{ zIndex: avatars.length - i }}
                                            >
                                                <Image src={a.src} alt={a.alt} width={40} height={40} />
                                            </div>
                                        ))}
                                    </div>


                                    <div >
                                        <div className="inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-semibold text-white bg-[#07A698] shadow-md border border-gray-200">
                                            25+
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#07A698] w-[48%] transition-all duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                        <div data-aos="fade-up" data-aos-duration="2000" className="inline-flex items-center gap-3 bg-white rounded-full px-3 py-2 shadow-sm w-fit">
                            <div className="bg-[#DAF2F0] p-2 rounded-full">
                                <Image src={logo} width={20} height={20} alt="site logo" />
                            </div>
                            <p className="text-sm font-medium text-gray-600">Most Asked Question</p>
                        </div>

                       <div data-aos="fade-up" data-aos-duration="2000"> <SectionTitle title="Powerful Dashboard And High Performance Framework" /></div>

                        <div className="w-full">
                            <div className="space-y-3">
                                {faqs.map((item, idx) => {
                                    const isOpen = openIndex === idx;
                                    return (
                                        <div
                                            data-aos="fade-up" data-aos-duration="2000"
                                            key={idx}
                                            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                                aria-expanded={isOpen}
                                                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                                            >
                                                <span className="text-lg font-semibold">{item.q}</span>
                                                <svg
                                                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.12 1l-4.25 4.65a.75.75 0 01-1.12 0L5.21 8.28a.75.75 0 01.02-1.07z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            <div
                                                className={`px-4 pb-4 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <p className="text-sm text-gray-700">{item.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionPage;
