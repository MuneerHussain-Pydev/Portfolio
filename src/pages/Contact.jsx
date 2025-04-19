import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div
      className="min-h-[80vh] flex flex-col justify-center items-center w-full py-16"
      id="services"
    >
      <h1 className="text-4xl md:text-6xl font-bold">Let's Connect </h1>
      <p className="text-red-200 mt-6 text-lg text-center">
        Have a project in mind or just want to say hello? I’m always open to new
        opportunities and conversations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-20 mt-8 w-full justify-center ">
        <div className="w-full">
          <div className="flex gap-2 mb-4 items-start">
            <FaLocationDot className="text-red-600 text-xl mt-1" />
            <div>
              <h2 className="font-semibold lg:text-2xl text-xl ">Location</h2>
              <p className="text-red-300 text-md lg:text-lg">
                Karachi, Pakistan
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-4 items-start">
            <MdEmail className="text-red-600 text-xl mt-1" />
            <div>
              <h2 className="font-semibold text-xl lg:text-2xl ">Email</h2>
              <p className="text-red-300 lg:text-lg text-md">
                muneermh41004@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-1 items-start">
            <FaPhoneAlt className="text-red-600 text-xl mt-1" />
            <div>
              <h2 className="font-semibold text-xl lg:text-2xl ">Phone</h2>
              <p className="text-red-300 lg:text-lg text-md">+92 34322 48287</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
