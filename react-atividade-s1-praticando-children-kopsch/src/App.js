import "./App.css";
import CenteredCard from "./components/CenteredCard.js";
function App() {
  return (
    <div className="App">
      <CenteredCard children="Light Blue" />
      <CenteredCard children="Light Pink" />
      <CenteredCard children="Light Yellow" />
    </div>
  );
}

export default App;
