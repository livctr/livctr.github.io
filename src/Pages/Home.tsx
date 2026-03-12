import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <nav className="content--nav">
        <a href="#about" className="content--nav--link">about</a>
        <a href="#research" className="content--nav--link">research</a>
        <a href="#random" className="content--nav--link">random</a>
        <a href="/blog" className="content--nav--link">blog</a>
        {/* <a href="/Victor_Li_CV.pdf" className="content--nav--link">cv</a> */}
      </nav>
      <div className="sidebar--mobile">
        <div className="sidebar--image--container">
          <img src="/img/me.jpg" alt="Victor Li" className="sidebar--image" />
        </div>
        <div className="sidebar--icons--row">
          <a href="mailto:vhl2022@nyu.edu" className="sidebar--link" title="Email">
            <FontAwesomeIcon icon={faEnvelope} className="sidebar--icon" />
          </a>
          <a href="https://www.linkedin.com/in/livctr/" target="_blank" rel="noopener noreferrer" className="sidebar--link" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="sidebar--icon" />
          </a>
          <a href="https://github.com/livctr" target="_blank" rel="noopener noreferrer" className="sidebar--link" title="GitHub">
            <FontAwesomeIcon icon={faGithub} className="sidebar--icon" />
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=wiZHFH4AAAAJ" target="_blank" rel="noopener noreferrer" className="sidebar--link" title="Google Scholar">
            <FontAwesomeIcon icon={faGoogleScholar} className="sidebar--icon" />
          </a>
        </div>
      </div>
      <section id="about" className="about--section main--section">
        <div className="main--section--content--box">
          <div className="main--section--content">
            <h1>
              Hi! I'm <strong>Victor Li</strong>.
            </h1>
            <p>
              I am a second-year PhD student in Data Science at New York University,
              where I'm lucky to be advised by{" "}
              <a href="https://math.nyu.edu/~cfgranda/">Prof. Carlos Fernandez-Granda</a>{" "}
              and <a href="https://cecilialeiqi.github.io/">Prof. Qi Lei</a>.
              I research vision and multimodal foundation models, with a particular interest in their applications to industry and healthcare.
            </p>
            <p>
              Towards this goal, I am currently focused on:
            </p>
            <ul className="research-focus-list">
              <li>Advancing temporal understanding in video models.</li>
              <li>Advancing human motion understanding.</li>
              <li>Studying safety in model deployment.</li>
            </ul>
            <p>
              Before my PhD, I completed my BS in Electrical Engineering at Caltech, where I interned at{" "}
              <a href="https://sig.com/">Susquehanna International Group</a> and{" "}
              <a href="https://www.jpl.nasa.gov/">NASA Jet Propulsion Laboratory</a>. At Caltech, I was fortunate to work with{" "}
              <a href="http://users.cms.caltech.edu/~venkatc/">
                Prof. Venkat Chandrasekaran
              </a>{" "}
              on convex optimization and{" "}
              <a href="https://adamwierman.com/">Prof. Adam Wierman</a>{" "}
              on reinforcement learning.
            </p>
            <p>
              You can reach me at vhl2022 [at] nyu.edu. Feel free to email me!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
