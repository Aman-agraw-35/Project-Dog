import Image from 'next/image';

const MainPage = () => {
  return (
    <div className="relative w-full h-[824.95px]  rounded-[40px] bg-custom-radial overflow-hidden  ">
      {/* Inner Content Wrapper */}
      <div className="absolute inset-0 flex items-center justify-between pt-24   ">
        {/* Dog Image */}
        <div className="flex-shrink-0 z-20">
  <Image
    src="/dog1.png"
    alt="Alabay Dog"
    layout="responsive" // Use this for responsive behavior
    width={600}
    height={600}
    className="max-w-full h-auto" // Ensure responsiveness
  />
</div>

        {/* Text Section */}
        <div className="text-right">
          <h1 className="text-6xl font-bold text-orange-600">History Of</h1>
          <h2 className="text-[80px] font-extrabold text-white mt-4">ALABAY</h2>
          <p className="text-lg text-black font-bold mt-4 max-w-[400px]">
            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for
            centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </p>
        </div>
      </div>


    </div>
  );
};

export default MainPage;
