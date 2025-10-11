"use client";
import Link from "next/link";
import Image from "next/image";

export default function QuickEasySection() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <section
      id="drivers"
      className="relative overflow-hidden border-0 bg-gradient-to-b from-white via-sky-50 to-sky-100 md:px-10 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* === LEFT CONTENT === */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Keep Your Drivers Current{" "}
            <span className="text-sky-600">with Just a Few Clicks</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            EasyConnect automatically scans, downloads, and installs the latest drivers ensuring your system stays compatible and performs at its best.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={openChat}
              className="bg-sky-600 text-white font-semibold px-6 py-3 cursor-pointer rounded-lg shadow-md hover:bg-sky-700 transition-all"
            >
              Buy Now
            </button>
            <button
              onClick={openChat}
              className="border border-sky-600 text-sky-700 font-medium px-6 py-3 rounded-lg hover:bg-sky-50 transition-all"
            >
              Find Out More
            </button>
          </div>
        </div>

        {/* === RIGHT ILLUSTRATION === */}
        <div>
            <img src="/driveupdateimg.png" alt="" />
        </div>
      </div>

      {/* === DECORATIVE CURVE === */}
      {/* <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,240C840,213,960,139,1080,133.3C1200,128,1320,192,1380,224L1440,256V320H0Z"
        ></path>
      </svg> */}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
