"use client";
import AuthContext from '@/context/AuthContext';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { FiRotateCcw, FiTruck } from 'react-icons/fi';
import { RiShieldCheckLine } from 'react-icons/ri';
import { TiArrowRightOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';


const ShopDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { shops } = useContext(AuthContext);
    const findProduct = shops.find(p => p?.id === Number(id))
    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-5 bg-gray-50 p-6 rounded -translate-y-6">
                        <div className="relative">
                            {findProduct?.badge && (
                                <span className="absolute left-4 top-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {findProduct?.badge}
                                </span>
                            )}

                            <div className="w-full flex justify-center">
                                <Image className='object-contain' src={findProduct?.image} alt={findProduct?.title} width={300} height={200}></Image>
                            </div>
                        </div>
                    </div>

                    {/* right - details */}
                    <div className="lg:col-span-7">
                        <p className="text-xs text-emerald-600 font-medium mb-2">{findProduct?.author.toUpperCase()}</p>
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">{findProduct?.title}</h1>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm text-gray-600">({findProduct?.reviews} customer review)</span>
                        </div>

                        <div className="flex items-end gap-4 mb-4">
                            <div>
                                <div className="text-2xl font-semibold">${findProduct?.newPrice}</div>
                            </div>
                        </div>

                        <hr className="my-2" />

                        <p className="text-gray-600 mb-6">{findProduct?.description}</p>

                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                            <TiArrowRightOutline className="w-5 h-5" />
                            <span>{findProduct?.viewers} people are viewing this right now</span>
                        </div>



                        <div className="mt-6 space-y-4">
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center gap-3">
                                    <FiRotateCcw className="w-5 h-5" />
                                    <span>Free returns</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiTruck className="w-5 h-5" />
                                    <span>Free shipping via DHL, fully insured</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <RiShieldCheckLine className="w-5 h-5" />
                                    <span>All taxes and customs duties included</span>
                                </li>
                            </ul>
                        </div>


                        <div className="relative mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <button onClick={() => dispatch(addItem({ id: findProduct?.id }))} className="group relative flex-1 border border-gray-300 rounded-full py-3 px-6 text-sm font-medium overflow-hidden">

                                <span className="absolute inset-0 bg-linear-to-r from-[#39B8AD] to-[#2fa79b] 
                                scale-x-0 group-hover:scale-x-100 
                                transform origin-left transition-transform duration-600 
                                rounded-full z-0">
                                </span>
                                <span className="relative z-10">Add To Cart</span>
                            </button>
                        </div>


                        <div className="mt-6">
                            <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold">
                                Buy The Item Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetailsPage;