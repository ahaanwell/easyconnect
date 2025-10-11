"use client";
function Talk() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };
  return (
    <section id="talk" className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="container py-16 md:py-20">
        <div className="flex gap-8 justify-center items-center">
          <div className="flex flex-col max-w-2xl text-center justify-center items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#04121d]">
              Need help? {" "}
              <span className="text-sky-600">
            Talk to our team today!
          </span>
            </h2>
            <p className="mt-4 text-gray-700">
              Our dedicated team is here to assist with any questions or concerns you may have. We’re committed to providing prompt, helpful responses to ensure your complete satisfaction.
            </p>
            <button
              onClick={openChat}
              className="mt-6 inline-block bg-[#04121d] cursor-pointer text-white px-5 py-3 rounded-md hover:bg-brand-700"
            >
              Get Started
            </button>
          </div>
          {/* <div className="rounded-xl border bg-white p-6">
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-gray-700">
              Email: support@easyclicksdriver.com
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Talk;
