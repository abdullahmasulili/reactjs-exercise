import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  function handleCreateProject(data) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.push(data);

      return updatedProjects;
    });

    setIsCreateProject(false);
  }

  return (
    <>
      <Sidebar
        projects={projects}
        onAddProject={() => setIsCreateProject(true)}
      />
      <main className="w-full h-full ml-8">
        {!currentProject && !isCreateProject && (
          <EmptyProject onCreateProject={() => setIsCreateProject(true)} />
        )}
        {isCreateProject && <CreateProject onSave={handleCreateProject} />}
      </main>
    </>
  );
}

export default App;
