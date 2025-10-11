function WorkWithDevices() {
  return (
    <section id="solution" className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
  <div className="container py-20 md:px-20">
    
    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#04121d] leading-snug">
          Seamless Works for All Your Devices with{" "}
          <span className="text-sky-600">
            EasyConnect
          </span>
        </h2>
    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      EasyConnect helps keep your PC up to date with smart driver updates, performance optimization, and reliable system maintenance for a smoother experience.
    </p>

    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 md:px-0">
      {[
  {
    icon: '🌐',
    title: 'Smart Network',
    items: 'Reliable Ethernet cards, routers, hubs, and communication tools for seamless connectivity.'
  },
  {
    icon: '🖥️',
    title: 'Display & Monitor',
    items: 'High-quality LCDs, smart screens, and USB displays for clear and vibrant visuals.'
  },
  {
    icon: '🖨️',
    title: 'Printing & Scanning',
    items: 'Efficient printers, plotters, scanners, and 3D printing solutions for work and creativity.'
  },
  {
    icon: '⌨️',
    title: 'Input & Control',
    items: 'Keyboards, mice, joysticks, and gaming controllers designed for precision and comfort.'
  },
  {
    icon: '📶',
    title: 'Bluetooth',
    items: 'Adapters, wireless headsets, earbuds, and smart devices for easy wireless connections.'
  },
  {
    icon: '📡',
    title: 'Wi-Fi & Connectivity',
    items: 'Boosters, adapters, and mobile broadband tools for stronger, faster wireless performance.'
  },
  {
    icon: '🎥',
    title: 'Cameras & Webcams',
    items: 'Webcams, IP cameras, and security devices for streaming, monitoring, and clarity.'
  },
  {
    icon: '🎧',
    title: 'Audio & Sound',
    items: 'Sound cards, microphones, speakers, and headphones for premium sound quality.'
  }
]

.map(({ icon, title, items }) => (
        <div
          key={title}
          className="rounded-2xl border-2 border-gray-200 bg-white p-6 hover:shadow-xl hover:border-brand-600 transition-all duration-300 group"
        >
          <div className="text-4xl mb-4">{icon}</div>
          <div className="font-semibold text-lg text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
            {title}
          </div>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">{items}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )

}

export default WorkWithDevices;