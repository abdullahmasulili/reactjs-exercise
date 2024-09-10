import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  function handleCreateProject(data) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.push(data);

      return updatedProjects;
    });

    setIsCreatingProject(false);
  }

  return (
    <>
      <Sidebar
        projects={projects}
        onAddProject={() => setIsCreatingProject(true)}
      />
      <main className="w-full h-full ml-8">
        {!currentProject && !isCreatingProject && (
          <EmptyProject onCreateProject={() => setIsCreatingProject(true)} />
        )}
        {isCreatingProject && <CreateProject onSave={handleCreateProject} />}
      </main>
    </>
  );
}

export default App;
