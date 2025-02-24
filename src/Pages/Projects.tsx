export default function Projects() {
  return (
    <section id="projectsSection" className="projects--section main--section">
      <h1>Projects</h1>
      <br />

      <div className="project">
          <p className="project-name">
            AI Research Explorer
          </p>
          <p className="project-description">
            Explore by topic the latest papers in AI research, along with the researchers writing them.
          </p>
          <div className="project-links">
            <a href="http://ec2-34-238-247-252.compute-1.amazonaws.com/" className="project-link">
              Demo
            </a>
            <a href="https://github.com/livctr/ai-topics-explorer" className="project-link">
              Code
            </a>
          </div>
      </div>

      <div className="project">
          <p className="project-name">
            my_setup
          </p>
          <p className="project-description">
            A reference for working with HPC clusters. Most useful for NYU students
            using Greene and Big Purple.
          </p>
          <div className="project-links">
            <a href="https://github.com/livctr/my_setup" className="project-link">
              Reference
            </a>
          </div>
      </div>
    </section>
  );
}
