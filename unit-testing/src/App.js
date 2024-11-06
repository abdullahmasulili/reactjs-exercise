import Greetings from "./components/Greetings";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Posts />
      <Greetings />
    </div>
  );
}

export default App;
