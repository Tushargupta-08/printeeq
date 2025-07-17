import React from "react";
import { Link, useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();
  
    const handleRedirect4 = () => navigate("/Shop");
  return (
    <>

      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center mt-9 px-4 md:px-10 bg-gradient-to-br from-white via-white to-black">
        <div className="md:mr-20 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mt-3 text-gray-700">
            Wear your art — bold, custom-printed dresses designed to express your unique style.
          </h2>
          <button
          onClick={handleRedirect4}
            type="button"
            className="cursor-pointer bg-black text-white px-6 py-3 mt-6 hover:bg-zinc-800 transition w-full sm:w-auto rounded "
          >
            Shop Now
          </button>
        </div>
        <div className="mb-6 md:mb-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-xs sm:max-w-md md:w-[400px] h-auto rounded-full"
          >
            <source
              src="https://evermock.com/cdn/shop/videos/c/vp/c013ff9539a34ab2bf4878606ef7e77d/c013ff9539a34ab2bf4878606ef7e77d.HD-720p-1.6Mbps-30325408.mp4?v=0"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    
      <div className="mt-10 bg-gradient-to-l from-white to-black px-4 py-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Shopping by Categories</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          {[
            "https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic4-6BCCDrmH.png",
            "https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic2-B3KCBeZy.png",
            "https://deeptiop.github.io/web-app-clothes-printing-MERN-Stack/assets/pic5-BFk0JHDP.png",
            "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60"
          ].map((src, i) => (
            <li key={i} className="flex flex-col items-center gap-3">
              <img
                src={src}
                alt={`Category ${i}`}
                className="w-24 h-24 rounded-full border object-cover"
              />
              <p className="text-lg text-white">T-shirt</p>
            </li>
          ))}
        </ul>
      </div>

  
      <section className="bg-gradient-to-r from-gray-500 to-black text-white gap-10 mx-4 sm:mx-10 md:mx-20 rounded-lg py-8 my-10">
        <h2 className="text-xl sm:text-2xl font-semibold px-4">Men Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-10">
          {[
            "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
            "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
            "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192"
          ].map((src, i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow flex justify-center">
              <img
                src={src}
                alt={`Men ${i}`}
                className="object-cover w-full h-48 rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

    
      <section className="bg-gradient-to-l from-gray-500 to-white gap-10 mx-4 sm:mx-10 md:mx-20 rounded-lg py-8 my-10">
        <h2 className="text-xl sm:text-2xl font-semibold px-4">Women Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-10">
          {[
            "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
            "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
            "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192"
          ].map((src, i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow flex justify-center">
              <img
                src={src}
                alt={`Women ${i}`}
                className="object-cover w-full h-48 rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

 
      <section className="rounded-lg mx-4 sm:mx-10 md:mx-20 bg-gradient-to-l from-gray-300 to-white py-10 px-4 sm:px-10 md:px-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10">
          How to design and order custom T-shirts
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-8 w-full">
            {["Choose from 412 custom products in our catalog",
              "Customize your design with graphics, text or your own uploaded images.",
              "Get your order sent to your door with free standard shipping."].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex justify-center items-center font-bold">
                  {i + 1}
                </div>
                <p className="text-base sm:text-lg text-gray-800">{step}</p>
              </div>
            ))}
          </div>
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1564864310852-e1e98eb07010"
              className="w-full rounded-2xl shadow-lg"
              alt="T-shirt design"
            />
            <div className="absolute top-10 -right-8 bg-green-500 p-2 rounded-xl flex flex-col gap-2 shadow-lg">
              {["↻", "🎨", "T", "🖼️"].map((icon, i) => (
                <div key={i} className="bg-white text-green-500 p-2 rounded-md text-xl font-bold text-center">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 
      <section className="px-4 sm:px-10 md:px-20 py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3">What People Are Saying</h2>
        <p className="text-center text-gray-500 mb-10">We provide support for more than 15K+ Businesses.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dean D.", role: "Director" },
            { name: "Cristian L.", role: "Manager" },
            { name: "Leonel R.", role: "Designer" }
          ].map((user, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow border">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682124749533-4e67cca53ff0"
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <p className="text-gray-600">
                “ Great quality products – Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper. ”
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
