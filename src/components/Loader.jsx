"use client";
import Image from "next/image";
import logo from "../images/icons/10002.png";

export default function Loader() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-20 h-20">

                <div className="absolute inset-0 border-8 border-teal-500 border-t-transparent rounded-full animate-spin"></div>

                <div className="absolute inset-3 flex items-center justify-center">
                    <Image
                        src={logo}
                        alt="Loading Logo"
                        className="w-15 h-12 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
