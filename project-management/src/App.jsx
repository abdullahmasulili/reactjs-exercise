import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";
import Project from "./components/Project";

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

  function handleSelectedProject(projectData) {
    setCurrentProject(projectData);
  }

  function handleUpdateProject(project) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(
        (project) => project === project
      );

      if (projectIndex !== -1) {
        updatedProjects.splice(projectIndex, 1, project);
      }

      return updatedProjects;
    });
  }

  return (
    <>
      <Sidebar
        projects={projects}
        onAddProject={() => setIsCreatingProject(true)}
        onProjectClick={handleSelectedProject}
        activeProject={currentProject}
      />
      <main className="w-full h-full ml-8">
        {!currentProject && !isCreatingProject && (
          <EmptyProject onCreateProject={() => setIsCreatingProject(true)} />
        )}
        {isCreatingProject && (
          <CreateProject
            onSave={handleCreateProject}
            onCancel={() => setIsCreatingProject(false)}
          />
        )}
        {currentProject && (
          <Project
            projectData={currentProject}
            onTaskUpdate={handleUpdateProject}
          />
        )}
      </main>
    </>
  );
}

export default App;
