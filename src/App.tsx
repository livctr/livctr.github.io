import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Research from "./Pages/Research";
// import Blog from "./Pages/Blog";
// import BlogPost from "./Pages/BlogPost";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar--container">
          <TopNav />
        </div>
        <div className="main--section--container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/blog/:slug" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
