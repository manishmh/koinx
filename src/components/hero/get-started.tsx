import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
  return (
    <div className="bg-[#0052FE] text-white rounded-xl py-8 px-6 max-w-sm flex flex-col items-center text-center">
        <h1 className="font-semibold text-lg">Get Started with KoinX <br /> for FREE</h1>
        <h2 className="text-xs mt-4">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of tax reports.</h2>
        <Image 
            src="/get-started.png" 
            alt="get-started-component-picture"
            width={170}
            height={170}
            className="bg-blend-screen my-4"
        />
        <button className="bg-white py-2 px-6 rounded-lg flex gap-2 items-center group font-semibold text-[#2F3545] mt-2">Get started for FREE <FaArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 "/></button>
    </div>
  )
}

export default GetStarted