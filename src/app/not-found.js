// app/not-found.js
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f8] text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Page Not Found</p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#07A698] font-semibold text-white rounded-full hover:bg-[#039e8c] transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
