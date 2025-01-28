export default function Home() {
  return (
    <section id="aboutSection" className="about--section main--section">
      <div className="main--section--content--box">
        <div className="main--section--content">
          <h1>
            Hi! I'm <strong>Victor Li</strong>.
          </h1>
          <p>
            I am a first-year PhD student at the{" "}
            <a href="https://cds.nyu.edu/">
              NYU Center for Data Science
            </a>
            , where I'm fortunate to be advised by{" "}
            <a href="https://math.nyu.edu/~cfgranda/">
              Prof. Carlos Fernandez-Granda
            </a>{" "}
            and <a href="https://cecilialeiqi.github.io/">Prof. Qi Lei</a>.
            Recently, I've been interested in{" "}
            <strong>video understanding in healthcare</strong> as well as
            problems in <strong>distribution shift</strong>.
          </p>
          <p>
            Previously, I graduated from Caltech with a B.S. in Electrical
            Engineering in 2024. During this time, I explored convex
            optimization with{" "}
            <a href="http://users.cms.caltech.edu/~venkatc/">
              Prof. Venkat Chandrasekaran
            </a>{" "}
            and reinforcement learning for sustainability with{" "}
            <a href="https://adamwierman.com/">Prof. Adam Wierman</a>. I also
            got the chance to play some{" "}
            <a href="https://gocaltech.com/sports/mens-tennis/roster/victor-li/5157">
              tennis
            </a>
            .
          </p>
          <p>
            I am always looking for new collaborations, especially if you're a
            student at NYU. Feel free to contact me if our interests align or if
            you have questions or comments about my work!
          </p>
        </div>
      </div>
      <div className="about--section--img">
        <img src="./img/me.jpg" alt="Image" />
      </div>
    </section>
  );
}
