export default function Home() {
  return (
    <section id="aboutSection" className="about--section main--section">
      <div className="main--section--content--box">
        <div className="main--section--content">
          <h1>
            Hi! I'm <strong>Victor Li</strong>.
          </h1>
          <p>
            I am a second-year PhD student at the{" "}
            <a href="https://cds.nyu.edu/">
              NYU Center for Data Science
            </a>
            , where I'm fortunate to be advised by{" "}
            <a href="https://math.nyu.edu/~cfgranda/">
              Prof. Carlos Fernandez-Granda
            </a>{" "}
            and <a href="https://cecilialeiqi.github.io/">Prof. Qi Lei</a>.
            Previously, I earned my B.S. in Electrical Engineering from Caltech in 2024,
            where I worked on convex optimization with{" "}
            <a href="http://users.cms.caltech.edu/~venkatc/">
              Prof. Venkat Chandrasekaran
            </a>{" "}
            and reinforcement learning for sustainability with{" "}
            <a href="https://adamwierman.com/">Prof. Adam Wierman</a>.
          </p>
          <p>
            Broadly, I am interested in developing theory and methods that are designed to handle uncertainty and incompleteness in complex, real-world data. I am particularly interested in machine learning and computer vision applications to healthcare. Feel free to peruse my{" "}
            <a href="/research">research page</a>{" "}
            to learn more.
          </p>
          <p>
            When I'm not doing research, I enjoy playing{" "}
            <a href="https://gocaltech.com/sports/mens-tennis/roster/victor-li/5157">
              tennis
            </a>{", "}
            other racket sports, and running. Feel free to connect with me if you are interested in collaborating.
          </p>
        </div>
      </div>
      <div className="about--section--img">
        <img src="./img/me.jpg" alt="Image" />
      </div>
    </section>
  );
}
