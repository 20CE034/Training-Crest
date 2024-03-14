import { useState } from "react";
import Input from "./componenets/Input";
import NewProject from "./componenets/NewProject";
import ProjectSidebar from "./componenets/ProjectSidebar";
import NoProjectSelected from "./componenets/NoProjectSelected";

function App() {
  const [ProjectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        selectedProjectID: null,
        projects: [],
      };
    });
  }

  let content;
  if (ProjectsState.selectedProjectID === null) {
    // A Project has been Created but Yet to be Filled. - Explicit
    content = <NewProject />;
  } else if (ProjectsState.selectedProjectID === undefined) {
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
