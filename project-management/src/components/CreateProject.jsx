import React, { useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Modal from "./Modal";

export default function CreateProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSaveProject() {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: [],
    };

    if (
      data.title.trim() === "" ||
      data.description.trim() === "" ||
      data.dueDate.trim() === ""
    ) {
      /**
       * TODO: show invalid data modal
       */
      modalRef.current.open();
      return;
    }

    onSave(data);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="font-bold text-2xl my-4 text-stone-700">
          Invalid Input!
        </h2>
        <p className="text-stone-600 mb-4">
          Please provide valid input for all required field.
        </p>
      </Modal>
      <section id="create-project" className="max-w-3xl flex-grow pt-20">
        <menu>
          <ul className="flex justify-end items-center gap-4">
            <li>
              <Button
                customClass="hover:bg-stone-950 hover:text-white bg-transparent"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </li>
            <li>
              <Button
                customClass="bg-stone-950 hover:bg-stone-800 text-white"
                onClick={handleSaveProject}
              >
                Save
              </Button>
            </li>
          </ul>
        </menu>
        <form action="" className="flex flex-col gap-4">
          <InputField label="title" type="text" ref={titleRef} />
          <InputField
            label="description"
            isTextarea
            rows={4}
            ref={descriptionRef}
          />
          <InputField label="due date" type="date" ref={dueDateRef} />
        </form>
      </section>
    </>
  );
}
