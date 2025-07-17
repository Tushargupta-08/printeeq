import React from "react";
const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center mt-9 px-5 md:px-10 bg-gradient-to-br from-white via-white to-black">

        <div className="mr-20">
          <h1 className="text-4xl"> FIND CLOTHES THAT MATCH YOUR STYLE</h1>
          <h2 className="text-2xl">
            Wear your art — bold, custom-printed dresses designed to express
            your unique style.
          </h2>
          <button
            type="button"
            className="bg-black text-white px-5 py-2 my-10  hover:bg-zinc-800 transition cursor-pointer"
          >
            Shop Now
          </button>
        </div>
        <div className="mr-5 mb-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[400px] h-auto rounded-full "
          >
            <source src="https://evermock.com/cdn/shop/videos/c/vp/c013ff9539a34ab2bf4878606ef7e77d/c013ff9539a34ab2bf4878606ef7e77d.HD-720p-1.6Mbps-30325408.mp4?v=0" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-10 bg-gradient-to-l from-current to-via-black  ">
        <h2 className="flex justify-self-start text-2xl font-semibold ">
        
          Shoping by categories
        </h2>

        <ul className="flex justify-evenly mb-10 mt-10">
          <li className="flex flex-col align-middle items-center gap-5 cursor-pointer">
            <img
              className="rounded-full w-25 h-25 border-2 object-cover"
              src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic4-6BCCDrmH.png"
              alt=""
            />

            <p className="text-lg">T-shirt</p>
          </li>
          <li className="flex flex-col align-middle items-center gap-5 cursor-pointer">
            <img
              className="rounded-full w-25 h-25 border-2 object-cover"
              src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic2-B3KCBeZy.png"
              alt=""
            />

            <p className="text-lg">T-shirt</p>
          </li>
          <li className="flex flex-col align-middle items-center gap-5 cursor-pointer">
            <img
              className="rounded-full w-25 h-25 border-2 object-cover"
              src="https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic5-BFk0JHDP.png"
              alt=""
            />

            <p className="text-lg">T-shirt</p>
          </li>
          <li className="flex flex-col align-middle items-center gap-5 cursor-pointer">
            <img
              className="rounded-full w-25 h-25 border-2 object-cover"
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <p className="text-lg">T-shirt</p>
          </li>
        </ul>
      </div>
      <section className="flex flex-col bg-gradient-to-r from-gray-500 to via-black  gap-10 mx-5 md:mx-20 rounded-lg py-5 my-10">
        <ul className="flex flex-wrap gap-5 mx-5 md:mx-10 text-xl md:text-2xl font-semibold py-5 text-white">
          <li>Mens Section</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-5">
          {[
            {
              src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
              alt: "Black blank t-shirt",
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
              alt: "Premium t-shirt",
            },
            {
              src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
              alt: "Folded t-shirt",
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
              alt: "T-shirt hanging",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-60 rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col bg-gradient-to-l from-gray-500 to white gap-10 mx-5 md:mx-20 rounded-lg py-5 my-10">
        <ul className="flex flex-wrap gap-5 mx-5 md:mx-10 text-xl md:text-2xl font-semibold py-5 ">
          <li>Women Section</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-5">
          {[
            {
              src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
              alt: "Black blank t-shirt",
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
              alt: "Premium t-shirt",
            },
            {
              src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
              alt: "Folded t-shirt",
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
              alt: "T-shirt hanging",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-60 rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-lg mx-20 my-12 bg-gradient-to-l from bg-gray-300 to white py-20 px-10 md:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          How to design and order custom T-shirts
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                1
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-800">
                Choose from 412 custom products in our catalog
              </p>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-800">
                Customize your design with graphics, text or your own uploaded
                images.
              </p>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-800">
                Get your order sent to your door with free standard shipping.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1564864310852-e1e98eb07010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D"
              alt="T-shirt Design"
              className="w-full rounded-2xl shadow-lg"
            />

            <div className="absolute top-10 right-[-40px] flex flex-col bg-green-500 rounded-xl p-2 gap-3 shadow-lg">
              <div className="bg-white p-2 rounded-md text-green-500 font-bold text-xl">
                ↻
              </div>
              <div className="bg-white p-2 rounded-md">🎨</div>
              <div className="bg-white p-2 rounded-md">T</div>
              <div className="bg-white p-2 rounded-md">🖼️</div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-20 py-20 bg-white relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          What People Are Saying
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We provide support for more than 15K+ Businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center mb-4 gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1682124749533-4e67cca53ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dean D."
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Dean D.</h4>
                <span className="text-sm text-gray-500">Director</span>
              </div>
            </div>
            <p className="text-gray-600">
              “ Great quality products – Flags, programs for exceptional
              capacities, birthday, and occasion welcome are largely still
              mainstream on paper. ”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center mb-4 gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1682124749533-4e67cca53ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Cristian L."
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Cristian L.</h4>
                <span className="text-sm text-gray-500">Manager</span>
              </div>
            </div>
            <p className="text-gray-600">
              “ Best services ever – Flags, programs for exceptional capacities,
              birthday, and are largely still mainstream on paper occasion
              welcome. ”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center mb-4 gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1682124749533-4e67cca53ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Leonel R."
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Leonel R.</h4>
                <span className="text-sm text-gray-500">Designer</span>
              </div>
            </div>
            <p className="text-gray-600">
              “ Top notch support – Flags, programs for birthday, and occasion
              welcome are largely still mainstream on paper exceptional
              capacities. ”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
