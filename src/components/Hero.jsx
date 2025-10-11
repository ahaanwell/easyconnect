"use client";
import Link from "next/link";

function Hero() {

  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <section className="bg-white px-6 sm:px-10 pt-24 md:py-10 md:pt-24 ">
      <div className="bg-[#04121d] w-full rounded-3xl flex flex-col md:flex-row items-center justify-between text-white overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 p-6 sm:p-10 md:p-16">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-snug drop-shadow-sm">
            Maintain, Boost, and{" "}
            <span className="text-sky-300 block">Protect Your System</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            EasyConnect effortlessly handles updates and optimizations, keeping your computer running smoothly, quickly, and reliably at all times.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={openChat}
              className="bg-white text-blue-700 font-semibold px-6 py-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all text-base sm:text-lg"
            >
              Buy Now
            </button>
            <button
            onClick={openChat}
              href="#drivers"
              className="flex items-center gap-2 text-white hover:text-sky-200 cursor-pointer transition text-base sm:text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
              <span className="text-green-400 text-lg sm:text-xl">✓</span>
              Auto Driver Updates
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
              <span className="text-yellow-400 text-lg sm:text-xl">⚡</span>
              Boost Performance
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6 sm:px-10 md:px-0">
          <img
            src="/heroimg.png"
            alt="Hero Image"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-8 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
