import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" md:flex  min-h-[80vh] py-20 justify-between items-center px-12" id="home">
      <div className="flex flex-col w-full md:w-1/2 md:px-14 px-0 sm:px-4">
        <h1 className="text-5xl font-semibold">HI THERE, I AM</h1>
        <h1 className="text-6xl font-bold text-red-700">MUNEER HUSSAIN</h1>
        <span className="text-slate-500 text-2xl">SOFTWARE ENGINEER</span>
        <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 bg-red-700 text-white py-3 px-6 rounded-md hover:bg-red-600 transition hover:cursor-pointer ease-in-out">
                BOOK A CALL <FaArrowRight/>
            </button>
            <a href="https://www.linkedin.com/in/muneer-hussain123/" target="_blank" className="flex items-center gap-2 border border-red-600 bg-transparent text-red-600 py-3 px-6 rounded-md hover:bg-red-700 hover:text-white transition hover:cursor-pointer ease-in-out">
                My Linkedein 
                <FaLinkedinIn  size={20}/>
            </a>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] bg-[url('/blob.png')] bg-cover bg-center rounded-full shadow-lg">
          <Image src={"/pfp.png"} alt="devImage" fill className="absolute top-5 left-5 bg-image-clip"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
