import React from "react";

const ProjectCard = ({ image, name, description, link }) => {
  return (
    <div className="bg-[#020202] rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl border border-gray-900">
      <img src={image} alt={name} className="w-full h-72 object-cover hover:scale-103 transition duration-200 ease-in-out hover:cursor-pointer" />
      <div className="p-4 pt-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-slate-400 text-justify text-xs sm:text-md md:text-normal mb-4 leading-snug">{description}</p>
        <a
          href={link}
          className="inline-block bg-red-600 w-full text-center text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          View Details  
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
