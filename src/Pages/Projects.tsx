export default function Projects() {
  return (
    <section id="projectsSection" className="projects--section main--section">
      <h1>Projects</h1>
      <br />
      <p>The purpose of this page is to help me continuously learn and stay motivated. I hope you find it helpful!</p>
      <div className="project">
          <p className="project-name">
            vidplot
          </p>
          <p className="project-description">
            Video annotation tool. Keypoints, bounding boxes, frame-by-frame labels.
          </p>
          <div className="project-links">
            <a href="https://github.com/livctr/vidplot" className="project-link">
              Project page
            </a>
          </div>
      </div>

      <div className="project">
          <p className="project-name">
            AI Research Explorer
          </p>
          <p className="project-description">
            Explore the latest papers in AI research by topic, along with the researchers leading the frontier.
          </p>
          <div className="project-links">
            <a href="http://ec2-52-90-7-88.compute-1.amazonaws.com" className="project-link">
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
