import React from "react";
import Button from "./Button";

export default function CreateProject() {
  return (
    <section id="create-project" className="max-w-3xl flex-grow">
      <div className="flex justify-end items-center gap-4">
        <Button className="hover:bg-stone-950 hover:text-white bg-transparent transition px-4 py-2 rounded-lg">
          Cancel
        </Button>
        <Button className="transition px-4 py-2 rounded-lg bg-stone-950 hover:bg-stone-800 text-white">
          Save
        </Button>
      </div>
    </section>
  );
}
