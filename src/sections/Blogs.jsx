import { useState, useEffect } from 'react';
import Section from '../components/Section';
import { m as motion } from 'framer-motion';
import { FaMediumM } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@divyanshyadav1027');
        const data = await response.json();
        if (data.status === 'ok') {
          setBlogs(data.items);
        }
      } catch (error) {
        console.error('Error fetching Medium blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const stripHtmlAndLimit = (html, maxLength) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    let text = tmp.textContent || tmp.innerText || "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Section id="blogs" title="Latest Blogs">
      {loading ? (
        <div className="blogs-loading">
          <p>Loading thoughts & insights...</p>
        </div>
      ) : blogs.length > 0 ? (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index} 
              className="blog-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="blog-link-wrapper"
              >
                {blog.thumbnail && (
                  <div className="blog-thumbnail">
                    <img src={blog.thumbnail} alt={blog.title} loading="lazy" />
                  </div>
                )}
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(blog.pubDate)}</span>
                    <FaMediumM className="blog-icon" />
                  </div>
                  
                  <h3 className="blog-title">{blog.title}</h3>
                  
                  <p className="blog-excerpt">
                    {stripHtmlAndLimit(blog.description, 150)}
                  </p>

                  <div className="blog-tags">
                    {blog.categories && blog.categories.slice(0, 3).map((tag, tagIdx) => (
                      <span key={tagIdx} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="blogs-empty">
          <p>No blogs published yet. Check back soon!</p>
        </div>
      )}

      <style>{`
        .blogs-loading, .blogs-empty {
          text-align: center;
          padding: 3rem;
          color: var(--color-text);
          opacity: 0.7;
          font-family: var(--font-family);
          font-style: italic;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 239, 179, 0.02);
          border: 1px solid rgba(255, 239, 179, 0.05);
          border-radius: 16px;
        }

        .blog-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 239, 179, 0.05);
          border-color: rgba(255, 239, 179, 0.2);
          box-shadow: 0 12px 30px rgba(255, 239, 179, 0.04);
        }

        .blog-link-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        .blog-thumbnail {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 239, 179, 0.05);
        }

        .blog-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-card:hover .blog-thumbnail img {
          transform: scale(1.05);
        }

        .blog-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          opacity: 0.7;
          font-size: 0.85rem;
        }

        .blog-icon {
          color: var(--color-accent);
          font-size: 1.2rem;
        }

        .blog-title {
          font-family: var(--font-title);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .blog-excerpt {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text);
          opacity: 0.8;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .blog-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          background: rgba(255, 239, 179, 0.03);
          border: 1px solid rgba(255, 239, 179, 0.08);
          color: var(--color-accent);
          opacity: 0.75;
          font-family: var(--font-family);
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
        }

        .blog-card:hover .blog-tag {
          border-color: rgba(255, 239, 179, 0.15);
          background: rgba(255, 239, 179, 0.05);
          opacity: 0.9;
        }
      `}</style>
    </Section>
  );
};

export default Blogs;
