import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";
import EmptyProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    currentProjectId: undefined,
    projects: [],
    tasks: [],
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

  function handleUpdateProject(projectData) {
    setProjectsState((prevState) => {
      const updatedState = { ...prevState, projects: [...prevState.projects] };
      const projectIndex = updatedState.projects.findIndex(
        (project) => project.id === projectData.id
      );

      if (projectIndex !== -1) {
        updatedState.projects.splice(projectIndex, 1, projectData);
      }

      return updatedState;
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

  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const newTask = {
        name: task,
        projectId: projectsState.currentProjectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleRemoveTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  const currentProject = projectsState.projects.find(
    (project) => project.id === projectsState.currentProjectId
  );
  const currentProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.currentProjectId
  );

  let mainContent = (
    <Project
      projectData={currentProject}
      tasks={currentProjectTasks}
      onAddTask={(task) => handleAddTask(task)}
      onDeleteTask={(taskId) => handleRemoveTask(taskId)}
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
