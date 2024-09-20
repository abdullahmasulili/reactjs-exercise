import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [projectsState, setProjectsState] = useState({
    currentProjectId: undefined,
    projects: [],
  });

  function handleInitiateNewProject(data) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        currentProjectId: data,
      };
    });
  }

  function handleCreateProject(data) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...data,
        id: Math.random(),
      };

      return {
        ...prevProjectsState,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
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

  function handleDeleteProject() {
    setCurrentProject(null);
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(
        (project) => project === currentProject
      );

      updatedProjects.splice(projectIndex, 1);

      return updatedProjects;
    });
  }

  let mainContent;

  if (projectsState.currentProjectId === null) {
    mainContent = (
      <CreateProject
        onSave={handleCreateProject}
        onCancel={() => handleInitiateNewProject(undefined)}
      />
    );
  } else if (projectsState.currentProjectId === undefined) {
    mainContent = (
      <EmptyProject
        onInitiateNewProject={() => handleInitiateNewProject(null)}
      />
    );
  } else {
    mainContent = (
      <Project
        projectData={currentProject}
        onTaskUpdate={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <>
      <Sidebar
        projects={projects}
        onInitiateNewProject={() => handleInitiateNewProject(null)}
        onProjectClick={handleSelectedProject}
        activeProject={currentProject}
      />
      <main className="w-full h-full ml-8">{mainContent}</main>
    </>
  );
}

export default App;
