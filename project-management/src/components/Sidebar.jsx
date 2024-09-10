import React from "react";
import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-stone-950 p-8 pt-20 text-white h-full rounded-tr-3xl flex flex-col gap-8">
      <h1 className="text-3xl font-bold uppercase">Your Projects</h1>
      <Button className="rounded-lg bg-stone-700 px-4 py-2 hover:bg-stone-600 transition duration-200">
        + Add Project
      </Button>
      <nav className="list-none flex flex-col gap-1">
        <li className="p-2 hover:bg-stone-700 transition duration-200">
          Lorem
        </li>
        <li className="p-2 hover:bg-stone-700 transition duration-200">
          Ipsum
        </li>
      </nav>
    </aside>
  );
}
