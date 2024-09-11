import React from "react";
import Button from "./Button";

export default function Project({ projectData }) {
  const { title, description, dueDate } = projectData || {};

  function formateDate(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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
    </section>
  );
}
