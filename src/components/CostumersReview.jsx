function CustomersReview() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="container mx-auto px-4 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#04121d] mb-6">
          What Our <span className="text-sky-600">Users Say</span>
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2.5M+</div>
            <div className="text-gray-600 text-sm">Downloads & Installations</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-gray-600 text-sm">Based on 15,000+ reviews</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-gray-600 text-sm">Active Users Worldwide</div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Michael Thompson',
              review:
                'EasyConnect made keeping my computer updated so much easier. I really like the simple interface.',
            },
            {
              name: 'Emily Johnson',
              review:
                'I’ve noticed smoother performance since installing EasyConnect. It helps me stay current with driver updates.',
            },
            {
              name: 'Davisan Kazon',
              review:
                'Great experience so far. The software quickly found and updated outdated drivers on my PC.',
            },
            {
              name: 'Sarah Wilson',
              review:
                'I appreciate how EasyConnect keeps everything organized. My computer feels more stable now.',
            },
            {
              name: 'James Anderson',
              review:
                'Updating drivers manually used to be confusing. EasyConnect handles it automatically and saves me time.',
            },
            {
              name: 'Ethan Davis',
              review:
                'I’ve been using EasyConnect for a few weeks and it’s been very reliable',
            },
            {
              name: 'William Harris',
              review:
                'The automatic driver updates are convenient. It’s nice to have one tool for all maintenance.',
            },
            {
              name: 'Sophia Clark',
              review:
                'EasyConnect has made it easier to keep my system running smoothly without any extra effort.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <span className="text-md font-semibold text-green-600 mr-2">
                    Trustpilot
                </span>
                <div className="flex text-green-500">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm italic mb-4">"{item.review}"</p>
              <div className="text-sm font-semibold text-gray-900">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomersReview;
