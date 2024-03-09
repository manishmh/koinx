import Image from "next/image";

const CarouselCard = ({
  heading,
  paragraph,
  img,
  bgColor,
  translateX, 
}: {
  heading: string;
  paragraph: string;
  img: string;
  bgColor: string;
  translateX: string; 
}) => {
  return (
    <div
      className={`${bgColor} bg-opacity-20 rounded-xl max-w-xs sm:max-w-md md:max-w-lg flex gap-2 px-4 py-6 flex-shrink-0 transition-all duration-500`}
      style={{ transform: translateX }} 
    >
      <div className={`rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 p-1 ${bgColor}`}>
        <Image
          src={img}
          alt={`carousel-card-image-${img}`}
          width={30}
          height={30}
          className="w-auto h-auto"
        />
      </div>
      <div className="">
        <h1 className="font-medium text-gray-700 leading-5 ">{heading}</h1>
        <p className="text-sm text-gray-700 mt-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
