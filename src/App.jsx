import "./App.css";
import ScriptReader from "./components/scriptReader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>AI project - CS280 - Winter 2023</p>
        <p>Bradley Bateman</p>
      </header>
      <div className="Content">
        <ScriptReader />
      </div>
    </div>
  );
}

export default App;
