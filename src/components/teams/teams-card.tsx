import Image from "next/image";

const TeamsCard = ({
  memberName,
  src,
  designation,
  about,
}: {
  memberName: string;
  src: string;
  designation: string;
  about: string;
}) => {
  return (
    <div className="py-6 md:py-2 px-4 bg-blue-50 rounded-md flex gap-8 flex-col sm:flex-row">
      <div className="flex-shrink-0 flex flex-col items-center">
        <Image
          src={src}
          alt={`team-member-image-${memberName}`}
          width={120}
          height={140}
          className="rounded-md w-auto h-auto"
        />
        <h1 className="text-center font-semibold mt-2">{ memberName }</h1>
        <h2 className="text-center text-gray-500 text-xs">{ designation }</h2>
      </div>
      <div className="flex items-center text-gray-700">
        { about }
      </div>
    </div>
  );
};

export default TeamsCard;
