import React, { useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";

export default function CreateProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveProject() {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: [],
    };

    onSave(data);
  }

  return (
    <section id="create-project" className="max-w-3xl flex-grow">
      <div className="flex justify-end items-center gap-4">
        <Button
          customClass="hover:bg-stone-950 hover:text-white bg-transparent"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          customClass="bg-stone-950 hover:bg-stone-800 text-white"
          onClick={handleSaveProject}
        >
          Save
        </Button>
      </div>
      <form action="" className="flex flex-col gap-4">
        <InputField label="title" type="text" ref={titleRef} />
        <InputField label="description" type="textarea" ref={descriptionRef} />
        <InputField label="due date" type="date" ref={dueDateRef} />
      </form>
    </section>
  );
}
