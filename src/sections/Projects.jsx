import Section from '../components/Section';
import { RevealText } from '../components/RevealText';
import { m as motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'OmniView',
    description: 'OmniView is an on-device screen intelligence system acting as a secure photographic memory. Operating as a background service, it captures screen frames while discarding duplicate captures. The screenshots are then processed to extract context, which is further vectorized and stored locally. Users can query past screen history via an on device LLM.',
    github: 'https://github.com/divyansh-1009/OmniView',
    liveUrl: 'https://omniview-five.vercel.app',
    liveLabel: 'OmniView',
    tags: ['Android', 'Kotlin', 'MediaProjection API', 'pHash', 'Accessibility API', 'OCR', 'MobileBERT', 'Gemma 4', 'ObjectBox']
  },
  {
    title: 'AgentLens',
    description: 'AgentLens is an autonomous brand audit engine designed for Generative Engine Optimization (GEO) to evaluate how effectively websites are discovered, interpreted, and cited by AI agents and answer engines. Built to the agentskills.io standard for the Adobe University Hackathon, it analyzes crawler accessibility, structured data grounding, and content extraction to uncover AI visibility gaps. The system generates prioritized audit reports with actionable remediations to maximize brand presence in LLM responses.',
    github: 'https://github.com/schizophrenicmaniac/Brand-AI-Readiness-Audit-Adobe',
    tags: ['Python', 'Agent Skills', 'JSON-LD']
  },
  {
    title: 'MiniTrue',
    description: 'MiniTrue is a decentralized, leaderless time-series database designed for high-throughput IoT telemetry workloads. Operating as a symmetric multi-node cluster, it gossips over TCP and uses a consistent hash ring for deterministic data placement. Ingested data is cached in-memory with pre-aggregated metadata, then compressed and flushed to a custom columnar disk format for fast local and distributed query execution.',
    github: 'https://github.com/divyansh-1009/MiniTrue-Time-Series-Database',
    liveUrl: 'https://minitrue.vercel.app',
    liveLabel: 'MiniTrue',
    tags: ['Go', 'Gossip Protocol', 'Consistent Hashing', 'Merkle Trees', 'Gorilla Compression', 'Parquet Storage']
  },
  {
    title: 'Seiton',
    description: 'Seiton is an autonomous 3D cargo packing optimizer that calculates optimal placements for heterogeneous cargo boxes inside a container, maximizing volume utilization. It uses OpenCV to extract physical dimensions from raw 2D images and routes them through a high-performance C++ heuristic optimization engine. The system also features a real-time digital twin visualization showing box orientations and placement order in a WebGL-powered environment.',
    github: 'https://github.com/divyansh-1009/Seiton',
    liveUrl: 'https://seiton-supply-chain-packaging.vercel.app',
    liveLabel: 'Seiton',
    tags: ['React', 'Three.js', 'Go', 'C++', 'Python', 'OpenCV', 'GSAP']
  },
  {
    title: 'BitVision',
    description: 'BitVision is designed to predict Bitcoin price trends using raw OHLCV market data and technical indicators like RSI and Bollinger Bands. After training and benchmark testing multiple predictive models—including SVMs, Naive Bayes, Decision Trees, LSTMs, XGBoost, and Neural Networks—Ridge Regression was selected as the final model due to yielding the lowest Mean Absolute Error and highest R-squared score on out-of-sample data.',
    github: 'https://github.com/divyansh-1009/BitVision',
    liveUrl: 'https://bitvision-iitj.streamlit.app',
    liveLabel: 'BitVision',
    tags: ['Python', 'Scikit-Learn', 'Ridge Regression', 'Pandas', 'NumPy', 'Streamlit']
  },
  {
    title: 'ClarifAI',
    description: 'ClarifAI is an AI-powered learning platform that allows users to upload their coursework and study notes. To help students prepare for exams, it implements a Retrieval-Augmented Generation pipeline using sentence-transformers and Pinecone to ground answers directly in the uploaded documents. The system also generates custom assessment papers and personalized mock tests to track learning progress.',
    github: 'https://github.com/divyansh-1009/ClarifAI',
    tags: ['Django', 'Flutter', 'Pinecone', 'Google Gemini', 'SBERT', 'SQLite']
  },
  {
    title: 'The Hive',
    description: 'The Hive is a multi-device digital wellness and productivity platform that tracks browsing and application habits across Chrome and Android. It uses on-server transformer models to generate semantic embeddings of domains and apps, classifying them automatically via pgvector and HNSW similarity searches. Daily activities are processed through a Bayesian rating system to score productivity trends and gamify habit building.',
    github: 'https://github.com/divyansh-1009/The-Hive',
    tags: ['Kotlin', 'Node.js', 'PostgreSQL', 'pgvector', 'Chrome Extension', 'Transformers']
  },
  {
    title: 'Destyn',
    description: 'Destyn is a college community application designed to connect local students sharing similar interests across nearby campuses. The platform enables users to discover common interests and helps them receive personalized activity recommendations for hanging out in real life. Additionally, it features an anonymous community gossip page and facilitates real-time chat and interactions.',
    github: 'https://github.com/divyansh-1009/Destyn-Project',
    liveUrl: 'https://destyn.onrender.com',
    liveLabel: 'Destyn',
    tags: ['Next.js', 'Node.js', 'MongoDb', 'Cloudinary', 'WebSockets', 'Google Gemini']
  },
  {
    title: 'Alumni Yearbook Portal',
    description: 'Alumni Yearbook Portal is a portal designed for the graduating batch of IIT Jodhpur. The platform enables students to upload photo memories and write messages to peers, compiling them automatically into personalized digital yearbooks for each graduate. To drive engagement, it features batch-wide polling alongside private messaging that allows user messages and quotes to be directly integrated into yearbooks.',
    github: 'https://github.com/divyansh-1009/Alumni-Yearbook',
    tags: ['React', 'PostgreSQL', 'AWS S3', 'Node.js']
  },
  {
    title: 'PathViz',
    description: 'PathViz is a desktop application designed to visualize maze generation and pathfinding algorithms. Built in C, the system generates random grid mazes and solves them in real-time using Dijkstra\'s and A* search algorithms. The graphical user interface is built natively using GTK, allowing users to watch the step-by-step traversal and compare algorithm efficiencies visually.',
    github: 'https://github.com/divyansh-1009/ICS_project',
    tags: ['C', 'GTK', 'Dijkstra', 'A*']
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub aria-hidden="true" />
              </a>
            </div>

            <RevealText
              text={project.description}
              className="project-description"
              delay={index * 0.1 + 0.2}
            />

            {project.liveUrl && (
              <div className="project-live-link-container">
                <span className="live-link-label">Live App: </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-link"
                  aria-label={`Visit live application for ${project.title}`}
                >
                  {project.liveLabel}
                </a>
              </div>
            )}

            <div className="project-tags">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 239, 179, 0.02);
          border: 1px solid rgba(255, 239, 179, 0.05);
          border-radius: 16px;
        }

        .project-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 239, 179, 0.05);
          border-color: rgba(255, 239, 179, 0.2);
          box-shadow: 0 12px 30px rgba(255, 239, 179, 0.04);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .project-title {
          font-family: var(--font-title);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .project-github-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
          opacity: 0.65;
          font-size: 1.4rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.25rem;
        }

        .project-github-btn:hover {
          opacity: 1;
          color: var(--color-accent);
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(255, 239, 179, 0.3));
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text);
          opacity: 0.8;
        }

        .project-live-link-container {
          margin-top: -0.25rem;
          font-size: 0.9rem;
          color: var(--color-text);
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.5rem;
        }

        .project-live-link {
          color: var(--color-accent);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .project-live-link:hover {
          color: var(--color-text);
          text-shadow: 0 0 8px rgba(255, 239, 179, 0.4);
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-tag {
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

        .project-card:hover .project-tag {
          border-color: rgba(255, 239, 179, 0.15);
          background: rgba(255, 239, 179, 0.05);
          opacity: 0.9;
        }
      `}</style>
    </Section>
  );
};

export default Projects;
