// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../Components/MarkdownRenderer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // Map slugs to markdown files
  const getMarkdownPath = (slug: string) => {
    const slugToFile: { [key: string]: string } = {
      'understanding-uncertainty-in-machine-learning': '/blog/understanding-uncertainty-in-machine-learning.md',
    };
    
    return slugToFile[slug] || '/blog/not-found.md';
  };

  return (
    <section className="blog-post--section">
      <div className="blog-post--container">
        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
        
        <div className="blog-post--content">
          <MarkdownRenderer filePath={getMarkdownPath(slug!)} />
        </div>
      </div>
    </section>
  );
} 