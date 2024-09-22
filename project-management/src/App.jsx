import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
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
        currentProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleSelectedProject(projectId) {
    handleInitiateNewProject(projectId);
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
    setProjectsState((prevState) => {
      const updatedProjectState = {
        ...prevState,
        currentProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.currentProjectId
        ),
      };

      return updatedProjectState;
    });
  }

  const currentProject = projectsState.projects.find(
    (project) => project.id === projectsState.currentProjectId
  );

  let mainContent = (
    <Project
      projectData={currentProject}
      onTaskUpdate={handleUpdateProject}
      onDeleteProject={handleDeleteProject}
    />
  );

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
  }

  return (
    <>
      <Sidebar
        projects={projectsState.projects}
        onInitiateNewProject={() => handleInitiateNewProject(null)}
        onProjectClick={handleSelectedProject}
        activeProject={projectsState.currentProjectId}
      />
      <main className="w-full h-full ml-8">{mainContent}</main>
    </>
  );
}

export default App;
