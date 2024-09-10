import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <main className="w-full">
        <CreateProject />
      </main>
    </>
  );
}

export default App;
