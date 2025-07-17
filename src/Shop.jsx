import React from 'react'

const Shop = () => {
  return (
    <div>
   <section className="flex flex-col bg-gradient-to-l from-gray-500 to white gap-10 mx-5 md:mx-20 rounded-lg py-5 my-10">
        <ul className="flex flex-wrap gap-5 mx-5 md:mx-10 text-xl md:text-2xl font-semibold py-5 ">
          <li>Online store</li>
        </ul>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-5">
          {[
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
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-lg shadow-md  items-center  flex flex-col justify-center cursor-pointer"
              >   
              <img
                src={item.src}
                alt={item.alt}
           
                className="object-cover w-full h-60 rounded-md transition-transform duration-300 hover:scale-105"
              />
              <p className='font-semibold '>Price: {item.price}</p>
              </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Shop
