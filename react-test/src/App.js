import logo from "./logo.svg";
import "./App.css";
import UseHook from "./components/UseHook";
import Reducer from "./components/Reducer";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
function App() {
  return (
    <div className="App">
      <Memo />
      <Ref />
    </div>
  );
}

export default App;
