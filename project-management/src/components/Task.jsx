import React, { forwardRef } from "react";
import Button from "./Button";

const Task = forwardRef(function Task({ tasks, onAddTask }, ref) {
  return (
    <>
      <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
      <div className="flex items-center mt-4 gap-2">
        <input
          ref={ref}
          type="text"
          className="h-8 flex-grow rounded-sm bg-stone-200 px-2 focus:outline-none"
        />
        <Button onClick={onAddTask} customClass="hover:bg-stone-200">
          Add Task
        </Button>
      </div>
      <ul className="flex flex-col gap-2 bg-stone-200 rounded p-4 mt-4 list-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi
        magnam consequatur quos mollitia suscipit ratione debitis nihil
        asperiores impedit, iusto, natus voluptatem quaerat ad? Velit eligendi
        nulla molestias iure.
      </ul>
    </>
  );
});

export default Task;
