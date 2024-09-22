import React, { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  function handleOnChangeInput({ target }) {
    setInputValue(target.value);
  }

  function handleOnAddTask() {
    if (inputValue.trim() === "") {
      return;
    }

    onAdd(inputValue);
    setInputValue("");
  }

  return (
    <div className="flex items-center mt-4 gap-2">
      <input
        value={inputValue}
        onChange={handleOnChangeInput}
        type="text"
        className="h-8 flex-grow rounded-sm bg-stone-200 px-2 focus:outline-none"
      />
      <Button onClick={handleOnAddTask} customClass="hover:bg-stone-200">
        Add Task
      </Button>
    </div>
  );
}
