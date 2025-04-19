"use client";
import React, { useRef } from "react";
// import {nodemailer} from "nodemailer";

const ContactForm = () => {
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);
  const handleSubmit = async (e) => {

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderEmail: email.current.value,
        receiverEmail: "muneermh41004@gmail.com",
        name: name.current.value,
        subject: subject.current.value,
        message: message.current.value,
      }),
    });

    const result = await res.json();
    console.log(result);
  };
  return (
    <form action={e=>handleSubmit(e)} className="w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="sm:flex-row flex-col flex  gap-2 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-md bg-[#020202] border border-gray-900 text-white w-full md-w-1/2"
            ref={name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-md bg-[#020202] border border-gray-900 text-white w-full md-w-1/2"
            ref={email}
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-2 rounded-md bg-[#020202] border border-gray-900 text-white"
          ref={subject}
        />
        <textarea
          rows={8}
          placeholder="Your Message"
          className="p-2 rounded-md bg-[#020202] border border-gray-900 text-white resize-none"
          ref={message}
        ></textarea>
        <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
