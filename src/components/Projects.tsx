const projects = [
  {
    name: 'Project Alpha',
    description:
      'A full-stack web application for managing and tracking personal goals with real-time progress updates and analytics.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Design System',
    description:
      'A minimal component library built for consistency across projects. Includes accessible, composable UI primitives.',
    tags: ['React', 'Storybook', 'CSS'],
    link: '#',
  },
  {
    name: 'CLI Tool',
    description:
      'A developer productivity tool that automates common workflows like scaffolding, linting, and deployment pipelines.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    link: '#',
  },
  {
    name: 'Open Source Contrib',
    description:
      'Meaningful contributions to popular open-source projects, including bug fixes, feature additions, and documentation.',
    tags: ['Open Source', 'Git', 'Community'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">02 — Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-description">
          A few projects I&apos;ve worked on recently. Each one taught me
          something new.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="project-card"
            >
              <div className="project-header">
                <span className="project-name">{project.name}</span>
                <span className="project-arrow">↗</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
