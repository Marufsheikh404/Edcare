"use client";
export default function Loader() {
    return (
        <div className="flex flex-col items-center gap-4">

            <div className="w-28 h-28 rounded-full flex items-center justify-center text-white text-2xl font-extrabold
                      bg-linear-to-r from-[#06b6d4] to-[#7c3aed] animate-bounce">
                ED
            </div>

            {/* spinner */}
            <svg className="w-12 h-12 animate-spin" viewBox="0 0 50 50" aria-hidden="true">
                <circle cx="25" cy="25" r="20" stroke="#e6edf3" strokeWidth="5" fill="none" />
                <path d="M45 25a20 20 0 0 1-20 20" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>

           
        </div>
    );
}
