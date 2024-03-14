import { useState } from "react";

import Input from "./componenets/Input";
import NewProject from "./componenets/NewProject";
import ProjectSidebar from "./componenets/ProjectSidebar";
import NoProjectSelected from "./componenets/NoProjectSelected";
import SelectedProject from "./componenets/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleAddTask() {}
  function handleDeleteTask() {}
  function handleSelectProject() {}

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }
  function handleAddProject() {}
  function handleDeleteProject() {}

  let content;

  if (projectsState.selectedProjectID === null) {
    // A Project has been Created but Yet to be Filled. - Explicit
    content = <NewProject />;
  } else if (projectsState.selectedProjectID === undefined) {
    // No Projects are Created By user Yet. -- Implicit
    content = <NoProjectSelected />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      <NewProject onStartAddProject={handleStartAddProject} />
    </main>
  );
}

export default App;
