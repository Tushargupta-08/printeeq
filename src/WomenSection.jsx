import React from 'react';

const WomenSection = () => {
  const data = [
    {
      src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
      alt: "Black blank t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Premium t-shirt",
      price: "1000"
    },
    {
      src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Folded t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      alt: "T-shirt hanging",
      price: "1000"
    },
  
    {
      src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
      alt: "Black blank t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Premium t-shirt",
      price: "1000"
    },
    {
      src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Folded t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      alt: "T-shirt hanging",
      price: "1000"
    }
  ];

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-12 bg-gradient-to-tr from-black via-gray-100 to-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-black">
        Women's Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center p-3 sm:p-4">
              <img
                src={item.src}
                alt={item.alt}
                className="h-48 sm:h-56 w-full object-cover rounded-xl mb-3 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-base sm:text-lg font-semibold text-gray-800">
                Price: ₹{item.price}
              </p>
              <button className="mt-2 sm:mt-3 bg-black text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenSection;
