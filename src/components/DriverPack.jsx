import Link from "next/link";

function DriverPack() {
  const brands = [
    "/acer.webp",
    "/dell.webp",
    "/packard-bell.webp",
    "/lenovo.webp",
    "/asus.webp",
    "/msi.webp",
    "/toshiba.webp",
    "/samsung.webp",
    "/toshiba.webp",
    "/sony.webp",
  ];

  return (
    <section className="bg-[#04121d] py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 px-4 md:px-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white leading-snug">
          DriverPack{" "}
          <span className="text-sky-600">
            is compatible with all types of computers.
          </span>
        </h2>
          <p className="mt-4 text-white">
            EasyConnect works with any computer, automatically identifying and installing the latest drivers to ensure optimal performance.
          </p>
          <div className="mt-4 text-white">
            Works seamlessly with <span className="font-semibold">Windows 10, 8, 7</span> and <span className="font-semibold">Mac OS</span>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {brands.map((brand, index) => (
              <Link key={index} href="#" className="hover:scale-105 transition-transform bg-white p-4 rounded-lg shadow-md w-full flex items-center justify-center">
                <img src={brand} alt={`Brand ${index + 1}`} className="h-16 md:h-20 object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DriverPack;
