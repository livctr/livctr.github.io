export default function Research() {
  return (
    <section id="researchSection" className="research--section main--section">
      <h1>Publications</h1>
      <br />

      <div className="publication">
          <p className="publication-name">
            SustainGym: Reinforcement Learning Environments for Sustainable Energy
            Systems
          </p>
          <p className="publication-conference">NeurIPS 2023</p>
          <p className="publication-authors">
            Christopher Yeh, <strong>Victor Li</strong>, Rajeev Datta, Julio Arroyo,
            Nicolas Christianson, Chi Zhang, Yize Chen, Mohammad Mehdi Hosseini,
            Azarang Golmohammadi, Yuanyuan Shi, Yisong Yue, Adam Wierman
          </p>
          <div className="publication-links">
            <a
              href="https://chrisyeh96.github.io/sustaingym/"
              className="publication-link"
            >
              Project
            </a>
            <a
              href="https://papers.nips.cc/paper_files/paper/2023/hash/ba74855789913e5ed36f87288af79e5b-Abstract-Datasets_and_Benchmarks.html"
              className="publication-link"
            >
              Paper
            </a>
            <a
              href="https://github.com/chrisyeh96/sustaingym"
              className="publication-link"
            >
              Code
            </a>
          </div>
      </div>

      <div className="publication">
          <p className="publication-name">
            Machine learning for deep space network antenna motions detection
          </p>
          <p className="publication-conference">SPIE Photonics West 2022</p>
          <p className="publication-authors">
            <strong>Victor Li</strong>, James McKelvy, Lin Yi
          </p>
          <div className="publication-links">
            <a
              href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12019/2608321/Machine-learning-for-deep-space-network-antenna-motions-detection/10.1117/12.2608321.short"
              className="publication-link"
            >
              Paper & Presentation
            </a>
          </div>
      </div>


    </section>
  );
}
