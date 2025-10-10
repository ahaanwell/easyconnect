"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#04121d] via-[#0b2538] to-sky-700 text-white">
      {/* ===== FIXED NAVBAR ===== */}
      {/* <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/10 to-transparent backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white text-blue-600 font-bold text-xl px-3 py-1 rounded-md shadow-sm">
              EC
            </div>
            <span className="font-semibold text-lg tracking-tight">
              EasyClicks Driver
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-white/80">
            {["Home", "Products", "Support", "Solution"].map((item) => (
              <Link
                key={item}
                href="#"
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </header> */}

      {/* ===== HERO SECTION ===== */}
      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28 md:pb-36 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
            Update, Optimize, and{" "}
            <span className="text-sky-300 block">Protect Your Computer</span>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            EasyClicks Driver automatically updates and optimizes your computer’s
            drivers, keeping your system stable and performing at its best.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link
              href="#buy"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
            >
              Buy Now
            </Link>
            <Link
              href="#drivers"
              className="flex items-center gap-2 text-white hover:text-sky-200 transition text-lg"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </Link>
          </div>

          <div className="flex gap-6 pt-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <span className="text-green-400 text-lg">✓</span> Auto Driver Updates
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <span className="text-yellow-400 text-lg">⚡</span> Boost Performance
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <div className="relative w-[420px] md:w-[520px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/30 to-blue-700/30 rounded-full blur-3xl"></div>

            {/* <Image
              src="/heroimg.png"
              alt="Laptop"
              fill
              className="absolute top-0 left-10 rotate-3 drop-shadow-2xl animate-float z-30"
            /> */}
            <Image
              src="/heroimg.png"
              alt="Laptop"
              width={800}
                height={200}
              className=""
            />
            {/* <Image
              src="/tablet.png"
              alt="Tablet"
              width={350}
              height={350}
              className="absolute bottom-8 right-4 -rotate-6 drop-shadow-xl animate-float-slow z-20"
            />
            <Image
              src="/phone.png"
              alt="Phone"
              width={200}
              height={300}
              className="absolute bottom-44 left-1/3 rotate-12 drop-shadow-md animate-float-fast z-10"
            /> */}
          </div>
        </div>
      </div>

      {/* ===== DECORATIVE WAVE ===== */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
