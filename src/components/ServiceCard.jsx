import React from "react";
import { TbApi } from "react-icons/tb";

const ServiceCard = ({title, description, icon}) => {
  return (
    <div className="bg-red-900 md:w-[23%] w-full h-48 md:h-56  rounded-lg border border-gray-800 flex flex-col items-center justify-center px-3 hover:scale-103 transition ease-in-out duration-300">
      {icon}
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-red-200 text-md text-center mt-2">
      {description}
      </p>
    </div>
  );
};

export default ServiceCard;
