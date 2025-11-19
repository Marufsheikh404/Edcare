"use client";
import SectionTitle from '@/components/Shared/SectionTitle';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone } from 'react-icons/fa';
import { FaMap, FaStopwatch } from 'react-icons/fa6';
import { FiChevronDown, FiMail, FiMessageSquare, FiUser } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from '../../images/banner/banner.png'
import shadow from '../../images/shadow/10002.png'
import cricel from '../../images/shadow/cricel.png'
import cricel2 from '../../images/shadow/cricle2.png'
import Link from 'next/link';
import Image from 'next/image';


const ContactPage = () => {
    const notify = () => toast("Wow SuccessFully");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [status, setStatus] = useState(null);

    async function onSubmit(data) {
        reset();
        notify();
    }
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
                               Contact Us
                            </h1>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-base sm:text-lg">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    <Link href="/" className="hover:text-[#2FA79B]">Home</Link>
                                </h3>

                                <span className="text-base sm:text-lg">/</span>

                                <span className="text-base sm:text-lg font-semibold text-[#2FA79B]">
                                    Contact Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-4/5 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-r from-white to-transparent" />
                </div>
            </div>
            <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">


                <div className="bg-white rounded-2xl border p-8 shadow-sm">
                    <SectionTitle title={'Leave A Reply'} des={'Fill-up The Form and Message us of your amazing question'}></SectionTitle>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })}
                                    className={`w-full border rounded-lg px-4 py-3 pr-10 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none ${errors.name ? "border-red-300" : "border-gray-200"
                                        }`}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                <FiUser className="absolute right-3 top-3 text-[#07A698]" size={20} />
                            </label>

                            <label className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                                    })}
                                    className={`w-full border rounded-lg px-4 py-3 pr-10 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none ${errors.email ? "border-red-300" : "border-gray-200"
                                        }`}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                <FiMail className="absolute right-3 top-3 text-[#07A698]" size={20} />
                            </label>
                        </div>

                        <label className="relative block">
                            <select
                                {...register("subject", { required: "Please select a subject" })}
                                className={`w-full border rounded-lg px-4 py-3 pr-10 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-teal-500 outline-none ${errors.subject ? "border-red-300" : "border-gray-200"
                                    }`}
                                aria-invalid={errors.subject ? "true" : "false"}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Subject
                                </option>
                                <option>Development</option>
                                <option>Marketing</option>
                                <option>AI Development</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-3 text-[#07A698]" size={20} />
                        </label>
                        {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}

                        <label className="relative block">
                            <textarea
                                rows="6"
                                placeholder="Message"
                                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Write at least 10 chars" } })}
                                className={`w-full border rounded-lg px-4 py-3 pr-10 text-gray-700 focus:ring-2 focus:ring-teal-500 outline-none ${errors.message ? "border-red-300" : "border-gray-200"
                                    }`}
                                aria-invalid={errors.message ? "true" : "false"}
                            />
                            <FiMessageSquare className="absolute right-3 top-3 text-[#07A698]" size={20} />
                        </label>

                        {status === "success" && <div className="rounded-md bg-green-50 p-3 text-green-700">Your message has been sent.</div>}
                        {status === "error" && <div className="rounded-md bg-red-50 p-3 text-red-700">Something went wrong. Try again later.</div>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Submit Message"}
                        </button>
                    </form>
                </div>


                <aside className="bg-white rounded-2xl border p-8 shadow-sm">
                    <SectionTitle title={'Office Information'} des={'Completely recapitalize 24/7 communities via standards compliant metrics whereas.'}></SectionTitle>

                    <div className="mt-8 border-b pb-6 group ">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg border bg-gray-50 group-hover:bg-[#07A698] transition ease-in-out duration-500">
                                <FaPhone className="text-teal-600 group-hover:text-white" size={22} />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Phone Number & Email</h2>
                                <p className="text-gray-600 mt-1">(+65) – 48596 – 5789</p>
                                <p className="text-gray-600">hello@edcare.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-b pb-6 group">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg border bg-gray-50 group-hover:bg-[#07A698] transition ease-in-out duration-500">
                                <FaMap className="text-teal-600 group-hover:text-white" size={22} />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Our Office Address</h2>
                                <p className="text-gray-600 mt-1 leading-relaxed">
                                    2690 Hilton Street Victoria Road, <br />
                                    New York, Canada
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg border bg-gray-50 group-hover:bg-[#07A698] transition ease-in-out duration-500">
                                <FaStopwatch className="text-teal-600 group-hover:text-white" size={22} />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Official Work Time</h2>
                                <p className="text-gray-600 mt-1">Monday – Friday: 09:00 – 20:00</p>
                                <p className="text-gray-600">Sunday & Saturday: 10:30 – 22:00</p>
                            </div>
                        </div>
                    </div>
                </aside>
                <ToastContainer />
            </section>
        </div>
    );
};

export default ContactPage;