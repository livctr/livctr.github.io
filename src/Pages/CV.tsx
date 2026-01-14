export default function CV() {
  return (
    <section id="cv" className="cv--section main--section">
      <h1>CV</h1>
      <br />
      <div className="cv--content">
        <p>
          You can download my CV here:
        </p>
        <a 
          href="/CV.pdf" 
          download="Victor_Li_CV.pdf"
          className="cv--download-link"
        >
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
