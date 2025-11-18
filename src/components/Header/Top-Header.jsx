import React from "react";
import { PhoneIcon, MapPinIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const TopHeader = () => {
    return (
        <div className="w-full bg-[#1c2b2b] text-white text-sm">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-2 px-4">

                <div className="hidden lg:flex flex-wrap gap-6 items-center">
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4" />
                        <span>256 214 203 215</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>258 Helano Street, New York</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>Mon - Sat: 8:00 - 15:00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-6 mt-2 sm:mt-0 w-full lg:w-auto">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                        <UserIcon className="w-4 h-4" />
                        <span>Login / Register</span>
                    </div>

                    <div className="flex gap-3 text-lg">
                        <a className="text-[#2FA79B]" href="#"><TiSocialFacebookCircular /></a>
                        <a className="text-[#2FA79B]" href="#"><FaInstagram /></a>
                        <a className="text-[#2FA79B]" href="#"><FiTwitter /></a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TopHeader;
