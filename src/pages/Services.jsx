import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { TbApi } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import { FaGears } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      title: "REST API Development",
      description:
        "Efficient APIs to connect your app’s frontend and backend seamlessly.",
      icon: <TbApi className="text-5xl text-red-600" />,
    },
    {
      title: "Responsive UI Design",
      description:
        "Building responsive and user-friendly interfaces with React.",
      icon: <CgScreen className="text-5xl text-red-600" />,
    },
    {
      title: "Power BI Dashboards",
      description:
        "Transforming raw data into clear, interactive dashboards for smarter decision-making.",
      icon: <VscGraph className="text-5xl text-red-600" />,
    },
    {
      title: "Management Systems",
      description:
        "Creating custom management systems tailored to your business needs.",
      icon: <FaGears className="text-5xl text-red-600" />,
    }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center w-full py-16" id="services">
      <h1 className="text-4xl md:text-6xl font-bold">SERVICES</h1>
      <p className="mt-4 md:w-[50%] w-full px-12 md:px-0 my-10 text-red-200 text-lg text-center">
        I offer a range of services to help businesses and individuals establish
        a strong online presence and achieve their digital goals.
      </p>
      <div className="mx-8 md:flex-row flex flex-col gap-4 w-[95%] justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
