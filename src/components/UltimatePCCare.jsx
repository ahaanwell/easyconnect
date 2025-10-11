"use client";
import { useEffect } from "react";

export default function UltimatePCCare() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="bg-[#04121d] py-20 md:px-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
          Ultimate PC Care {" "}
          <span className="text-sky-600">
            Everything Your Computer Needs: Safe Browsing, Updated Drivers, and Peak Performance
          </span>
        </h2>

        {/* ===== Cards Grid ===== */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm fade-card delay-200">
            <div className="text-5xl mb-4 bg-gradient-to-br from-sky-400 to-blue-600 text-transparent bg-clip-text">
              🔄
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Device Update Service
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Maximize performance and stability EasyConnect ensures your device always has the latest and most compatible drivers.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm fade-card delay-200">
            <div className="text-5xl mb-4 bg-gradient-to-br from-green-400 to-emerald-600 text-transparent bg-clip-text">
              🧹
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Optimize & Clean
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              EasyConnect enhances system speed and stability by cleaning clutter and optimizing performance in just a few clicks.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm fade-card delay-200">
            <div className="text-5xl mb-4 bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
              🛡️
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Browse Safely and Privately
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              PageBoost automatically blocks ads, trackers, and malicious content ensuring a safer, more private browsing experience.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-sky-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
