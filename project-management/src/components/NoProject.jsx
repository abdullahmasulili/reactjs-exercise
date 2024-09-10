import ProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function EmptyProject() {
  return (
    <section
      id="no-project"
      className="max-w-3xl flex-grow text-stone-600 flex flex-col items-center gap-4 h-full justify-center"
    >
      <figure className="flex justify-center">
        <img
          src={ProjectImage}
          alt="no-project-selected-logo"
          className="w-28"
        />
      </figure>
      <h1 className="font-bold text-2xl">No Project Selected</h1>
      <p className="font-medium">
        Select a project or get started with a new one
      </p>
      <Button className="transition px-4 py-2 rounded-lg bg-stone-700 text-stone-200 hover:text-stone-50">
        Create new project
      </Button>
    </section>
  );
}
