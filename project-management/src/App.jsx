import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([]);

  function handleCreateProject(data) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.push(data);

      return updatedProjects;
    });
  }

  return (
    <>
      <Sidebar projects={projects} />
      <main className="w-full ml-8">
        <CreateProject onSave={handleCreateProject} />
      </main>
    </>
  );
}

export default App;
