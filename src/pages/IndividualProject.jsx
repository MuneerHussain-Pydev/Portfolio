import React from "react";
import { FaGithub } from "react-icons/fa";

const IndividualProject = ({ projectID }) => {
  const projects = [
    {
      projectID: 1,
      title: "Training Management System",
      description:
        "A web-based platform designed to streamline employee training processes. It allows administrators to schedule and manage training sessions, track employee attendance, and collect structured feedback after each session to measure effectiveness and improve future trainings.",
      collaborators:
        "Eraj Tanweer, Tazeen Amir, Syed Ibad, Hashir Jamal, Nashwah Mohammad",

      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["NodeJS", "ExpressJS"],
        database: ["MySQL"],
      },
      gallery: [
        "/TMSImages/tms1.png",
        "/TMSImages/tms2.png",
        "/TMSImages/tms3.png",
        "/TMSImages/tms4.png",
      ],
      homeImage: "/TMSImages/tmsHome.png",
      completion: "October 2025",
      link: "https://github.com/SyedIbad123/QEC-Project-",
    },
    {
      projectID: 2,
      title: "ExoPlanetarium",
      description:
        "An interactive learning platform focused on the fascinating world of exoplanets. It features engaging space-themed blogs, a quiz module to test your knowledge, and an AI-powered chatbot that answers your astronomy questions in real-time — making space exploration both fun and educational.",
      collaborators:
        "Syed Ibad, Hashir Jamal, Shayan Zaheer, Muhammad Bilal, Arham Hasan",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["NodeJS", "ExpressJS"],
        database: ["MongoDB", "Firebase"],
      },
      gallery: [
        "/ExoImages/exo1.png",
        "/ExoImages/exo2.png",
        "/ExoImages/exo3.png",
        "/ExoImages/exo4.png",
      ],
      homeImage: "/ExoImages/exoHome.png",
      completion: "October 2024",
      link: "https://github.com/hashirjamal/ExoPlanetarium",
    },
    {
      projectID: 3,
      title: "MovieVerse",
      description:
        "A movie discovery platform that allows users to explore films across various genres, search for specific titles, and build a personalized WatchList. With a clean and intuitive interface, MovieVerse offers an enjoyable and organized way to keep track of your favorite movies.",
      collaborators: "Self-Project",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["TMDB API"],
        database: ["MongoDB"],
      },
      gallery: [
        "/MovieImages/movie1.png",
        "/MovieImages/movie2.png",
        "/MovieImages/movie3.png",
        "/MovieImages/movie4.png",
      ],
      homeImage: "/MovieImages/movieHome.png",
      completion: "September 2024",
      link: "https://github.com/MuneerHussain-Pydev/MovieVerse",
    },
    {
      projectID: 4,
      title: "Recipe Rescuer",
      description:
        "A recipe management application that helps users organize their favorite recipes, create shopping lists, and plan meals for the week. With a user-friendly interface, Recipe Rescuer makes cooking more enjoyable and less stressful.",
      collaborators: "Self-Project",
      techStack: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["Spoonacular API"],
        database: ["MongoDB"],
      },
      gallery: [
        "/RecipeImages/recipe1.png",
        "/RecipeImages/recipe2.png",
        "/RecipeImages/recipe3.png",
        "/RecipeImages/recipe4.png",
      ],
      homeImage: "/RecipeImages/recipeHome.png",
      completion: "September 2024",
      link: "",
    },
  ];
  const currentProject = projects.find(
    (project) => project.projectID == projectID
  );
  return (
    <div className="relative min-h-[80vh] px-12 py-15">
      {!currentProject ? (
      <h1 className="text-4xl md:text-5xl font-bold py-4 flex justify-center items-center mt-6">
        Project not found.
      </h1>
    ) : projectID == 4 ? (
      <h1 className="text-4xl md:text-5xl font-bold py-4 flex justify-center items-center mt-6">
        The Project is under development
      </h1>
    ) :(
        <>
          <div className="relative w-full h-120 shadow-lg mb-10">
            <img
              src={currentProject.homeImage}
              alt=""
              className="w-full h-full opacity-30 brightness-40 rounded-lg object-cover"
            />
            <h1 className="absolute bottom-3 px-4 left-0 text-4xl md:text-5xl font-bold py-4">
              {currentProject.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-2">
              <h2 className="text-red-600 text-lg md:text-2xl font-semibold">
                Description:{" "}
              </h2>
              <p className="text-slate-400 text-justify text-md md:text-md mb-4 leading-tight">
                {currentProject.description}
              </p>
              <div className="mt-6">
                <h2 className="text-red-600 text-lg md:text-2xl font-semibold mb-4">
                  {" "}
                  Project Images{" "}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentProject.gallery.map((image, index) => (
                    <div key={index} className="relative w-full h-72 shadow-lg">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-gray-900 rounded-lg p-4 bg-[#020202] shadow-lg max-h-[350px]">
              <h2 className="text-red-600 text-lg md:text-xl font-semibold">
                Collaborators:{" "}
              </h2>
              <p className="text-slate-400 text-justify text-md md:text-md mb-4 leading-tight">
                {currentProject.collaborators}
              </p>
              <h2 className="text-red-600 text-lg md:text-xl font-semibold">
                Completed:{" "}
              </h2>
              <p className="text-slate-400 text-justify text-md md:text-md mb-4 leading-tight">
                {currentProject.completion}
              </p>
              <div className="mb-4">
                <h2 className="text-red-600 text-lg md:text-xl font-semibold">
                  Tech Stack:{" "}
                </h2>
                <p className="text-slate-400 text-justify text-lg leading-tight font-medium">
                  Frontend:{" "}
                  <span className="text-sm text-white font-normal">
                    {currentProject.techStack.frontend.join(", ")}{" "}
                  </span>
                </p>
                <p className="text-slate-400 text-justify text-lg leading-tight font-medium">
                  Backend:{" "}
                  <span className="text-sm text-white font-normal">
                    {currentProject.techStack.backend.join(", ")}{" "}
                  </span>
                </p>
                <p className="text-slate-400 text-justify  leading-tight font-medium">
                  Database:{" "}
                  <span className="text-sm text-white font-normal">
                    {currentProject.techStack.database.join(", ")}{" "}
                  </span>
                </p>
              </div>
              <a
                href={currentProject.link}
                target="_blank"
                className=" flex justify-center items-center gap-4 hover:cursor-pointer bg-red-600 w-full text-center text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                View on Github <FaGithub fontSize={25} />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualProject;
