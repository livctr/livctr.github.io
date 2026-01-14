import "./App.css";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/Home";
import Random from "./Pages/Projects";
import Research from "./Pages/Research";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main--section--container">
        <About />
        <Research />
        <Random />
      </div>
    </div>
  );
}

export default App;
