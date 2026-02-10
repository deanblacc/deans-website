export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">03 — Contact</p>
        <h2 className="section-title">Let&apos;s connect</h2>
        <div className="contact-content">
          <p>
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out if you&apos;d like to work
            together or just say hello.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com" className="contact-link">
              <span className="contact-link-label">Email</span>
              hello@example.com
            </a>
            <a
              href="https://github.com/deanblacc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">GitHub</span>
              github.com/deanblacc
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">LinkedIn</span>
              linkedin.com/in/dean
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
