export default function Research() {
  return (
    <section id="research" className="research--section main--section">
      <h1>Publications</h1>
      <br />

      <div className="publication">
          <p className="publication-name">
            Vision-language models for human motion understanding: Lessons from stroke rehabilitation
          </p>
          <p className="publication-conference">Under review.</p>
          <p className="publication-authors">
            <strong>Victor Li</strong>, Naveenraj Kamalakannan, Avinash Parnandi, Heidi Schambra, Carlos Fernandez-Granda
          </p>
          <div className="publication-links">
            <a
              href="https://arxiv.org/pdf/2511.17727"
              className="publication-link"
            >
              Paper
            </a>
            <a
              href="https://github.com/livctr/vlms4rehab"
              className="publication-link"
            >
              Code
            </a>
          </div>
      </div>

      <div className="publication">
          <p className="publication-name">
            Performative Risk Control: Calibrating Models for Reliable Deployment under Performativity
          </p>
          <p className="publication-conference">NeurIPS 2025.</p>
          <p className="publication-authors">
            <strong>Victor Li</strong>, Baiting Chen, Yuzhen Mao, Qi Lei, Zhun Deng
          </p>
          <div className="publication-links">
            <a
              href="https://arxiv.org/abs/2505.24097"
              className="publication-link"
            >
              Paper
            </a>
          </div>
      </div>

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

    </section>
  );
}
