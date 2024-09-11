import React, { useRef } from "react";
import Button from "./Button";

export default function Project({ projectData, onTaskUpdate }) {
  const { title, description, dueDate, tasks } = projectData || {};
  const inputTaskRef = useRef();

  function formateDate(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function handleUpdateTask(actionType, index) {
    const updatedProject = { ...projectData };

    switch (actionType) {
      case "add":
        updatedProject.tasks.push(inputTaskRef.current.value);
        break;
      case "remove":
        updatedProject.tasks.splice(index, 1);
        break;
    }

    onTaskUpdate(updatedProject);
  }

  return (
    <section id="project" className="max-w-3xl flex-grow pt-20">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-stone-600">{title}</h1>
        <Button customClass="hover:bg-stone-700 hover:text-stone-100">
          Delete
        </Button>
      </div>
      <span className="text-stone-500">{formateDate(dueDate)}</span>
      <p className="text-stone-600 mt-4">{description}</p>
      <hr className="my-4 border-stone-500" />
      <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
      <div className="flex items-center mt-4 gap-2">
        <input
          ref={inputTaskRef}
          type="text"
          className="h-8 flex-grow rounded-sm bg-stone-200 px-2 focus:outline-none"
        />
        <Button
          onClick={() => handleUpdateTask("add")}
          customClass="hover:bg-stone-200"
        >
          Add Task
        </Button>
      </div>
      {tasks.length > 0 && (
        <ul className="flex flex-col gap-2 bg-stone-200 rounded p-4 mt-4 list-none">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{task}</span>
              <Button
                customClass="hover:text-red-500"
                onClick={() => handleUpdateTask("remove", index)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
