const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'CSS',
  'PostgreSQL',
  'Git',
  'Figma',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">A little about me</h2>
        <div className="about-content">
          <p>
            I&apos;m a developer who enjoys the intersection of design and
            engineering. I care about writing clean code, building intuitive
            interfaces, and paying attention to the small details that make a
            product feel polished.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, or learning something
            completely outside of tech.
          </p>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
