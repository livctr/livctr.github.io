import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/Home";
import Random from "./Pages/Projects";
import Research from "./Pages/Research";
import Blog from "./Pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Sidebar />
      <div className="main--section--container">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <About />
          <Research />
          <Random />
        </Layout>
      } />
      <Route path="/blog" element={
        <Layout>
          <Blog />
        </Layout>
      } />
    </Routes>
  );
}

export default App;
