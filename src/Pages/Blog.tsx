const posts = [
  {
    title: "Qwen3-VL Video Pre-Processing Guide",
    date: "March 11, 2026",
    description:
      "Reference for video pre-processing (frame sampling and resizing) when running inference with Qwen3-VL and Qwen3.5-VL, covering both HuggingFace Transformers and vLLM. Open up the Jupyter notebook in the link.",
    href: "https://github.com/livctr/qwen3-video-inference/tree/main",
    external: true,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="main--section blog--list--section">
      <nav className="content--nav">
        <a href="/" className="content--nav--link">← home</a>
      </nav>
      <h1 className="blog--list--heading">Blog</h1>
      <ul className="blog--list">
        {posts.map((post) => (
          <li key={post.href} className="blog--list--item">
            <div className="blog--list--meta">
              <a
                href={post.href}
                className="blog--list--title"
                {...(post.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {post.title}
              </a>
              <span className="blog--list--date">{post.date}</span>
            </div>
            <p className="blog--list--desc">{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
