"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Games = () => {
  const images = [
    { src: '/assets/games/lost.png', alt: 'Wolf and Dog Image 1' },
    { src: '/assets/games/gaurd.png', alt: 'Wolf and Dog Image 2' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-[100vw] h-[1200px] left-[-35px]  flex flex-col rotate-[-3.8deg] overflow-x-clip bg-custom-radial">
      <div className="absolute flex flex-col  items-center rotate-[3.8deg] left-[-35px] w-full mt-80">
        <h1 className="text-[5rem] font-black text-white">GAMES</h1>
        <p className="text-xl mb-8  font-black">Stay tuned for upcoming games!</p>

      <div className="relative w-[80vw] border-4 rounded-xl border-white  h-[500px] z-50 mt-[50px] mx-auto">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-4 items-center left-[42%]">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700">
            DISCOVER
          </button>
        </div>

        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg ml-2"
        >
          ❮
        </button>

        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-lg mr-2 "
        >
          ❯
        </button>
      </div>
      </div>
    </div>
  );
};

export default Games;
