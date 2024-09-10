import React from "react";
import Button from "./Button";

export default function Sidebar({ projects }) {
  return (
    <aside className="w-80 bg-stone-950 p-8 pt-20 text-white h-full rounded-tr-3xl flex flex-col gap-8">
      <h1 className="text-3xl font-bold uppercase">Your Projects</h1>
      <Button className="rounded-lg bg-stone-700 px-4 py-2 hover:bg-stone-600 transition duration-200">
        + Add Project
      </Button>
      <nav className="list-none flex flex-col gap-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className="p-2 hover:bg-stone-700 transition duration-200 cursor-pointer"
            >
              {project.title}
            </li>
          );
        })}
      </nav>
    </aside>
  );
}
