import React from "react";
import Button from "./Button";

export default function CreateProject() {
  return (
    <section id="create-project" className="w-xl">
      <div className="flex justify-end items-center gap-6">
        <Button className="hover:bg-slate-400 hover:text-white bg-transparent transition px-4 py-2 rounded-lg">
          Cancel
        </Button>
        <Button>Save</Button>
      </div>
    </section>
  );
}
