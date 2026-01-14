export default function About() {
  return (
    <>
      <nav className="content--nav">
        <a href="#about" className="content--nav--link">about</a>
        <a href="#research" className="content--nav--link">research</a>
        <a href="#random" className="content--nav--link">random</a>
        <a href="/Victor_Li_CV.pdf" className="content--nav--link">cv</a>
      </nav>
      <section id="about" className="about--section main--section">
        <div className="main--section--content--box">
          <div className="main--section--content">
            <h1>
              Hi! I'm <strong>Victor Li</strong>.
            </h1>
            <p>
              I am a second-year PhD student in Data Science at New York University, where I work on vision-language models and self-improvement systems. I am lucky to be advised by{" "}
              <a href="https://math.nyu.edu/~cfgranda/">
                Prof. Carlos Fernandez-Granda
              </a>{" "}
              and <a href="https://cecilialeiqi.github.io/">Prof. Qi Lei</a>.
            </p>
            <p>
              My research explores how AI systems can support decision-making in high-stakes environments like clinical care. Towards this goal, I am currently focused on:
            </p>
            <ul className="research-focus-list">
              <li>Understanding human motion through video.</li>
              <li>Advancing the continuous-time perception of vision-language models.</li>
              <li>Developing methodology to ensure safe and reliable model deployment.</li>
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
