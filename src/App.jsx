import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, Monitor, Code, Database, Award } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">GN</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg-glow"></div>
          <div className="container hero-content animate-fade-in">
            <h1>Ginim Narang</h1>
            <h2>Frontend Developer & UI/UX Enthusiast</h2>
            <p>
              BCA candidate building responsive, dynamic web applications with a strong foundation in UI/UX design,
              React, and real-time systems. Known for creativity, attention to detail, and fast learning.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="mailto:ginim654@gmail.com" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </section>

        {/* Skills & About Section */}
        <section id="about" className="section container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="glass-panel skill-category">
              <h3><Monitor size={20} /> Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js 15</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            
            <div className="glass-panel skill-category">
              <h3><Code size={20} /> UI/UX & Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Wireframing</span>
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">API Integration</span>
                <span className="skill-tag">Usability Testing</span>
              </div>
            </div>

            <div className="glass-panel skill-category">
              <h3><Database size={20} /> Backend & Real-Time</h3>
              <div className="skill-list">
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">WebRTC</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java / C++</span>
              </div>
            </div>

            <div className="glass-panel skill-category">
              <h3><Award size={20} /> AI & Other</h3>
              <div className="skill-list">
                <span className="skill-tag">ChatGPT</span>
                <span className="skill-tag">GitHub Copilot</span>
                <span className="skill-tag">Google Gemini</span>
                <span className="skill-tag">Claude</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Chart.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-panel timeline-content">
                <h3>QA and Testing Intern</h3>
                <div className="role">PickleBugs Pvt. Ltd., Gurgaon | Nov 2025 - Dec 2025</div>
                <ul>
                  <li>Designed and executed 100+ functional, regression, and UI test cases across web and app platforms, covering multiple user roles and workflows.</li>
                  <li>Identified 25+ UX, navigation, and performance issues through exploratory testing; approximately 70% were resolved before release.</li>
                  <li>Documented and escalated 30+ software defects with clear reproduction steps, screenshots, impact notes, and verification details.</li>
                  <li>Collaborated with developers to verify bug fixes and improve application quality across web workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <h2>Projects</h2>
          <div className="projects-grid">
            
            <div className="glass-panel project-card">
              <h3>Message and Call App</h3>
              <p>Built a responsive chat interface with theme-aware UI, unread message tracking, custom chat backgrounds, and mobile-friendly layouts. Implemented peer-to-peer audio and video calling with WebRTC for low-latency communication.</p>
              <div className="project-tech">
                <span>Next.js 15</span>
                <span>JavaScript</span>
                <span>ShadCN UI</span>
                <span>WebRTC</span>
                <span>Real-Time Database</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <h3>Smart City Platform</h3>
              <p>Developed a real-time city monitoring dashboard for traffic, parking, air quality, and safety data streams. Designed responsive React UI views for citizens and admins with AI-driven dispatch workflows.</p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>WebSockets</span>
                <span>AI Dispatching</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <h3>Sales Management App</h3>
              <p>Created separate Retailer, Distributor, and Admin dashboards for order creation, product listing, invoice generation, and permission-based access.</p>
              <div className="project-tech">
                <span>Full-Stack Web</span>
                <span>JavaScript</span>
                <span>Role-Based Auth</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <h3>Attendance Monitoring System</h3>
              <p>Developed dashboards for teachers, students, and admins with secure login, real-time sync, messaging, and video calling capabilities.</p>
              <div className="project-tech">
                <span>Real-Time Database</span>
                <span>Role-Based Auth</span>
                <span>WebRTC</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <h3>Trading and Financial Tools</h3>
              <p>Designed portfolio analysis micro-tools with performance charting, reusable metric components, and real-time data visualization.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>JavaScript</span>
                <span>Chart.js</span>
                <span>Data Modelling</span>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Achievements Section */}
        <section id="education" className="section container">
          <h2>Education & Achievements</h2>
          <div className="projects-grid">
            <div className="glass-panel project-card">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <div style={{color: 'var(--text-secondary)', marginBottom: '1rem'}}>BVIMR | 2024 - 2027</div>
              <p><strong>CGPA:</strong> 8.75</p>
              <p><strong>Leadership:</strong> Secretary, IEEE Student Branch | Operations Head, Quantaloop Technical Society | Tech Member, GeekRoom</p>
            </div>
            
            <div className="glass-panel project-card">
              <h3>Hackathons & Competitions</h3>
              <ul style={{listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                <li>2nd Place, College SIH Hackathon</li>
                <li>Participated in AMD Slingshot Hackathon</li>
                <li>Organised technical fests and coding competitions</li>
                <li>Mentored juniors in coding logic and project building</li>
              </ul>
            </div>

            <div className="glass-panel project-card">
              <h3>Certifications</h3>
              <ul style={{listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
                <li>Software Testing, Elite Certified - NPTEL</li>
                <li>Python for Data Science - NPTEL</li>
                <li>Introduction to Cybersecurity - Cisco Networking Academy</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <h2>Let's Connect</h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '500px'}}>
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="social-links">
            <a href="mailto:ginim654@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/ginim-narang-631924283" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
          <div style={{marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
            &copy; {new Date().getFullYear()} Ginim Narang.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
