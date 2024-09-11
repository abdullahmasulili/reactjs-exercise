import React from "react";
import Button from "./Button";

export default function Project() {
  return (
    <section id="project" className="max-w-3xl flex-grow pt-20">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-stone-600">Lorem Ipsum</h1>
        <Button customClass="hover:bg-stone-700 hover:text-stone-100">
          Delete
        </Button>
      </div>
      <span className="text-stone-500">Sep 09, 2024</span>
      <p className="text-stone-600 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
        possimus. Commodi incidunt perspiciatis animi. Fugiat, quasi? Beatae
        accusantium eaque corrupti, eligendi aut sequi consectetur esse
        explicabo, neque, inventore libero. Omnis!
      </p>
    </section>
  );
}
