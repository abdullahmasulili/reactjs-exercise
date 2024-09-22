import React from "react";
import Button from "./Button";
import NewTask from "./NewTask";

function Task({ tasks, onAdd, onDelete }) {
  const tasksList = (
    <ul className="flex flex-col gap-2 bg-stone-200 rounded p-4 mt-4 list-none">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center justify-between">
          <span>{task.name}</span>
          <Button
            customClass="hover:text-red-500"
            onClick={() => onDelete(task.id)}
          >
            Clear
          </Button>
        </li>
      ))}
    </ul>
  );
  const emptyTask = (
    <p className="mt-4">This project does not have any tasks yet.</p>
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length > 0 ? tasksList : emptyTask}
    </>
  );
}

export default Task;
