function WorkWithDevices() {
  return (
    <section id="solution" className="bg-gradient-to-b from-white via-sky-50 to-sky-100">
  <div className="container py-20 md:px-20">
    
    <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#04121d] leading-snug">
          Seamless Support for All Your Devices with{" "}
          <span className="text-sky-600">
            EasyConnect
          </span>
        </h2>
    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      Compatible with everything from common consumer devices to high-end professional hardware.
    </p>

    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 md:px-0">
      {[
  { icon: '🌐', title: 'Network Adapters', items: 'Ethernet cards, routers, hubs, communication devices, port expanders, and more.' },
  { icon: '🖥️', title: 'Monitor', items: 'LCD screens, smart TVs, USB-connected displays, and various visual output devices.' },
  { icon: '🖨️', title: 'Printer', items: 'Printers, plotters, scanners, copiers, and 3D printing devices.' },
  { icon: '⌨️', title: 'Input Device', items: 'Keyboards, mice, joysticks, trackpads, gaming controllers, and others.' },
  { icon: '📶', title: 'Bluetooth Device', items: 'Adapters, wireless headsets, earbuds, speakers, and connected smart gadgets.' },
  { icon: '📡', title: 'Wi-Fi Device', items: 'Wireless adapters, signal boosters, mobile broadband devices, and related hardware.' },
  { icon: '🎥', title: 'Webcam', items: 'IP cameras, action cameras, security cameras, baby monitors, and more.' },
  { icon: '🎧', title: 'Sound Card', items: 'Audio interfaces, amplifiers, microphones, speakers, and headphones.' }
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