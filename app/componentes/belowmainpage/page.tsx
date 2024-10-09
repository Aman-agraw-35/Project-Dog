"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

const BelowMainPage = () => {
  const photos = ['/assets/a.png', '/assets/b.png', '/assets/c.png'];
  const videos = ['/assets/d.png', '/assets/e.png'];
  const [activeTab, setActiveTab] = useState('all'); // To track the active tab (ALL/PHOTOS/VIDEOS)
  const carouselRef = useRef<HTMLDivElement>(null); // Ref to track the carousel
  const [isDragging, setIsDragging] = useState(false); // Track if the user is dragging
  const [startX, setStartX] = useState(0); // Track the initial mouse down position
  const [scrollLeft, setScrollLeft] = useState(0); // Track the initial scroll position

  // Combine all the data based on the selected tab
  const getVisibleItems = () => {
    if (activeTab === 'photos') return photos;
    if (activeTab === 'videos') return videos;
    return [...photos, ...videos]; // When 'all' is selected
  };

  const visibleItems = getVisibleItems();

  // Handle mouse down event (start dragging)
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  // Handle mouse move event (while dragging)
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const x = event.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // The multiplier controls the scroll speed
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle mouse up event (end dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse leave event (end dragging if mouse leaves the container)
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Scroll left by one card width (300px)
  const scrollLeftByOneCard = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right by one card width (300px)
  const scrollRightByOneCard = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full h-[724.95px] top-[-100px] z-[1] left-[-25px] bg-white rotate-[3.8deg] overflow-hidden overflow-x-clip">
      {/* Inner Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center pt-24  rotate-[-3.8deg] px-16">
        
        {/* Tab Section */}
        <div className="w-full flex justify-center z-[4] overflow-hidden">
          <div className="flex space-x-4">
            <button
              className={`text-lg font-black ${activeTab === 'all' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => setActiveTab('all')}
            >
              ALL
            </button>
            <button
              className={`text-lg font-black ${activeTab === 'photos' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => setActiveTab('photos')}
            >
              PHOTOS
            </button>
            <button
              className={`text-lg font-black ${activeTab === 'videos' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => setActiveTab('videos')}
            >
              VIDEOS
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex justify-center items-center gap-6 mt-4">
          {/* Previous Button */}
          <button
            className="bg-gray-800 w-[50px] h-[50px] rounded-xl flex justify-center items-center text-white hover:bg-gray-700"
            onClick={scrollLeftByOneCard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-6 w-[60vw] pt-4 overflow-x-auto scrollbar-hide cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: 'smooth' }}
          >
            {visibleItems.map((item, index) => (
              <div key={index} className="w-[300px] h-[150px] overflow-hidden bg-gray-300 rounded-lg flex justify-center items-center">
                <Image src={item} alt={`Item ${index}`} width={200} height={150} />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="bg-gray-800 w-[50px] h-[50px] rounded-xl flex justify-center items-center text-white hover:bg-gray-700"
            onClick={scrollRightByOneCard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Vision Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center rotate-[-3.9deg] mt-16">
        <h1 className="text-[80px] font-extrabold text-orange-500">PROJECT VISION</h1>
      </div>
    </div>
  );
};

export default BelowMainPage;
