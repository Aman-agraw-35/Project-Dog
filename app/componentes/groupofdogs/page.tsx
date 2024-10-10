import Image from 'next/image';

const GroupOfDogs = () => {
  return (
    <div className="relative w-[100vw] h-[1000px] left-[-23px] z-40 flex flex-col bg-custom-radial rotate-[-3.8deg] overflow-x-clip">
      {/* Inner Content Wrapper */}
      <div className="absolute flex flex-col z-[50] top-[-300px] items-center rotate-[3.8deg]">
        {/* Image */}
        <div className="relative w-full flex z-50 justify-center items-center">
          <Image
            src="/assets/group.png" // Use the uploaded image
            alt="Group of Dogs"
            width={1300} // Adjust width as needed
            height={1000} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Mission Text */}
        <div className="mt-8 text-center spa px-60">
          <p className="text-2xl font-bold text-black">
            Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community.
            Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
          </p>
        </div>

        {/* Roadmap Title */}
        <div className="mt-16 w-full px-60">
          <h1 className="text-[80px] text-left font-black text-white">
            ROAD MAP
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GroupOfDogs;
