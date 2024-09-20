import React, { useState } from "react";
import Button from "./Button";

export default function Sidebar({
  projects,
  onInitiateNewProject,
  onProjectClick,
  activeProject,
}) {
  function handleProjectClick(project) {
    onProjectClick(project);
  }

  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 p-8 pt-20 text-stone-50 h-full rounded-tr-3xl flex flex-col gap-8">
      <h1 className="md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h1>
      <Button
        onClick={onInitiateNewProject}
        customClass="bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-100"
      >
        + Add Project
      </Button>
      <nav className="list-none flex flex-col gap-1">
        {projects.map((project, index) => {
          return (
            <li
              onClick={() => handleProjectClick(project)}
              key={index}
              className={`p-2 hover:bg-stone-700 transition duration-200 rounded cursor-pointer ${
                activeProject?.title === project.title && "bg-stone-700"
              }`}
            >
              {project.title}
            </li>
          );
        })}
      </nav>
    </aside>
  );
}
