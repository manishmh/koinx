import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
  return (
    <div className="bg-[#0052FE] text-white rounded-xl py-4 pb-8 md:py-8 px-4 md:px-6 max-w-sm flex flex-col items-center text-center justify-center">
      <div className="flex justify-center items-center flex-col-reverse md:flex-col">
        <div className="flex-col-reverse md:flex-col">
          <h1 className="font-semibold md:text-lg">
            Get Started with KoinX <br className="hidden md:block" /> for FREE
          </h1>
          <h2 className="text-xs mt-2 md:mt-4 md:w-11/12 mx-auto">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of tax reports.
          </h2>
        </div>
        <Image
          src="/get-started.png"
          alt="get-started-component-picture"
          width={170}
          height={170}
          className="bg-blend-screen my-4 w-24 md:w-40"
        />
      </div>
      <button className="bg-white py-2 px-4 md:px-6 rounded-lg flex gap-2 items-center group font-semibold text-[#2F3545] mt-2 text-xs md:text-base">
        Get started for FREE{" "}
        <FaArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 " />
      </button>
    </div>
  );
};

export default GetStarted;
