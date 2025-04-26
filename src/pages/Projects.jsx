import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Training Management System",
      description: "A web-based platform designed to streamline employee training processes. It allows administrators to schedule and manage training sessions, track employee attendance, and collect structured feedback after each session to measure effectiveness and improve future trainings.",
      image: "/TMSImages/tmsHome.png",
      link: `/projects/1`,
    },
    {
      id: 2,
      name: "ExoPlanetarium",
      description: "An interactive learning platform focused on the fascinating world of exoplanets. It features engaging space-themed blogs, a quiz module to test your knowledge, and an AI-powered chatbot that answers your astronomy questions in real-time — making space exploration both fun and educational.",
      image: "/ExoImages/exoHome.png",
      link: "/projects/2",
    },
    {
    id: 3,
    name: "MovieVerse",
    description: "A movie discovery platform that allows users to explore films across various genres, search for specific titles, and build a personalized WatchList. With a clean and intuitive interface, MovieVerse offers an enjoyable and organized way to keep track of your favorite movies.",    
    image: "/MovieImages/movieHome.png",
    link: "/projects/3",
    },{
        id: 4,
        name: "Recipe Rescuer",
        description: "A recipe management application that helps users organize their favorite recipes, create shopping lists, and plan meals for the week. With a user-friendly interface, Recipe Rescuer makes cooking more enjoyable and less stressful.",
        image: "/RecipeImages/recipeHome.png",
        link: "/projects/4",
    }
  ];
  return (
    <div
      className="min-h-[80vh] flex flex-col justify-center items-center bg-red-900 w-full py-16"
      id="projects"
    >
      <h1 className="text-4xl md:text-6xl font-bold">WHAT I'VE BUILT</h1>
      <p className="text-red-200 mt-6 text-lg">Explore a collection of my recent projects, blending functionality with clean design.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-16 mt-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            name={project.name}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
