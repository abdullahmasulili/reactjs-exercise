import React from "react";
import Button from "./Button";
import Task from "./Task";

export default function Project({
  projectData,
  tasks,
  onAddTask,
  onDeleteTask,
  onDeleteProject,
}) {
  const { title, description, dueDate } = projectData || {};
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section id="project" className="max-w-3xl flex-grow pt-20">
      <header>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-stone-600">{title}</h1>
          <Button
            onClick={onDeleteProject}
            customClass="hover:bg-red-700 hover:text-stone-50"
          >
            Delete
          </Button>
        </div>
        <span className="text-stone-500">{formattedDate}</span>
        <p className="text-stone-600 mt-4 whitespace-pre-wrap">{description}</p>
      </header>
      <hr className="my-4 border-stone-500" />
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </section>
  );
}
