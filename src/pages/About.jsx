import React from "react";
import { RiContactsLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-red-900 py-12" id="about">
      <h1 className="md:text-6xl font-bold text-4xl">ABOUT MYSELF</h1>
      <div className="md:w-[60%] w-full px-12 md:px-0 my-10 text-red-200 text-lg text-center">
        <p>
          I’m a passionate Software Engineer with over 2 years of experience
          building dynamic and high-performance web applications using the MERN
          stack — MongoDB, Express.js, React, and Node.js.From developing
          intuitive, responsive frontends to designing efficient backend
          architectures, I’m confident working across the full stack. My
          strength lies in translating ideas into smooth, functional web
          experiences — whether it’s building interactive dashboards, developing
          RESTful APIs, or managing databases.
        </p>
        <br />
        <p>
          I’m comfortable working independently or as part of a team, and I
          always aim to write clean, maintainable code. I'm always looking to grow as a developer and take on meaningful
          projects that push the boundaries of what the web can do.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition hover:cursor-pointer ease-in-out">
        CONTACT ME <RiContactsLine />
      </button>
    </div>
  );
};

export default About;
